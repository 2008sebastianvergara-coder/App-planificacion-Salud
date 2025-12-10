
import React, { useState } from 'react';
import Header from './components/Header';
import ChapterViewer from './components/ChapterViewer';
import SwotBuilder from './components/SwotBuilder';
import KpiTrainer from './components/KpiTrainer';
import PublicPrivateComparator from './components/PublicPrivateComparator';
import AiTutor from './components/AiTutor';
import { ViewState } from './types';
import { CHAPTERS } from './constants';
import { Book, Activity, BrainCircuit, HelpCircle, CheckCircle2, Menu, X, BookOpen, MessageCircleQuestion } from 'lucide-react';

const Sidebar = ({ chapters, currentIdx, completed, onSelect, isOpen, onClose }: any) => (
  <>
    {/* Mobile Overlay */}
    {isOpen && (
      <div 
        className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
        onClick={onClose}
      />
    )}
    
    {/* Sidebar Container */}
    <div className={`
      fixed md:static inset-y-0 left-0 z-50 w-72 bg-white md:bg-transparent shadow-2xl md:shadow-none 
      transform transition-transform duration-300 ease-in-out md:transform-none flex flex-col
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
    `}>
      <div className="p-4 md:hidden flex justify-between items-center border-b">
        <span className="font-bold text-slate-800">Índice del Curso</span>
        <button onClick={onClose} className="p-2 text-slate-500 hover:bg-slate-100 rounded-full"><X size={24}/></button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 md:p-0 space-y-3">
        <h3 className="font-bold text-slate-700 mb-2 hidden md:block px-1">Índice de Contenidos</h3>
        {chapters.map((chap: any, idx: number) => {
          const isLocked = idx > 0 && !completed[chapters[idx - 1].id];
          const isCurrent = idx === currentIdx;
          const isDone = completed[chap.id];

          return (
            <button
              key={chap.id}
              onClick={() => {
                if (!isLocked) {
                  onSelect(idx);
                  onClose();
                }
              }}
              disabled={isLocked}
              className={`w-full flex items-start gap-3 p-3 rounded-xl text-sm text-left transition-all border ${
                isCurrent 
                  ? 'bg-teal-600 text-white shadow-lg border-teal-600 scale-105 z-10' 
                  : isLocked 
                    ? 'bg-slate-50 text-slate-400 border-transparent cursor-not-allowed opacity-70' 
                    : isDone
                      ? 'bg-green-50 text-green-900 border-green-200 hover:bg-green-100'
                      : 'bg-white text-slate-600 hover:bg-white border-slate-200 hover:border-teal-300 hover:shadow-md'
              }`}
            >
              <div className={`w-8 h-8 rounded-lg bg-cover bg-center shrink-0 border border-white/20 shadow-sm ${isLocked ? 'grayscale opacity-50' : ''}`} style={{ backgroundImage: `url(${chap.image})` }} />
              <div className="flex-1">
                <span className={`font-bold block mb-0.5 ${isCurrent ? 'text-white' : 'text-slate-800'}`}>Capítulo {idx + 1}</span>
                <span className={`line-clamp-2 leading-tight text-xs ${isCurrent ? 'text-teal-100' : 'text-slate-500'}`}>{chap.title}</span>
              </div>
              {isDone && !isCurrent && <CheckCircle2 size={18} className="text-green-600 shrink-0 mt-1" />}
            </button>
          );
        })}
      </div>
    </div>
  </>
);

const FAQSection = () => (
  <div className="relative z-10 max-w-5xl mx-auto border-t border-slate-200 pt-16 mt-16">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-slate-800 flex items-center justify-center gap-3">
        <HelpCircle className="text-teal-600" size={32} /> Preguntas Frecuentes
      </h2>
      <p className="text-slate-500 mt-3 text-lg">Conceptos clave del Manual U. Finis Terrae 2025</p>
    </div>
    <div className="grid md:grid-cols-2 gap-8">
      {[
        { title: "¿Por qué planificar en salud?", text: "Es un imperativo ético y técnico para priorizar recursos escasos, anticipar crisis y alinear equipos hacia un propósito común, más allá de la gestión del día a día (Cap. 1.2)." },
        { title: "¿Diferencia Público vs. Privado?", text: "El sector público se rige por mandato legal, rigidez presupuestaria (DIPRES) y metas sanitarias. El privado busca sostenibilidad financiera, competitividad y experiencia de usuario (Cap. 1.3)." },
        { title: "¿Qué es una Brecha Crítica?", text: "Diferencia estructural significativa entre la realidad actual y el estándar necesario para cumplir la misión. Se prioriza por impacto y riesgo (Cap. 4.4)." },
        { title: "¿Cómo se mide la estrategia?", text: "Mediante el Balanced Scorecard (BSC) adaptado a salud, que añade la perspectiva de 'Valor Social' a las tradicionales (Financiera, Clientes, Procesos, Aprendizaje) (Cap. 9.3)." },
        { title: "¿Qué es Gobernanza Clínica?", text: "Sistema mediante el cual las instituciones son responsables de mejorar continuamente la calidad y salvaguardar altos estándares de atención (Cap. 2.2)." },
        { title: "¿Cómo priorizar problemas?", text: "Usando matrices de Impacto vs. Factibilidad o Método Hanlon. Evitar invertir en iniciativas de alto esfuerzo y bajo impacto (Cap. 5.3)." },
        { title: "¿Qué es un objetivo SMART?", text: "Específico, Medible, Alcanzable, Relevante y Temporal. Si no tiene plazo o indicador, es solo una declaración de intenciones (Cap. 5.2)." },
        { title: "¿Manejo de resistencia al cambio?", text: "Modelo de Kotter: crear urgencia, comunicar visión, empoderar líderes clínicos y celebrar victorias cortas (Cap. 7.3)." }
      ].map((faq, i) => (
        <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition group">
          <h3 className="font-bold text-slate-800 mb-3 flex gap-3 items-start text-lg group-hover:text-teal-700 transition-colors">
            <CheckCircle2 size={24} className="text-teal-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform"/> {faq.title}
          </h3>
          <p className="text-slate-600 leading-relaxed pl-9">{faq.text}</p>
        </div>
      ))}
    </div>
  </div>
);

const HomeView = ({ onStart, onDefense, onFriendly, onTools }: any) => (
  <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
    <div className="text-center mb-16 relative z-10">
      <div className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold mb-8 uppercase tracking-widest border border-teal-200">
        Manual U. Finis Terrae 2025
      </div>
      <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 leading-tight tracking-tight">
        Planificación Estratégica <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">en Salud</span>
      </h1>
      <p className="max-w-2xl mx-auto text-xl text-slate-600 mb-12 leading-relaxed">
        Plataforma interactiva para dominar la gestión sanitaria. Diagnostica, formula y evalúa estrategias con herramientas prácticas y simulación inteligente.
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button onClick={onStart} className="px-8 py-4 rounded-xl bg-teal-700 text-white font-bold text-lg hover:bg-teal-800 shadow-xl shadow-teal-900/10 flex items-center justify-center gap-2 transition-all hover:scale-105 hover:-translate-y-1">
          <BookOpen size={20} /> Comenzar Curso
        </button>
        <button onClick={onFriendly} className="px-8 py-4 rounded-xl bg-orange-500 text-white font-bold text-lg hover:bg-orange-600 shadow-xl shadow-orange-900/10 flex items-center justify-center gap-2 transition-all hover:scale-105 hover:-translate-y-1">
          <MessageCircleQuestion size={20} /> Tutor de Dudas
        </button>
        <button onClick={onDefense} className="px-8 py-4 rounded-xl bg-indigo-600 text-white font-bold text-lg hover:bg-indigo-700 shadow-xl shadow-indigo-900/10 flex items-center justify-center gap-2 transition-all hover:scale-105 hover:-translate-y-1">
          <BrainCircuit size={20} /> Simulador Defensa
        </button>
      </div>
    </div>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
      {[
        { 
          title: "Módulos de Aprendizaje", 
          icon: Book, 
          color: "blue", 
          onClick: onStart, 
          desc: "11 Capítulos interactivos desde el Diagnóstico PESTEL hasta la Resiliencia." 
        },
        { 
          title: "Tutor de Dudas", 
          icon: HelpCircle, 
          color: "orange", 
          onClick: onFriendly, 
          desc: "Asistente amable que responde preguntas y explica conceptos paso a paso." 
        },
        { 
          title: "Kit de Herramientas", 
          icon: Activity, 
          color: "green", 
          onClick: onTools, 
          desc: "Aplicaciones prácticas: Constructor FODA, KPIs y Comparador de Gestión." 
        },
        { 
          title: "Simulador de Defensa", 
          icon: BrainCircuit, 
          color: "indigo", 
          onClick: onDefense, 
          desc: "Director Médico Virtual que desafía tus objetivos estratégicos con rigor." 
        }
      ].map((card, i) => (
        <div key={i} className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all cursor-pointer group hover:-translate-y-1" onClick={card.onClick}>
          <div className={`bg-${card.color}-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-${card.color}-600 group-hover:scale-110 transition-transform duration-300 shadow-inner`}><card.icon size={24} /></div>
          <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-teal-700 transition-colors">{card.title}</h3>
          <p className="text-slate-600 text-sm leading-relaxed">{card.desc}</p>
        </div>
      ))}
    </div>
    <FAQSection />
  </div>
);

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>(ViewState.HOME);
  const [currIdx, setCurrIdx] = useState(0);
  const [tutorMode, setTutorMode] = useState<'friendly' | 'defense'>('friendly');
  const [completed, setCompleted] = useState<Record<string, boolean>>({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navToChap = (i: number) => { setCurrIdx(i); setView(ViewState.LEARN); setIsSidebarOpen(false); };
  
  const startDefense = () => { 
    setTutorMode('defense'); 
    setView(ViewState.CHAT); 
  };

  const startFriendlyTutor = () => {
    setTutorMode('friendly');
    setView(ViewState.CHAT);
  };

  const goToTools = () => setView(ViewState.TOOLS);

  // Calculate Progress
  const totalChapters = CHAPTERS.length;
  const completedCount = Object.keys(completed).length;
  const progressPercent = Math.round((completedCount / totalChapters) * 100);

  const Content = () => {
    if (view === ViewState.HOME) return <HomeView onStart={() => navToChap(0)} onDefense={startDefense} onFriendly={startFriendlyTutor} onTools={goToTools} />;
    
    if (view === ViewState.LEARN) return (
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row gap-8 relative">
        {/* Mobile Toggle */}
        <div className="md:hidden flex justify-between items-center mb-4 bg-white p-4 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center gap-3">
            <span className="font-bold text-slate-700">Capítulo {currIdx + 1}/{totalChapters}</span>
            <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-teal-500 transition-all duration-500" style={{ width: `${progressPercent}%` }}></div>
            </div>
          </div>
          <button onClick={() => setIsSidebarOpen(true)} className="p-2 bg-slate-100 rounded-lg text-slate-600 hover:bg-slate-200">
            <Menu size={24} />
          </button>
        </div>

        <Sidebar 
          chapters={CHAPTERS} 
          currentIdx={currIdx} 
          completed={completed} 
          onSelect={setCurrIdx} 
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        
        <div className="flex-1 min-w-0">
          {/* Desktop Progress Bar */}
          <div className="hidden md:flex items-center justify-between mb-6 bg-white p-4 rounded-xl shadow-sm border border-slate-200">
            <div>
              <h2 className="font-bold text-xl text-slate-800">Progreso del Curso</h2>
              <p className="text-sm text-slate-500">{completedCount} de {totalChapters} capítulos completados</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-2xl font-bold text-teal-600">{progressPercent}%</div>
              <div className="w-48 h-3 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                <div className="h-full bg-gradient-to-r from-teal-500 to-green-500 transition-all duration-1000 ease-out" style={{ width: `${progressPercent}%` }}></div>
              </div>
            </div>
          </div>

          <ChapterViewer 
            chapter={CHAPTERS[currIdx]} 
            onNext={currIdx < CHAPTERS.length - 1 ? () => {
              setCurrIdx(c => c + 1);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } : undefined}
            onPrev={currIdx > 0 ? () => {
              setCurrIdx(c => c - 1);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } : undefined}
            isCompleted={!!completed[CHAPTERS[currIdx].id]}
            onComplete={() => setCompleted(p => ({...p, [CHAPTERS[currIdx].id]: true}))}
          />
        </div>
      </div>
    );

    if (view === ViewState.TOOLS) return (
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-slate-800">Herramientas de Gestión</h1>
          <p className="text-slate-600 mt-2">Aplicaciones prácticas para la planificación sanitaria</p>
        </div>
        
        <section className="bg-gradient-to-br from-white to-purple-50 p-1 rounded-2xl shadow-lg border border-purple-100">
          <div className="bg-white rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-purple-800 border-b pb-4"><BrainCircuit className="text-purple-600"/> Laboratorio de KPIs</h2>
            <KpiTrainer />
          </div>
        </section>

        <section className="bg-gradient-to-br from-white to-teal-50 p-1 rounded-2xl shadow-lg border border-teal-100">
          <div className="bg-white rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-teal-800 border-b pb-4"><Activity className="text-teal-600"/> Comparador Público-Privado</h2>
            <PublicPrivateComparator />
          </div>
        </section>

        <section className="bg-gradient-to-br from-white to-blue-50 p-1 rounded-2xl shadow-lg border border-blue-100">
          <div className="bg-white rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-blue-800 border-b pb-4"><Book className="text-blue-600"/> Constructor FODA</h2>
            <SwotBuilder />
          </div>
        </section>
      </div>
    );

    return <div className="max-w-5xl mx-auto px-4 py-8"><AiTutor initialMode={tutorMode} /></div>;
  };

  return (
    <div className="min-h-screen bg-slate-50 relative font-sans text-slate-900">
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z' fill='%23000000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")` }}></div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header currentView={view} onNavigate={setView} />
        <main className="flex-1"><Content /></main>
        <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm border-t border-slate-800 mt-12">
          <div className="flex flex-col items-center gap-2">
            <p>© 2025 EstrategiaSalud</p>
            <p className="text-xs opacity-50">Manual de Planificación Estratégica para Instituciones de Salud</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
