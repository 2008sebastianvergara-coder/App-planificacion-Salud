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

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>(ViewState.HOME);
  const [currentChapterIdx, setCurrentChapterIdx] = useState(0);
  // Estado para manejar el modo inicial del tutor (Defensa o Normal)
  const [tutorStartMode, setTutorStartMode] = useState<'normal' | 'defense'>('normal');

  // Lifted state for completed chapters to persist navigation status
  const [completedChapters, setCompletedChapters] = useState<{[key: string]: boolean}>({});

  const navigateToChapter = (index: number) => {
    setCurrentChapterIdx(index);
    setView(ViewState.LEARN);
  };

  const handleChapterComplete = (chapterId: string) => {
    setCompletedChapters(prev => ({...prev, [chapterId]: true}));
  };

  const startTutorDefenseMode = () => {
    setTutorStartMode('defense');
    setView(ViewState.CHAT);
  };

  const renderContent = () => {
    switch (view) {
      case ViewState.HOME:
        return (
          <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="text-center mb-16 relative z-10">
              <div className="inline-block p-2 px-4 rounded-full bg-teal-100 text-teal-800 text-sm font-semibold mb-6 tracking-wide uppercase">
                Edición 2025
              </div>
              <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl md:text-6xl mb-6 leading-tight">
                Manual de <span className="text-teal-700">Planificación Estratégica</span> <br className="hidden md:block"/> para Salud
              </h1>
              <p className="max-w-2xl mx-auto text-xl text-slate-600 mb-8 leading-relaxed">
                Domina la gestión sanitaria con esta guía interactiva basada en el manual oficial de la U. Finis Terrae. Diagnóstico, estrategia y acción.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <button 
                  onClick={() => navigateToChapter(0)}
                  className="px-8 py-4 rounded-xl bg-teal-700 text-white font-bold hover:bg-teal-800 transition shadow-lg hover:shadow-xl flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                >
                  Comenzar Curso <ArrowRight size={20} />
                </button>
                <button 
                  onClick={startTutorDefenseMode}
                  className="px-8 py-4 rounded-xl bg-white text-slate-700 font-bold border border-slate-200 hover:bg-slate-50 transition shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <BrainCircuit size={20} className="text-purple-600"/> Modo Defensa de Tesis
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative z-10 mb-20">
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition cursor-pointer group" onClick={() => navigateToChapter(0)}>
                <div className="bg-blue-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform">
                  <Book size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Contenidos</h3>
                <p className="text-slate-600 leading-relaxed">Capítulos estructurados desde el diagnóstico FODA hasta la implementación y control de gestión.</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition cursor-pointer group" onClick={() => setView(ViewState.TOOLS)}>
                <div className="bg-green-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-green-600 group-hover:scale-110 transition-transform">
                  <Activity size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Herramientas</h3>
                <p className="text-slate-600 leading-relaxed">Utiliza constructores interactivos de matrices, comparadores Público/Privado y visualizadores de KPIs.</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition cursor-pointer group" onClick={() => setView(ViewState.CHAT)}>
                <div className="bg-purple-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-purple-600 group-hover:scale-110 transition-transform">
                  <BrainCircuit size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Tutor IA</h3>
                <p className="text-slate-600 leading-relaxed">Entrena con el Director Médico Virtual: quizzes de clasificación y validación de objetivos.</p>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="relative z-10 max-w-5xl mx-auto border-t border-slate-200 pt-16">
              <div className="text-center mb-10">
                <h2 className="text-2xl font-bold text-slate-800 flex items-center justify-center gap-2">
                  <HelpCircle className="text-teal-600" /> Preguntas Frecuentes
                </h2>
                <p className="text-slate-500 mt-2">Respuestas rápidas basadas en el Manual U. Finis Terrae</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                  <h3 className="font-bold text-slate-800 mb-3 flex gap-2">
                    <CheckCircle2 size={20} className="text-teal-500 shrink-0"/> 
                    ¿Por qué planificar en salud?
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    No es solo administrativo, es un imperativo ético. En salud, las fallas de planificación afectan la vida y dignidad de las personas. Permite priorizar recursos escasos en un entorno de necesidades infinitas (Cap. 1.2).
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                  <h3 className="font-bold text-slate-800 mb-3 flex gap-2">
                    <CheckCircle2 size={20} className="text-teal-500 shrink-0"/> 
                    ¿Público vs. Privado?
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    El sector público se rige por mandatos legales y rigidez presupuestaria (DIPRES) buscando valor social. El privado busca sostenibilidad financiera y competitividad, con mayor autonomía de gestión (Cap. 1.3 y 10).
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                  <h3 className="font-bold text-slate-800 mb-3 flex gap-2">
                    <CheckCircle2 size={20} className="text-teal-500 shrink-0"/> 
                    ¿Qué es una Brecha Crítica?
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    No es cualquier problema. Es una diferencia significativa y estructural entre la realidad actual y el estándar necesario para cumplir la misión. Si no es estructural, es solo un problema operativo (Cap. 4.4).
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                  <h3 className="font-bold text-slate-800 mb-3 flex gap-2">
                    <CheckCircle2 size={20} className="text-teal-500 shrink-0"/> 
                    ¿Cómo medir la estrategia?
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Usando un Balanced Scorecard (BSC) adaptado. Además de lo financiero y procesos, en salud es vital la perspectiva de "Valor Social/Salud Pública" para medir el impacto real en la comunidad (Cap. 9.3).
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      
      case ViewState.LEARN:
        return (
          <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-6">
            {/* Sidebar Navigation */}
            <div className="md:w-64 flex-shrink-0 space-y-2">
              <h3 className="font-bold text-slate-700 px-2 mb-2">Capítulos</h3>
              <div className="flex flex-col gap-2">
                {CHAPTERS.map((chap, idx) => {
                  const isLocked = idx > 0 && !completedChapters[CHAPTERS[idx - 1].id];
                  return (
                    <button
                      key={chap.id}
                      onClick={() => !isLocked && setCurrentChapterIdx(idx)}
                      disabled={isLocked}
                      className={`flex items-center gap-3 p-2 rounded-lg text-sm text-left transition-all ${
                        idx === currentChapterIdx 
                          ? 'bg-teal-700 text-white shadow-md' 
                          : isLocked
                            ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                            : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
                      }`}
                    >
                      <div 
                        className="w-10 h-10 rounded bg-cover bg-center shrink-0 border border-black/10"
                        style={{ backgroundImage: `url(${chap.image})` }}
                      />
                      <div className="flex-1">
                        <span className="line-clamp-2 leading-tight">{chap.title}</span>
                      </div>
                      {completedChapters[chap.id] && <CheckCircle2 size={16} className="text-green-500" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Main Chapter Content */}
            <div className="flex-1">
              <ChapterViewer 
                chapter={CHAPTERS[currentChapterIdx]} 
                onNext={currentChapterIdx < CHAPTERS.length - 1 ? () => setCurrentChapterIdx(c => c + 1) : undefined}
                onPrev={currentChapterIdx > 0 ? () => setCurrentChapterIdx(c => c - 1) : undefined}
                isCompleted={!!completedChapters[CHAPTERS[currentChapterIdx].id]}
                onComplete={() => handleChapterComplete(CHAPTERS[currentChapterIdx].id)}
              />
            </div>
          </div>
        );

      case ViewState.TOOLS:
        return (
          <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <BrainCircuit className="text-purple-600"/> Laboratorio de KPIs
              </h2>
              <KpiTrainer />
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <Activity className="text-teal-600"/> Comparador Público vs Privado
              </h2>
              <PublicPrivateComparator />
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <Book className="text-blue-600"/> Constructor FODA
              </h2>
              <SwotBuilder />
            </section>
          </div>
        );

      case ViewState.CHAT:
        return (
          <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
            <AiTutor initialMode={tutorStartMode} />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative z-10">
        <Header currentView={view} onNavigate={setView} />
        <main>
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default App;