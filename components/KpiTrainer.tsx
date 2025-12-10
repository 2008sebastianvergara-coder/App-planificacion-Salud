import React, { useState, useEffect } from 'react';
import { KPI_DATABASE } from '../constants';
import { Brain, Check, X, RefreshCw, Trophy } from 'lucide-react';

const PERSPECTIVES = ["Financiera", "Usuarios", "Procesos", "Aprendizaje", "Valor Social"];

const KpiTrainer: React.FC = () => {
  const [currentKpi, setCurrentKpi] = useState<typeof KPI_DATABASE[0] | null>(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [feedback, setFeedback] = useState<{correct: boolean, text: string} | null>(null);

  useEffect(() => {
    loadNewKpi();
  }, []);

  const loadNewKpi = () => {
    const randomIndex = Math.floor(Math.random() * KPI_DATABASE.length);
    setCurrentKpi(KPI_DATABASE[randomIndex]);
    setFeedback(null);
  };

  const handleGuess = (perspective: string) => {
    if (!currentKpi) return;

    if (perspective === currentKpi.perspective) {
      setScore(s => s + 10);
      setStreak(s => s + 1);
      setFeedback({
        correct: true,
        text: `¡Correcto! ${currentKpi.explanation}`
      });
    } else {
      setStreak(0);
      setFeedback({
        correct: false,
        text: `Incorrecto. Este indicador pertenece a la perspectiva '${currentKpi.perspective}' porque ${currentKpi.explanation.toLowerCase()}`
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
      <div className="bg-slate-800 p-4 text-white flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Brain className="text-purple-400" />
          <h3 className="font-bold">Entrenador de KPIs (Balanced Scorecard)</h3>
        </div>
        <div className="flex gap-4 text-sm font-medium">
          <div className="flex items-center gap-1"><Trophy size={16} className="text-yellow-400"/> Puntos: {score}</div>
          <div className="flex items-center gap-1">Racha: {streak} 🔥</div>
        </div>
      </div>

      <div className="p-8 text-center bg-slate-50 min-h-[300px] flex flex-col justify-center items-center">
        {!feedback ? (
          <>
            <p className="text-slate-500 text-sm mb-2 uppercase tracking-wide font-bold">Clasifica el siguiente indicador</p>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-8 max-w-lg w-full">
              <h2 className="text-2xl font-bold text-slate-800 mb-2">"{currentKpi?.text}"</h2>
              <span className="inline-block bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-medium border border-slate-200">
                Tipo: {currentKpi?.type}
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full max-w-2xl">
              {PERSPECTIVES.map((p) => (
                <button
                  key={p}
                  onClick={() => handleGuess(p)}
                  className="p-4 bg-white border border-slate-200 rounded-lg hover:bg-indigo-50 hover:border-indigo-300 hover:shadow-md transition font-medium text-slate-700"
                >
                  {p}
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="animate-fadeIn max-w-md w-full">
            <div className={`p-6 rounded-xl border mb-6 ${feedback.correct ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
              <div className="flex justify-center mb-4">
                {feedback.correct ? (
                  <div className="bg-green-100 p-3 rounded-full"><Check size={32} className="text-green-600"/></div>
                ) : (
                  <div className="bg-red-100 p-3 rounded-full"><X size={32} className="text-red-600"/></div>
                )}
              </div>
              <h3 className={`text-xl font-bold mb-2 ${feedback.correct ? 'text-green-800' : 'text-red-800'}`}>
                {feedback.correct ? '¡Excelente!' : 'Ups, fallaste'}
              </h3>
              <p className="text-slate-700">{feedback.text}</p>
            </div>
            <button
              onClick={loadNewKpi}
              className="bg-slate-800 text-white px-6 py-3 rounded-lg font-bold hover:bg-slate-700 transition flex items-center justify-center gap-2 w-full shadow-lg"
            >
              <RefreshCw size={20} /> Siguiente Indicador
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default KpiTrainer;