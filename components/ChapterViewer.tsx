import React, { useState, useEffect } from 'react';
import { Chapter } from '../types';
import { CheckCircle, AlertCircle, ChevronRight, ChevronLeft, Lock } from 'lucide-react';

interface ChapterViewerProps {
  chapter: Chapter;
  onNext?: () => void;
  onPrev?: () => void;
}

const ChapterViewer: React.FC<ChapterViewerProps> = ({ chapter, onNext, onPrev }) => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<{[key: number]: number}>({});
  const [quizResult, setQuizResult] = useState<{correct: boolean, feedback: string} | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);

  // Reset state when chapter changes
  useEffect(() => {
    setShowQuiz(false);
    setQuizAnswers({});
    setQuizResult(null);
    setIsCompleted(false);
  }, [chapter.id]);

  const handleAnswer = (questionId: number, optionIndex: number) => {
    setQuizAnswers(prev => ({...prev, [questionId]: optionIndex}));
    
    const question = chapter.quiz?.find(q => q.id === questionId);
    if (question) {
      const isCorrect = question.correctAnswer === optionIndex;
      setQuizResult({
        correct: isCorrect,
        feedback: isCorrect ? "¡Correcto! " + question.explanation : "Incorrecto. " + question.explanation
      });
      
      if (isCorrect) {
        setIsCompleted(true);
      }
    }
  };

  const canAdvance = !chapter.quiz || chapter.quiz.length === 0 || isCompleted;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto my-6">
      <div 
        className="h-48 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${chapter.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end">
          <div className="p-6 text-white w-full">
            <h2 className="text-3xl font-bold">{chapter.title}</h2>
            <p className="text-slate-200 mt-2 font-medium">{chapter.description}</p>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8">
        <div className="prose prose-slate max-w-none mb-8">
          {chapter.content}
        </div>

        {chapter.quiz && chapter.quiz.length > 0 && (
          <div className="mt-8 border-t pt-6">
            <h3 className="font-bold text-lg text-indigo-900 mb-4 flex items-center gap-2">
              <CheckCircle size={20}/> Evaluación de Capítulo
            </h3>
            <p className="text-sm text-slate-600 mb-4">Debes responder correctamente para avanzar al siguiente capítulo.</p>
            
            <div className="bg-indigo-50 rounded-lg p-6 animate-fadeIn border border-indigo-100">
              {chapter.quiz.map((q) => (
                <div key={q.id} className="mb-6 last:mb-0">
                  <p className="font-medium text-slate-800 mb-3">{q.question}</p>
                  <div className="space-y-2">
                    {q.options.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleAnswer(q.id, idx)}
                        disabled={isCompleted}
                        className={`w-full text-left p-3 rounded border transition-colors ${
                          quizAnswers[q.id] === idx 
                            ? (idx === q.correctAnswer ? 'bg-green-100 border-green-500 text-green-800' : 'bg-red-100 border-red-500 text-red-800')
                            : 'bg-white border-slate-200 hover:border-indigo-300'
                        } ${isCompleted ? 'cursor-default opacity-80' : ''}`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                  {quizAnswers[q.id] !== undefined && (
                    <div className={`mt-3 text-sm p-3 rounded flex items-start gap-2 ${
                      quizAnswers[q.id] === q.correctAnswer ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'
                    }`}>
                      {quizAnswers[q.id] === q.correctAnswer ? <CheckCircle size={18} className="mt-0.5 shrink-0"/> : <AlertCircle size={18} className="mt-0.5 shrink-0"/>}
                      <span>{quizAnswers[q.id] === q.correctAnswer ? "¡Correcto! " : "Incorrecto. "} {q.explanation}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="bg-slate-50 border-t p-4 flex justify-between items-center">
        <button 
          onClick={onPrev} 
          disabled={!onPrev}
          className={`flex items-center gap-1 px-4 py-2 rounded font-medium ${!onPrev ? 'text-slate-300 cursor-not-allowed' : 'text-slate-600 hover:bg-slate-200'}`}
        >
          <ChevronLeft size={20} /> Anterior
        </button>
        
        {onNext ? (
          <button 
            onClick={onNext} 
            disabled={!canAdvance}
            className={`flex items-center gap-2 px-6 py-2 rounded font-bold transition-all ${
              canAdvance 
                ? 'bg-teal-600 text-white hover:bg-teal-700 shadow-md hover:shadow-lg' 
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            {!canAdvance && <Lock size={16} />} Siguiente <ChevronRight size={20} />
          </button>
        ) : (
          <div className="text-teal-600 font-bold px-4">¡Curso Completado!</div>
        )}
      </div>
    </div>
  );
};

export default ChapterViewer;