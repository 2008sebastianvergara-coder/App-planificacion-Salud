
import React, { useState, useEffect } from 'react';
import { X, Play, Pause, ChevronRight, MousePointer2, CheckCircle2, AlertTriangle, ShieldCheck, Search, Brain, LayoutTemplate } from 'lucide-react';

interface TutorialProps {
  tool: 'swot' | 'kpi' | null;
  onClose: () => void;
}

const ToolTutorial: React.FC<TutorialProps> = ({ tool, onClose }) => {
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  if (!tool) return null;

  // Configuración de las "escenas" del video para cada herramienta
  const SCENES = tool === 'swot' ? [
    {
      title: "Paso 1: Identificar el Factor",
      desc: "Escribe una situación específica. No seas ambiguo.",
      visual: (
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 w-64">
          <div className="h-2 w-20 bg-slate-200 rounded mb-3"></div>
          <div className="border-2 border-teal-500 rounded-lg p-2 text-sm text-slate-800 flex items-center gap-1">
            <span className="animate-pulse border-r-2 border-slate-800 pr-1">Equipo médico comprometido</span>
          </div>
        </div>
      )
    },
    {
      title: "Paso 2: Definir el Origen",
      desc: "¿Depende de nosotros (Interno) o del entorno (Externo)?",
      visual: (
        <div className="flex gap-4">
          <div className="bg-blue-100 p-4 rounded-xl border-2 border-blue-500 text-blue-800 flex flex-col items-center transform scale-110 shadow-lg">
            <LayoutTemplate size={24} className="mb-2"/>
            <span className="text-xs font-bold">INTERNO</span>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 text-slate-400 flex flex-col items-center opacity-50">
            <Search size={24} className="mb-2"/>
            <span className="text-xs font-bold">EXTERNO</span>
          </div>
          <MousePointer2 className="absolute top-1/2 left-1/4 text-slate-900 fill-white animate-bounce" size={24} />
        </div>
      )
    },
    {
      title: "Paso 3: Definir el Impacto",
      desc: "¿Nos ayuda (Positivo) o nos daña (Negativo)?",
      visual: (
        <div className="flex gap-4">
          <div className="bg-green-100 p-4 rounded-xl border-2 border-green-500 text-green-800 flex flex-col items-center transform scale-110 shadow-lg">
            <CheckCircle2 size={24} className="mb-2"/>
            <span className="text-xs font-bold">POSITIVO</span>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 text-slate-400 flex flex-col items-center opacity-50">
            <AlertTriangle size={24} className="mb-2"/>
            <span className="text-xs font-bold">NEGATIVO</span>
          </div>
           <MousePointer2 className="absolute top-1/2 left-1/4 text-slate-900 fill-white animate-bounce" size={24} />
        </div>
      )
    },
    {
      title: "Resultado: Clasificación Automática",
      desc: "Interno + Positivo = Fortaleza. El sistema lo hace por ti.",
      visual: (
        <div className="bg-green-50 p-6 rounded-2xl border-2 border-green-200 text-center animate-in zoom-in">
          <ShieldCheck size={40} className="text-green-600 mx-auto mb-2"/>
          <h4 className="text-xl font-black text-green-800">FORTALEZA</h4>
          <p className="text-xs text-green-700 mt-1">"Consérvala y úsala"</p>
        </div>
      )
    }
  ] : [
    {
      title: "Paso 1: Analizar el Indicador",
      desc: "Lee atentamente el KPI propuesto.",
      visual: (
        <div className="bg-white p-4 rounded-xl shadow-md border border-slate-200 w-72 text-center">
          <span className="text-[10px] font-bold bg-slate-100 px-2 py-0.5 rounded text-slate-500">INDICADOR</span>
          <p className="font-bold text-slate-800 mt-2">"% de Ocupación de Pabellones"</p>
        </div>
      )
    },
    {
      title: "Paso 2: Evaluar Perspectivas",
      desc: "¿Es dinero? ¿Es un proceso? ¿Es el paciente?",
      visual: (
        <div className="grid grid-cols-2 gap-2 w-64">
           <div className="bg-slate-50 p-2 rounded border border-slate-200 text-[10px] text-center opacity-50">Financiera</div>
           <div className="bg-slate-50 p-2 rounded border border-slate-200 text-[10px] text-center opacity-50">Usuarios</div>
           <div className="bg-purple-100 p-2 rounded border-2 border-purple-500 text-[10px] text-center font-bold text-purple-800 scale-105 shadow-sm">Procesos</div>
           <div className="bg-slate-50 p-2 rounded border border-slate-200 text-[10px] text-center opacity-50">Aprendizaje</div>
           <MousePointer2 className="absolute top-1/2 left-1/2 text-slate-900 fill-white animate-bounce" size={24} />
        </div>
      )
    },
    {
      title: "Paso 3: Feedback Inmediato",
      desc: "Aprende del error o celebra el acierto.",
      visual: (
        <div className="bg-emerald-50 p-4 rounded-xl border-2 border-emerald-100 flex items-center gap-3 w-72 animate-in slide-in-from-bottom">
           <div className="bg-emerald-200 p-2 rounded-full text-emerald-800"><CheckCircle2 size={20}/></div>
           <div className="text-left">
             <strong className="text-sm text-emerald-900 block">¡Correcto!</strong>
             <span className="text-[10px] text-emerald-700 leading-tight block">Mide la eficiencia del uso de recursos físicos.</span>
           </div>
        </div>
      )
    }
  ];

  const DURATION_PER_STEP = 4000; // 4 segundos por paso

  useEffect(() => {
    let interval: number;
    if (isPlaying) {
      interval = window.setInterval(() => {
        setStep((prev) => {
          if (prev < SCENES.length - 1) return prev + 1;
          setIsPlaying(false); // Stop at end
          return prev;
        });
      }, DURATION_PER_STEP);
    }
    return () => clearInterval(interval);
  }, [isPlaying, SCENES.length]);

  const progress = ((step + 1) / SCENES.length) * 100;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
      <div className="bg-slate-900 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-700 flex flex-col">
        
        {/* Video Header */}
        <div className="flex justify-between items-center p-4 border-b border-slate-800">
          <div className="flex items-center gap-2 text-white">
            <Play size={18} className="text-teal-400 fill-teal-400"/>
            <span className="font-bold">Tutorial: {tool === 'swot' ? 'Constructor FODA' : 'Laboratorio de KPIs'}</span>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Video Stage (Screen) */}
        <div className="bg-slate-950 aspect-video relative flex items-center justify-center p-8 overflow-hidden">
          {/* Background Grid Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
          
          {/* Scene Content */}
          <div key={step} className="relative z-10 flex flex-col items-center gap-6 animate-in zoom-in-95 duration-500">
            {SCENES[step].visual}
          </div>
        </div>

        {/* Controls & Captions */}
        <div className="bg-slate-900 p-6 space-y-4">
          <div className="text-center h-16">
            <h3 className="text-teal-400 font-bold text-lg mb-1">{SCENES[step].title}</h3>
            <p className="text-slate-300 text-sm">{SCENES[step].desc}</p>
          </div>

          {/* Progress Bar */}
          <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-teal-500 transition-all duration-1000 ease-linear"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4">
            <button 
              onClick={() => {
                if (step === SCENES.length - 1) setStep(0);
                setIsPlaying(!isPlaying);
              }}
              className="p-3 bg-white text-slate-900 rounded-full hover:bg-teal-50 transition-colors"
            >
              {isPlaying ? <Pause size={20} fill="black" /> : <Play size={20} fill="black" className={step === SCENES.length -1 ? "ml-0.5" : ""} />}
            </button>
            <button 
               onClick={() => {
                 setIsPlaying(false);
                 setStep(prev => Math.min(prev + 1, SCENES.length - 1));
               }}
               className="p-3 bg-slate-800 text-white rounded-full hover:bg-slate-700 transition-colors"
               disabled={step === SCENES.length - 1}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ToolTutorial;
