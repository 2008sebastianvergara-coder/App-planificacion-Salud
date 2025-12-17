
import React, { useState, useEffect } from 'react';
import { Chapter } from '../types';
import { 
  CheckCircle, 
  ChevronRight, 
  ChevronLeft, 
  RotateCcw, 
  Trophy, 
  XCircle, 
  ThumbsUp, 
  ThumbsDown,
  ArrowRight,
  BookOpen,
  Eye,
  FileText,
  Book
} from 'lucide-react';

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
  onComplete 
}) => {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  
  // Nuevo estado para el modo de lectura
  const [viewMode, setViewMode] = useState<'interactive' | 'fulltext'>('interactive');

  useEffect(() => {
    setCurrentQIndex(0);
    setShowFeedback(false);
    setIsCorrect(false);
    setQuizFinished(false);
    setViewMode('interactive'); // Reset to interactive on chapter change
  }, [chapter.id]);

  const handleAnswer = (optionIndex: number) => {
    if (showFeedback) return;

    const question = chapter.quiz![currentQIndex];
    const correct = optionIndex === question.correctAnswer;

    setIsCorrect(correct);
    setShowFeedback(true);
  };

  const handleNextQuestion = () => {
    if (currentQIndex < (chapter.quiz!.length - 1)) {
      setCurrentQIndex(prev => prev + 1);
      setShowFeedback(false);
    } else {
      setQuizFinished(true);
      if (onComplete) onComplete();
    }
  };

  const handleRetry = () => {
    setShowFeedback(false);
  };

  const handleGlobalNext = () => {
    if (onNext) onNext();
  };

  const handleReset = () => {
    setCurrentQIndex(0);
    setQuizFinished(false);
    setShowFeedback(false);
  };

  const renderGame = () => {
    const question = chapter.quiz![currentQIndex];

    return (
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex justify-between items-center mb-8 text-sm text-slate-400 font-bold uppercase tracking-wider">
          <span>Pregunta {currentQIndex + 1} de {chapter.quiz!.length}</span>
          <span>Evaluación Rápida</span>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 mb-8 min-h-[160px] flex items-center justify-center">
          <h3 className="text-2xl font-bold text-slate-800 leading-snug">
            {question.question}
          </h3>
        </div>

        {!showFeedback ? (
          <div className="grid grid-cols-2 gap-6">
            <button
              onClick={() => handleAnswer(0)}
              className="group relative bg-teal-600 hover:bg-teal-500 text-white rounded-2xl p-6 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-teal-500/30 flex flex-col items-center justify-center gap-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <ThumbsUp size={48} className="mb-2" />
              <span className="text-xl font-bold">VERDADERO</span>
            </button>

            <button
              onClick={() => handleAnswer(1)}
              className="group relative bg-rose-500 hover:bg-rose-400 text-white rounded-2xl p-6 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-rose-500/30 flex flex-col items-center justify-center gap-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <ThumbsDown size={48} className="mb-2" />
              <span className="text-xl font-bold">FALSO</span>
            </button>
          </div>
        ) : (
          <div className={`rounded-3xl p-8 animate-in zoom-in-95 duration-300 shadow-2xl ${isCorrect ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}`}>
            <div className="flex flex-col items-center gap-4">
              {isCorrect ? (
                <>
                  <div className="bg-white/20 p-4 rounded-full mb-2">
                    <Trophy size={64} className="text-yellow-300 drop-shadow-md animate-bounce" />
                  </div>
                  <h2 className="text-4xl font-black uppercase tracking-tight">¡Ganaste!</h2>
                  <p className="text-lg font-medium opacity-90 max-w-lg mx-auto">{question.explanation}</p>
                  
                  <button 
                    onClick={handleNextQuestion}
                    className="mt-6 bg-white text-green-700 px-8 py-3 rounded-xl font-bold text-lg hover:bg-green-50 transition-all flex items-center gap-2 shadow-lg"
                  >
                    {currentQIndex < chapter.quiz!.length - 1 ? "Siguiente Pregunta" : "Finalizar Módulo"} <ArrowRight size={20}/>
                  </button>
                </>
              ) : (
                <>
                  <div className="bg-white/20 p-4 rounded-full mb-2">
                    <XCircle size={64} className="text-white drop-shadow-md" />
                  </div>
                  <h2 className="text-3xl font-black uppercase tracking-tight">Incorrecto</h2>
                  <p className="text-lg font-medium opacity-90 max-w-lg mx-auto">{question.explanation}</p>
                  
                  <button 
                    onClick={handleRetry}
                    className="mt-6 bg-white text-red-700 px-8 py-3 rounded-xl font-bold text-lg hover:bg-red-50 transition-all flex items-center gap-2 shadow-lg"
                  >
                    <RotateCcw size={20}/> Intentar de nuevo
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderFinished = () => (
    <div className="text-center py-16 animate-in fade-in">
      <div className="inline-block p-6 bg-yellow-100 rounded-full mb-6 shadow-inner">
        <Trophy size={64} className="text-yellow-600" />
      </div>
      <h2 className="text-3xl font-bold text-slate-800 mb-4">¡Módulo Completado!</h2>
      <p className="text-slate-600 mb-8 max-w-md mx-auto">
        Has demostrado comprender los conceptos clave de este capítulo. ¡Excelente trabajo!
      </p>
      <div className="flex justify-center gap-4">
        <button 
          onClick={handleReset}
          className="px-6 py-3 rounded-xl font-bold text-slate-600 hover:bg-slate-100 flex items-center gap-2"
        >
          <RotateCcw size={18} /> Repetir Quiz
        </button>
        <button 
          onClick={handleGlobalNext}
          className="px-8 py-3 rounded-xl font-bold text-white bg-teal-600 hover:bg-teal-700 shadow-lg flex items-center gap-2 transform hover:scale-105 transition-all"
        >
          Continuar <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto my-6 border border-slate-200">
      
      {/* Header Image */}
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
        
        {/* Toggle Mode Button */}
        <div className="flex justify-end mb-8">
          <div className="bg-slate-100 p-1 rounded-xl inline-flex shadow-inner">
            <button 
              onClick={() => setViewMode('interactive')}
              className={`px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all ${
                viewMode === 'interactive' 
                  ? 'bg-white text-teal-700 shadow-sm' 
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <Eye size={18}/> Modo Didáctico
            </button>
            <button 
              onClick={() => setViewMode('fulltext')}
              className={`px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all ${
                viewMode === 'fulltext' 
                  ? 'bg-slate-800 text-white shadow-sm' 
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <FileText size={18}/> Modo Detallado
            </button>
          </div>
        </div>

        {/* Content Render */}
        {viewMode === 'interactive' ? (
          <div className="prose prose-slate max-w-none mb-16 animate-in fade-in slide-in-from-bottom-2">
            {chapter.content}
          </div>
        ) : (
          <div className="mb-16 animate-in fade-in slide-in-from-bottom-2 bg-slate-50 p-8 rounded-xl border border-slate-200 font-serif text-slate-800 leading-relaxed text-lg text-justify shadow-inner">
            <div className="flex items-center gap-2 mb-6 text-slate-400 uppercase tracking-widest text-xs font-bold border-b border-slate-200 pb-2">
              <BookOpen size={16}/> Texto Completo del Manual
            </div>
            
            {/* Texto del Manual */}
            <div className="mb-12">
                {chapter.fullContent || <p className="text-center italic text-slate-500">Contenido completo no disponible para este capítulo.</p>}
            </div>

            {/* Glosario Específico del Capítulo (Solo visible en modo detallado) */}
            {chapter.glossary && chapter.glossary.length > 0 && (
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mt-8">
                <h4 className="flex items-center gap-2 font-bold text-slate-800 mb-6 text-xl border-b border-slate-100 pb-3">
                  <Book size={20} className="text-teal-600" /> Glosario Técnico de este Capítulo
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  {chapter.glossary.map((item, idx) => (
                    <div key={idx} className="relative pl-4 border-l-2 border-teal-200">
                      <strong className="block text-teal-800 font-bold text-base mb-1">{item.term}</strong>
                      <p className="text-sm text-slate-600 leading-relaxed font-sans">{item.definition}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* INTERACTIVE GAME AREA - Always visible at bottom in interactive mode only to save space, or can be both */}
        {chapter.quiz && chapter.quiz.length > 0 && viewMode === 'interactive' && (
          <div className="bg-slate-50 rounded-3xl border border-slate-200 p-8 shadow-inner relative overflow-hidden mt-12">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-100 rounded-full opacity-20 -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full opacity-20 -ml-20 -mb-20"></div>
            
            <div className="relative z-10">
              {!quizFinished ? renderGame() : renderFinished()}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-white border-t p-6 flex flex-col sm:flex-row justify-between items-center gap-4 sticky bottom-0 z-20 shadow-xl">
        <button 
          onClick={onPrev} 
          disabled={!onPrev}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-slate-600 transition-all ${
            !onPrev ? 'opacity-0 cursor-default' : 'hover:bg-slate-100 hover:text-slate-900'
          }`}
        >
          <ChevronLeft size={20} /> Anterior
        </button>
        
        <button 
          onClick={handleGlobalNext} 
          className="group flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all transform bg-gradient-to-r from-teal-600 to-teal-500 text-white hover:from-teal-700 hover:to-teal-600 hover:shadow-lg active:scale-95"
        >
          {onNext ? (
            <>Siguiente Capítulo <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" /></>
          ) : (
            <>Finalizar Curso <CheckCircle size={24} /></>
          )}
        </button>
      </div>
    </div>
  );
};

export default ChapterViewer;
