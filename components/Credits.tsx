
import React from 'react';
import { Users, Award, GraduationCap, Code } from 'lucide-react';

const TEAM = [
  { 
    name: "Jorge Rosales Salas, PhD", 
    role: "Editor / Facultad de Ingeniería", 
    icon: GraduationCap,
    color: "bg-blue-100 text-blue-700"
  },
  { 
    name: "Dr. Sebastián Pizarro", 
    role: "Editor / Facultad de Medicina", 
    icon: GraduationCap,
    color: "bg-indigo-100 text-indigo-700"
  },
  { 
    name: "Angélica Urrutia, PhD", 
    role: "Decana Facultad de Ingeniería", 
    icon: Award,
    color: "bg-teal-100 text-teal-700"
  },
  { 
    name: "Dr. Ernesto Vega", 
    role: "Decano Facultad de Medicina", 
    icon: Award,
    color: "bg-emerald-100 text-emerald-700"
  },
  { 
    name: "Sebastian Vergara", 
    role: "Asistente de Investigación", 
    icon: Code,
    color: "bg-orange-100 text-orange-700"
  }
];

const Credits: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-teal-50 rounded-full mb-4">
          <Users className="text-teal-600 h-8 w-8" />
        </div>
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Créditos y Agradecimientos</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Reconocimiento al equipo académico y profesional detrás del Manual de Planificación Estratégica y el desarrollo de esta plataforma interactiva.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {TEAM.map((person, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-xl shadow-md border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1 group"
          >
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${person.color} group-hover:scale-110 transition-transform`}>
              <person.icon size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-1">{person.name}</h3>
            <p className="text-sm text-slate-500 font-medium">{person.role}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 p-8 bg-slate-50 rounded-2xl border border-slate-200 text-center">
        <h4 className="font-bold text-slate-700 mb-2">Universidad Finis Terrae</h4>
        <p className="text-sm text-slate-500">
          Proyecto conjunto Facultad de Ingeniería y Facultad de Medicina<br/>
          Noviembre 2025
        </p>
      </div>
    </div>
  );
};

export default Credits;
