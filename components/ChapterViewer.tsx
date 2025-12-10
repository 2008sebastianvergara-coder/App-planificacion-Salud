
import React, { useState, useEffect } from 'react';
import { Chapter } from '../types';
import { CheckCircle, AlertCircle, ChevronRight, ChevronLeft, Lock, RefreshCw, RotateCcw, HelpCircle } from 'lucide-react';

interface ChapterViewerProps {
  chapter: Chapter;
  onNext?: () => void;
  onPrev?: () => void;
  isCompleted?: boolean;
  onComplete?: () => void;
}

const ChapterViewer: React.FC<ChapterViewerProps> = ({ 
  chapter, 
  onNext, 
  onPrev,
  isCompleted = false,
  onComplete 
}) => {
  const [quizAnswers, setQuizAnswers] = useState<{[key: number]: number}>({});
  
  // Reset state when chapter changes
  useEffect(() => {
    setQuizAnswers({});
  }, [chapter.id]);

  const handleAnswer = (questionId: number, optionIndex: number) => {
    setQuizAnswers(prev => ({...prev, [questionId]: optionIndex}));
    
    const question = chapter.quiz?.find(q => q.id === questionId);
    if (question) {
      const isCorrect = question.correctAnswer === optionIndex;
      if (isCorrect && onComplete) {
        onComplete();
      }
    }
  };

  const retryQuestion = (questionId: number) => {
    setQuizAnswers(prev => {
      const newAnswers = { ...prev };
      delete newAnswers[questionId];
      return newAnswers;
    });
  };

  const resetQuiz = () => {
    setQuizAnswers({});
  };

  const canAdvance = (!chapter.quiz || chapter.quiz.length === 0 || isCompleted);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto my-6 border border-slate-200">
      <div 
        className="h-64 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${chapter.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex items-end">
          <div className="p-8 text-white w-full">
            <div className="uppercase tracking-widest text-xs font-bold text-teal-300 mb-2">Módulo de Aprendizaje</div>
            <h2 className="text-4xl font-extrabold mb-3 leading-tight text-white drop-shadow-md">{chapter.title}</h2>
            <p className="text-slate-100 font-medium text-lg leading-snug max-w-2xl drop-shadow-sm">{chapter.description}</p>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-10">
        <div className="prose prose-slate max-w-none mb-12 prose-headings:text-slate-800 prose-p:text-slate-600 prose-strong:text-slate-900 prose-li:text-slate-600">
          {chapter.content}
        </div>

        {chapter.quiz && chapter.quiz.length > 0 && (
          <div className="mt-12 bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm">
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-200">
              <div>
                <h3 className="font-bold text-2xl text-slate-800 mb-1 flex items-center gap-2">
                  <HelpCircle className="text-teal-600" size={28}/> Evaluación de Conocimientos
                </h3>
                <p className="text-slate-500 text-sm">Responde correctamente para avanzar.</p>
              </div>
              {Object.keys(quizAnswers).length > 0 && (
                <button 
                  onClick={resetQuiz}
                  className="text-xs flex items-center gap-2 text-slate-600 hover:text-teal-600 font-semibold bg-white px-4 py-2 rounded-full border border-slate-200 hover:border-teal-200 shadow-sm transition-all"
                >
                  <RotateCcw size={14} /> Reiniciar Quiz
                </button>
              )}
            </div>
            
            <div className="space-y-10">
              {chapter.quiz.map((q, qIdx) => {
                const hasAnswered = quizAnswers[q.id] !== undefined;
                const selectedIdx = quizAnswers[q.id];
                const isCorrect = selectedIdx === q.correctAnswer;

                return (
                  <div key={q.id} className="animate-fadeIn">
                    <div className="flex items-start gap-4 mb-4">
                      <span className="bg-slate-200 text-slate-600 font-bold w-8 h-8 flex items-center justify-center rounded-full text-sm shrink-0">
                        {qIdx + 1}
                      </span>
                      <p className="font-bold text-lg text-slate-800 pt-1">{q.question}</p>
                    </div>
                    
                    <div className="grid gap-3 pl-12">
                      {q.options.map((opt, idx) => {
                        const isSelected = selectedIdx === idx;
                        
                        let btnClass = "w-full text-left p-4 rounded-xl border-2 transition-all duration-200 font-medium relative flex items-center gap-3 group ";
                        
                        if (hasAnswered) {
                          if (isSelected) {
                            if (isCorrect) {
                              // Seleccionado y Correcto
                              btnClass += "bg-green-50 border-green-500 text-green-800 shadow-md transform scale-[1.01]";
                            } else {
                              // Seleccionado e Incorrecto
                              btnClass += "bg-red-50 border-red-500 text-red-800 shadow-md";
                            }
                          } else if (idx === q.correctAnswer) {
                            // No seleccionado pero era el correcto (Revelar)
                            btnClass += "bg-white border-green-200 text-green-700 opacity-70"; 
                          } else {
                            // Los demás
                            btnClass += "bg-slate-50 border-transparent text-slate-400 opacity-50 grayscale";
                          }
                        } else {
                          // Estado inicial (Sin responder)
                          btnClass += "bg-white border-slate-200 hover:border-indigo-400 hover:bg-indigo-50 text-slate-600 hover:text-indigo-900 hover:shadow-md active:scale-[0.99]";
                        }

                        return (
                          <button
                            key={idx}
                            onClick={() => !hasAnswered && handleAnswer(q.id, idx)}
                            disabled={hasAnswered}
                            className={btnClass}
                          >
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                              hasAnswered && isSelected 
                                ? (isCorrect ? 'border-green-600 bg-green-600 text-white' : 'border-red-500 bg-red-500 text-white') 
                                : 'border-slate-300 group-hover:border-indigo-400'
                            }`}>
                              {hasAnswered && isSelected && (isCorrect ? <CheckCircle size={12}/> : <AlertCircle size={12}/>)}
                            </div>
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                    
                    {/* Feedback Section */}
                    {hasAnswered && (
                      <div className={`mt-5 ml-12 p-5 rounded-xl flex items-start gap-4 animate-in slide-in-from-top-2 border ${
                        isCorrect 
                          ? 'bg-green-50 border-green-200 text-green-900' 
                          : 'bg-red-50 border-red-200 text-red-900'
                      }`}>
                        <div className={`p-2 rounded-full shrink-0 ${isCorrect ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                          {isCorrect ? <CheckCircle size={20}/> : <AlertCircle size={20}/>}
                        </div>
                        <div className="flex-1">
                          <strong className="block text-lg mb-1">{isCorrect ? "¡Excelente!" : "Incorrecto"}</strong>
                          <p className={`text-sm mb-3 opacity-90 leading-relaxed ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                            {q.explanation}
                          </p>
                          
                          {!isCorrect && (
                            <button 
                              onClick={() => retryQuestion(q.id)}
                              className="flex items-center gap-2 text-xs font-bold text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition-colors shadow-sm"
                            >
                              <RefreshCw size={14} /> Intentar nuevamente
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <div className="bg-white border-t p-6 flex flex-col sm:flex-row justify-between items-center gap-4 sticky bottom-0 z-20 shadow-[0_-8px_30px_rgba(0,0,0,0.05)]">
        <button 
          onClick={onPrev} 
          disabled={!onPrev}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-slate-600 transition-all ${
            !onPrev ? 'opacity-0 cursor-default' : 'hover:bg-slate-100 hover:text-slate-900'
          }`}
        >
          <ChevronLeft size={20} /> Anterior
        </button>
        
        {onNext ? (
          <button 
            onClick={onNext} 
            disabled={!canAdvance}
            className={`flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all transform shadow-xl ${
              canAdvance 
                ? 'bg-gradient-to-r from-teal-600 to-teal-500 text-white hover:from-teal-700 hover:to-teal-600 hover:scale-105 hover:shadow-teal-500/20' 
                : 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200'
            }`}
          >
            {canAdvance ? (
              <>Siguiente Capítulo <ChevronRight size={24} /></>
            ) : (
              <span className="flex items-center gap-2 text-base"><Lock size={18} /> Completa el Quiz para Avanzar</span>
            )}
          </button>
        ) : (
          <div className="bg-green-100 text-green-800 px-8 py-3 rounded-xl font-bold flex items-center gap-2 border border-green-200 shadow-sm">
            <CheckCircle size={24} /> ¡Curso Finalizado!
          </div>
        )}
      </div>
    </div>
  );
};

export default ChapterViewer;
