
import React, { useState } from 'react';
import Header from './components/Header';
import ChapterViewer from './components/ChapterViewer';
import SwotBuilder from './components/SwotBuilder';
import KpiTrainer from './components/KpiTrainer';
import PublicPrivateComparator from './components/PublicPrivateComparator';
import AiTutor from './components/AiTutor';
import { ViewState } from './types';
import { CHAPTERS } from './constants';
import { ArrowRight, Book, Activity, BrainCircuit, HelpCircle, CheckCircle2 } from 'lucide-react';

const Sidebar = ({ chapters, currentIdx, completed, onSelect }: any) => (
  <div className="md:w-64 flex-shrink-0 space-y-2">
    <h3 className="font-bold text-slate-700 px-2 mb-2">Capítulos</h3>
    <div className="flex flex-col gap-2">
      {chapters.map((chap: any, idx: number) => {
        const isLocked = idx > 0 && !completed[chapters[idx - 1].id];
        return (
          <button
            key={chap.id}
            onClick={() => !isLocked && onSelect(idx)}
            disabled={isLocked}
            className={`flex items-center gap-3 p-2 rounded-lg text-sm text-left transition-all ${
              idx === currentIdx ? 'bg-teal-700 text-white shadow-md' : 
              isLocked ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-white text-slate-600 hover:bg-slate-50 border'
            }`}
          >
            <div className="w-10 h-10 rounded bg-cover bg-center shrink-0 border-black/10" style={{ backgroundImage: `url(${chap.image})` }} />
            <div className="flex-1"><span className="line-clamp-2 leading-tight">{chap.title}</span></div>
            {completed[chap.id] && <CheckCircle2 size={16} className="text-green-500" />}
          </button>
        );
      })}
    </div>
  </div>
);

const FAQSection = () => (
  <div className="relative z-10 max-w-5xl mx-auto border-t border-slate-200 pt-16">
    <div className="text-center mb-10">
      <h2 className="text-2xl font-bold text-slate-800 flex items-center justify-center gap-2"><HelpCircle className="text-teal-600" /> Preguntas Frecuentes</h2>
      <p className="text-slate-500 mt-2">Respuestas basadas estrictamente en el Manual U. Finis Terrae 2025</p>
    </div>
    <div className="grid md:grid-cols-2 gap-6">
      {[
        { title: "¿Por qué planificar en salud?", text: "Es un imperativo ético y técnico para priorizar recursos escasos, anticipar crisis y alinear equipos hacia un propósito común, más allá de la gestión del día a día (Cap. 1.2)." },
        { title: "¿Cuál es la diferencia Público vs. Privado?", text: "El sector público se rige por mandato legal, rigidez presupuestaria (DIPRES) y metas sanitarias. El privado busca sostenibilidad financiera, competitividad y experiencia de usuario (Cap. 1.3 y 10)." },
        { title: "¿Qué es una Brecha Crítica?", text: "No es cualquier problema. Es una diferencia estructural significativa entre la realidad actual y el estándar necesario para cumplir la misión. Se prioriza por impacto y riesgo (Cap. 4.4)." },
        { title: "¿Cómo se mide la estrategia?", text: "Mediante el Balanced Scorecard (BSC) adaptado a salud, que añade la perspectiva de 'Valor Social' a las tradicionales (Financiera, Clientes, Procesos, Aprendizaje) (Cap. 9.3)." },
        { title: "¿Qué es Gobernanza Clínica?", text: "Es el sistema mediante el cual las instituciones de salud son responsables de mejorar continuamente la calidad de sus servicios y salvaguardar altos estándares de atención (Cap. 2.2)." },
        { title: "¿Cómo priorizar problemas?", text: "Usando matrices de Impacto vs. Factibilidad o el Método Hanlon. Se debe evitar invertir recursos en iniciativas de alto esfuerzo y bajo impacto (Cap. 5.3)." },
        { title: "¿Qué es un objetivo SMART?", text: "Un objetivo que es Específico, Medible, Alcanzable, Relevante y Temporal. Si no tiene plazo o indicador, es solo una declaración de intenciones (Cap. 5.2)." },
        { title: "¿Cómo manejar la resistencia al cambio?", text: "Aplicando el modelo de Kotter: crear sentido de urgencia, comunicar la visión, empoderar a líderes clínicos y celebrar victorias cortas (Quick Wins) (Cap. 7.3)." }
      ].map((faq, i) => (
        <div key={i} className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition">
          <h3 className="font-bold text-slate-800 mb-3 flex gap-2 items-start"><CheckCircle2 size={20} className="text-teal-500 shrink-0 mt-1"/> {faq.title}</h3>
          <p className="text-sm text-slate-600 leading-relaxed">{faq.text}</p>
        </div>
      ))}
    </div>
  </div>
);

const HomeView = ({ onStart, onDefense, onTools }: any) => (
  <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
    <div className="text-center mb-16 relative z-10">
      <div className="inline-block p-2 px-4 rounded-full bg-teal-100 text-teal-800 text-sm font-semibold mb-6 uppercase">Edición 2025</div>
      <h1 className="text-4xl font-extrabold text-slate-900 sm:text-6xl mb-6 leading-tight">Manual de <span className="text-teal-700">Planificación Estratégica</span> en Salud</h1>
      <p className="max-w-3xl mx-auto text-xl text-slate-600 mb-8 leading-relaxed">
        Domina la gestión sanitaria con esta guía interactiva basada en el Manual de la Universidad Finis Terrae. 
        Aprende a diagnosticar, formular y evaluar estrategias en hospitales y clínicas con herramientas prácticas.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button onClick={onStart} className="px-8 py-4 rounded-xl bg-teal-700 text-white font-bold hover:bg-teal-800 shadow-lg flex items-center justify-center gap-2 transition-transform hover:scale-105">Comenzar Curso <ArrowRight size={20} /></button>
        <button onClick={onDefense} className="px-8 py-4 rounded-xl bg-white text-purple-700 font-bold border border-purple-100 hover:bg-purple-50 shadow-md flex items-center justify-center gap-2 transition-transform hover:scale-105"><BrainCircuit size={20} /> Simular Defensa</button>
      </div>
    </div>
    
    <div className="grid md:grid-cols-3 gap-8 relative z-10 mb-20">
      {[
        { 
          title: "Módulos de Aprendizaje", 
          icon: Book, 
          color: "blue", 
          onClick: onStart, 
          desc: "Recorre los 11 capítulos del manual: desde el Análisis PESTEL y FODA, pasando por la formulación de objetivos SMART, hasta el control de gestión." 
        },
        { 
          title: "Kit de Herramientas", 
          icon: Activity, 
          color: "green", 
          onClick: onTools, 
          desc: "Aplica la teoría con el Constructor FODA interactivo, el Entrenador de clasificación de KPIs para Balanced Scorecard y el Comparador Público-Privado." 
        },
        { 
          title: "Tutoría Inteligente", 
          icon: BrainCircuit, 
          color: "purple", 
          onClick: onDefense, 
          desc: "Practica con un Director Médico Virtual que evaluará tus estrategias, desafiará tus argumentos y te ayudará a preparar tu defensa de tesis." 
        }
      ].map((card, i) => (
        <div key={i} className="bg-white/95 p-8 rounded-2xl shadow-xl border border-slate-100 hover:shadow-2xl transition-all cursor-pointer group hover:-translate-y-1" onClick={card.onClick}>
          <div className={`bg-${card.color}-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-${card.color}-600 group-hover:scale-110 transition-transform duration-300`}><card.icon size={32} /></div>
          <h3 className="text-2xl font-bold text-slate-800 mb-3">{card.title}</h3>
          <p className="text-slate-600 leading-relaxed">{card.desc}</p>
        </div>
      ))}
    </div>
    <FAQSection />
  </div>
);

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>(ViewState.HOME);
  const [currIdx, setCurrIdx] = useState(0);
  const [tutorMode, setTutorMode] = useState<'normal' | 'defense'>('normal');
  const [completed, setCompleted] = useState<Record<string, boolean>>({});

  const navToChap = (i: number) => { setCurrIdx(i); setView(ViewState.LEARN); };
  const startDefense = () => { setTutorMode('defense'); setView(ViewState.CHAT); };
  const goToTools = () => setView(ViewState.TOOLS);

  const Content = () => {
    if (view === ViewState.HOME) return <HomeView onStart={() => navToChap(0)} onDefense={startDefense} onTools={goToTools} />;
    if (view === ViewState.LEARN) return (
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row gap-6">
        <Sidebar chapters={CHAPTERS} currentIdx={currIdx} completed={completed} onSelect={setCurrIdx} />
        <div className="flex-1">
          <ChapterViewer 
            chapter={CHAPTERS[currIdx]} 
            onNext={currIdx < CHAPTERS.length - 1 ? () => setCurrIdx(c => c + 1) : undefined}
            onPrev={currIdx > 0 ? () => setCurrIdx(c => c - 1) : undefined}
            isCompleted={!!completed[CHAPTERS[currIdx].id]}
            onComplete={() => setCompleted(p => ({...p, [CHAPTERS[currIdx].id]: true}))}
          />
        </div>
      </div>
    );
    if (view === ViewState.TOOLS) return (
      <div className="max-w-7xl mx-auto px-4 py-6 space-y-12">
        <section><h2 className="text-2xl font-bold mb-6 flex gap-2"><BrainCircuit className="text-purple-600"/> Laboratorio KPIs</h2><KpiTrainer /></section>
        <section><h2 className="text-2xl font-bold mb-6 flex gap-2"><Activity className="text-teal-600"/> Comparador</h2><PublicPrivateComparator /></section>
        <section><h2 className="text-2xl font-bold mb-6 flex gap-2"><Book className="text-blue-600"/> FODA</h2><SwotBuilder /></section>
      </div>
    );
    return <div className="max-w-7xl mx-auto px-4 py-6"><AiTutor initialMode={tutorMode} /></div>;
  };

  return (
    <div className="min-h-screen bg-slate-50 relative">
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z' fill='%23000000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")` }}></div>
      <div className="relative z-10"><Header currentView={view} onNavigate={setView} /><main><Content /></main></div>
    </div>
  );
};

export default App;
