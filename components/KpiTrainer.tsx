
import React, { useState, useEffect } from 'react';
import { KPI_DATABASE } from '../constants';
import { Brain, Check, X, RefreshCw, Trophy, BookOpen, Play, HelpCircle, ArrowRight } from 'lucide-react';

const PERSPECTIVES = ["Financiera", "Usuarios", "Procesos", "Aprendizaje", "Valor Social"];

const KpiGlossary = ({ onStart }: { onStart: () => void }) => (
  <div className="p-6 md:p-10 animate-in fade-in bg-slate-50 min-h-[600px] flex flex-col justify-center">
    <div className="max-w-4xl mx-auto w-full">
      <div className="text-center mb-10">
        <h3 className="text-3xl font-black text-slate-800 mb-4">Academia de Indicadores</h3>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
          En salud, el éxito no es solo dinero. El modelo <strong>Balanced Scorecard (BSC)</strong> nos obliga a mirar 5 dimensiones simultáneas para tener una visión completa:
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {/* Fila Superior: Los Cimientos */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-indigo-500 hover:shadow-lg transition-all group">
          <div className="bg-indigo-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-indigo-600 group-hover:scale-110 transition-transform">
            <Brain size={24}/>
          </div>
          <h4 className="font-bold text-slate-800 text-lg mb-2">1. Aprendizaje</h4>
          <p className="text-sm text-slate-500 leading-relaxed">
            La base de todo. ¿Tenemos el personal capacitado y la tecnología necesaria para mejorar?
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-purple-500 hover:shadow-lg transition-all group">
          <div className="bg-purple-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-purple-600 group-hover:scale-110 transition-transform">
            <RefreshCw size={24}/>
          </div>
          <h4 className="font-bold text-slate-800 text-lg mb-2">2. Procesos</h4>
          <p className="text-sm text-slate-500 leading-relaxed">
            La operación diaria. ¿Son nuestros flujos clínicos y administrativos eficientes y seguros?
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-blue-500 hover:shadow-lg transition-all group">
          <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-blue-600 group-hover:scale-110 transition-transform">
            <Trophy size={24}/>
          </div>
          <h4 className="font-bold text-slate-800 text-lg mb-2">3. Financiera</h4>
          <p className="text-sm text-slate-500 leading-relaxed">
            La sostenibilidad. ¿Estamos usando bien los recursos para poder seguir funcionando mañana?
          </p>
        </div>

        {/* Fila Inferior: Los Resultados */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-orange-500 hover:shadow-lg transition-all group md:col-span-1.5 lg:col-span-1 lg:col-start-1">
          <div className="bg-orange-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-orange-600 group-hover:scale-110 transition-transform">
            <Check size={24}/>
          </div>
          <h4 className="font-bold text-slate-800 text-lg mb-2">4. Usuarios</h4>
          <p className="text-sm text-slate-500 leading-relaxed">
            La percepción. ¿Se sienten bien tratados y satisfechos nuestros pacientes?
          </p>
        </div>

        <div className="bg-teal-50 p-6 rounded-2xl shadow-md border-2 border-teal-200 hover:shadow-lg transition-all group md:col-span-3 lg:col-span-2 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-teal-200 w-24 h-24 rounded-full opacity-20 -mr-10 -mt-10"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-teal-600 shadow-sm font-bold">
                VS
              </div>
              <h4 className="font-bold text-teal-900 text-xl">5. Valor Social (Exclusivo Salud)</h4>
            </div>
            <p className="text-teal-800 leading-relaxed">
              El fin último. ¿Estamos mejorando realmente la salud de la población y garantizando derechos?
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <button 
          onClick={onStart}
          className="bg-slate-900 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 shadow-xl flex items-center gap-3 mx-auto hover:scale-105 transition-transform group"
        >
          <span>Ir a la Práctica</span> <ArrowRight className="group-hover:translate-x-1 transition-transform"/>
        </button>
      </div>
    </div>
  </div>
);

const ReferenceGuide = () => (
  <div className="mt-8 pt-6 border-t border-slate-200 w-full">
    <div className="flex items-center justify-center gap-2 mb-4 text-slate-400 text-xs font-bold uppercase tracking-widest">
      <HelpCircle size={14}/> Referencia Rápida
    </div>
    <div className="flex flex-wrap justify-center gap-3">
      {[
        { l: "Financiera", t: "Costos / Presupuesto", c: "blue" },
        { l: "Usuarios", t: "Satisfacción / Trato", c: "orange" },
        { l: "Procesos", t: "Calidad / Tiempos", c: "purple" },
        { l: "Aprendizaje", t: "Capacitación / Clima", c: "indigo" },
        { l: "Valor Social", t: "Impacto / Salud Pública", c: "teal" },
      ].map((item, i) => (
        <div key={i} className={`flex flex-col px-4 py-2 rounded-lg bg-${item.c}-50 border border-${item.c}-100 text-center min-w-[120px]`}>
          <span className={`text-[10px] font-black uppercase text-${item.c}-700`}>{item.l}</span>
          <span className={`text-xs font-medium text-${item.c}-900`}>{item.t}</span>
        </div>
      ))}
    </div>
  </div>
);

const KpiTrainer: React.FC = () => {
  const [mode, setMode] = useState<'learn' | 'play'>('learn');
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
        text: `¡Excelente! ${currentKpi.explanation}`
      });
    } else {
      setStreak(0);
      setFeedback({
        correct: false,
        text: `Incorrecto. ${currentKpi.explanation} Esto corresponde a la perspectiva ${currentKpi.perspective}.`
      });
    }
  };

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200 min-h-[600px] flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-slate-100 p-4 flex justify-between items-center shrink-0">
        <div className="flex items-center gap-3">
          <div className="bg-purple-100 p-2 rounded-lg text-purple-700">
            <Brain size={20} />
          </div>
          <div>
            <h3 className="font-bold text-slate-800">Laboratorio de KPIs</h3>
            <p className="text-xs text-slate-500 hidden sm:block">Entrenamiento en Balanced Scorecard</p>
          </div>
        </div>
        <div className="flex bg-slate-100 p-1 rounded-lg">
          <button 
            onClick={() => setMode('learn')}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${mode === 'learn' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Academia
          </button>
          <button 
            onClick={() => setMode('play')}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${mode === 'play' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Práctica
          </button>
        </div>
      </div>

      {mode === 'learn' ? (
        <KpiGlossary onStart={() => setMode('play')} />
      ) : (
        <div className="flex-1 flex flex-col relative">
          
          {/* Stats Bar */}
          <div className="absolute top-4 right-4 flex gap-3 z-10">
             <div className="bg-white border border-slate-200 px-3 py-1 rounded-full text-sm font-medium text-slate-600 shadow-sm flex items-center gap-2">
               Puntos: <span className="text-indigo-600 font-bold">{score}</span>
             </div>
             <div className="bg-white border border-slate-200 px-3 py-1 rounded-full text-sm font-medium text-slate-600 shadow-sm flex items-center gap-2">
               Racha: <span className="text-orange-500 font-bold">{streak} 🔥</span>
             </div>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 bg-slate-50/50">
            
            {!feedback ? (
              <div className="w-full max-w-3xl animate-in slide-in-from-bottom-4 duration-500">
                <div className="text-center mb-8">
                  <span className="inline-block bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                    Indicador de {currentKpi?.type}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-6 leading-tight">
                    "{currentKpi?.text}"
                  </h2>
                  <p className="text-slate-500 text-lg">¿A qué perspectiva del BSC pertenece?</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                  {PERSPECTIVES.map((p) => (
                    <button
                      key={p}
                      onClick={() => handleGuess(p)}
                      className="group p-4 bg-white border-2 border-slate-100 rounded-xl hover:border-indigo-500 hover:bg-indigo-50 transition-all shadow-sm hover:shadow-md text-left relative overflow-hidden"
                    >
                      <span className="font-bold text-slate-700 group-hover:text-indigo-700 block relative z-10">{p}</span>
                      <div className="absolute inset-0 bg-indigo-100 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                    </button>
                  ))}
                </div>
                
                <ReferenceGuide />
              </div>
            ) : (
              <div className="w-full max-w-xl animate-in zoom-in-95 duration-300">
                <div className={`p-8 rounded-3xl shadow-xl text-center mb-8 ${feedback.correct ? 'bg-emerald-50 border-2 border-emerald-100' : 'bg-rose-50 border-2 border-rose-100'}`}>
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${feedback.correct ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-600'}`}>
                    {feedback.correct ? <Trophy size={40} className="animate-bounce"/> : <X size={40}/>}
                  </div>
                  
                  <h3 className={`text-2xl font-black mb-4 ${feedback.correct ? 'text-emerald-800' : 'text-rose-800'}`}>
                    {feedback.correct ? '¡Correcto!' : 'Respuesta Incorrecta'}
                  </h3>
                  
                  <p className="text-slate-700 text-lg leading-relaxed mb-8">
                    {feedback.text}
                  </p>

                  <button
                    onClick={loadNewKpi}
                    className={`px-8 py-3 rounded-xl font-bold text-white shadow-lg transition-transform hover:scale-105 flex items-center justify-center gap-2 mx-auto w-full md:w-auto ${feedback.correct ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-slate-800 hover:bg-slate-900'}`}
                  >
                    <RefreshCw size={20} /> Siguiente Indicador
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default KpiTrainer;
