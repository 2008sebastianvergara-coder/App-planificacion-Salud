
import React from 'react';
import { ArrowRight, Book, Building2, Users } from 'lucide-react';

const Welcome: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
        
        {/* Hero / Cover Section */}
        <div className="relative bg-slate-900 text-white p-12 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/medical-icons.png')]"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900/80 to-blue-900/80"></div>
          
          <div className="relative z-10">
            <div className="uppercase tracking-[0.3em] text-teal-300 text-sm font-bold mb-4">Universidad Finis Terrae</div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Manual de Planificación Estratégica<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-blue-200">para Instituciones de Salud</span>
            </h1>
            <p className="text-xl text-slate-300 font-light mb-8">2025</p>
            
            <div className="flex justify-center gap-8 text-sm md:text-base font-medium text-slate-200">
              <div className="flex items-center gap-2">
                <Building2 size={20} className="text-teal-400"/> Facultad de Ingeniería
              </div>
              <div className="flex items-center gap-2">
                <HeartPulse size={20} className="text-blue-400"/> Facultad de Medicina
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-800">Presentación de los Editores</h2>
              <div className="w-16 h-1 bg-teal-500 rounded-full"></div>
              <p className="text-slate-600 leading-relaxed text-lg">
                Este manual nace de la convicción de que la <strong>planificación estratégica</strong> es una capacidad determinante para la sostenibilidad de los sistemas de salud contemporáneos.
              </p>
              <p className="text-slate-600 leading-relaxed">
                En un contexto de transformaciones demográficas y tecnológicas, ofrecemos una herramienta integral, rigurosa y aplicable. No es un recetario técnico, sino un instrumento reflexivo para transformar la planificación en una práctica viva de conducción institucional.
              </p>
              
              <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-slate-900 mt-6">
                <p className="italic text-slate-700 font-medium">
                  "Una convergencia interdisciplinaria que entiende la estrategia no solo como técnica administrativa, sino como un acto ético y humano orientado a la salud pública."
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100">
                <h3 className="font-bold text-teal-900 mb-4 flex items-center gap-2">
                  <Users size={20}/> Editores del Proyecto
                </h3>
                <ul className="space-y-4">
                  <li className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-teal-200 flex items-center justify-center text-teal-800 font-bold shrink-0">JR</div>
                    <div>
                      <strong className="block text-slate-800">Jorge Rosales Salas, PhD</strong>
                      <span className="text-sm text-slate-500">Facultad de Ingeniería</span>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center text-blue-800 font-bold shrink-0">SP</div>
                    <div>
                      <strong className="block text-slate-800">Dr. Sebastián Pizarro</strong>
                      <span className="text-sm text-slate-500">Facultad de Medicina</span>
                    </div>
                  </li>
                </ul>
              </div>

              <button 
                onClick={onStart}
                className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-teal-700 transition-all flex items-center justify-center gap-3 shadow-lg group"
              >
                Ir a Contenidos <ArrowRight className="group-hover:translate-x-1 transition-transform"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper Icon for this component only
const HeartPulse = ({ size, className }: { size: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
    <path d="M12 5 9.04 20.24a.6.6 0 0 0 .55.76h.21a.6.6 0 0 0 .56-.4L12 16.5l3.2 2.7a.6.6 0 0 0 .9-.4l2.1-9.3"/>
  </svg>
);

export default Welcome;
