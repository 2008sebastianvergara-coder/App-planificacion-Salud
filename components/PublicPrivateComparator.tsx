import React, { useState } from 'react';
import { Building2, Activity, ArrowRightLeft } from 'lucide-react';

const SCENARIOS = [
  {
    id: 1,
    title: "Compra de Equipamiento Médico",
    public: {
      actor: "Director Hospital Público",
      action: "Debe licitar por Mercado Público o usar convenio marco. Requiere autorización presupuestaria previa y justificación técnica estricta.",
      constraint: "Rigidez Presupuestaria (DIPRES) y Probidad."
    },
    private: {
      actor: "Gerente Clínica Privada",
      action: "Negociación directa con proveedores. Decisión basada en retorno de inversión (ROI) y ventaja competitiva.",
      constraint: "Rentabilidad y Flujo de Caja."
    }
  },
  {
    id: 2,
    title: "Contratación de Personal",
    public: {
      actor: "Subdirección RRHH",
      action: "Rige el Estatuto Administrativo. Concursos públicos para planta, contrata anual. Grados y sueldos fijados por ley.",
      constraint: "Poca flexibilidad para incentivos monetarios."
    },
    private: {
      actor: "Gerencia de Personas",
      action: "Código del Trabajo. Negociación individual de sueldos según mercado. Bonos por desempeño y flexibilidad contractual.",
      constraint: "Costos laborales y competencia por talento."
    }
  },
  {
    id: 3,
    title: "Definición de Estrategia",
    public: {
      actor: "Equipo Directivo + CIRA",
      action: "Alineada con Metas Sanitarias Nacionales y Plan Regional. Poco margen para eliminar servicios no rentables.",
      constraint: "Mandato Legal y Red Asistencial."
    },
    private: {
      actor: "Directorio + Gerencia",
      action: "Autonomía para definir cartera de servicios. Puede cerrar áreas no rentables o potenciar nichos de mercado.",
      constraint: "Demanda del Mercado y Accionistas."
    }
  }
];

const PublicPrivateComparator: React.FC = () => {
  const [selectedScenario, setSelectedScenario] = useState(SCENARIOS[0]);

  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden max-w-5xl mx-auto">
      <div className="p-6 border-b border-slate-100 bg-slate-50">
        <h3 className="font-bold text-slate-700 mb-4 text-center text-lg">Selecciona un Escenario de Gestión</h3>
        <div className="flex flex-wrap gap-2 justify-center">
          {SCENARIOS.map((scenario) => (
            <button
              key={scenario.id}
              onClick={() => setSelectedScenario(scenario)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                selectedScenario.id === scenario.id
                  ? 'bg-slate-800 text-white shadow-md'
                  : 'bg-white border border-slate-300 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {scenario.title}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
        {/* Public Side */}
        <div className="p-8 bg-blue-50/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-100 p-3 rounded-full text-blue-700">
              <Building2 size={24} />
            </div>
            <div>
              <h4 className="font-bold text-xl text-blue-900">Gestión Pública</h4>
              <p className="text-xs text-blue-600 font-medium uppercase tracking-wider">Lógica Normativa</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100 h-full">
            <div className="mb-4">
              <span className="text-xs font-bold text-slate-400 uppercase">Quién decide</span>
              <p className="font-semibold text-slate-800">{selectedScenario.public.actor}</p>
            </div>
            <div className="mb-4">
              <span className="text-xs font-bold text-slate-400 uppercase">Cómo lo hace</span>
              <p className="text-slate-700 leading-relaxed">{selectedScenario.public.action}</p>
            </div>
            <div className="mt-6 p-3 bg-red-50 border border-red-100 rounded text-sm text-red-800 flex items-start gap-2">
              <span className="font-bold">Restricción:</span> {selectedScenario.public.constraint}
            </div>
          </div>
        </div>

        {/* Private Side */}
        <div className="p-8 bg-indigo-50/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-indigo-100 p-3 rounded-full text-indigo-700">
              <Activity size={24} />
            </div>
            <div>
              <h4 className="font-bold text-xl text-indigo-900">Gestión Privada</h4>
              <p className="text-xs text-indigo-600 font-medium uppercase tracking-wider">Lógica de Mercado</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-indigo-100 h-full">
            <div className="mb-4">
              <span className="text-xs font-bold text-slate-400 uppercase">Quién decide</span>
              <p className="font-semibold text-slate-800">{selectedScenario.private.actor}</p>
            </div>
            <div className="mb-4">
              <span className="text-xs font-bold text-slate-400 uppercase">Cómo lo hace</span>
              <p className="text-slate-700 leading-relaxed">{selectedScenario.private.action}</p>
            </div>
            <div className="mt-6 p-3 bg-amber-50 border border-amber-100 rounded text-sm text-amber-800 flex items-start gap-2">
              <span className="font-bold">Restricción:</span> {selectedScenario.private.constraint}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicPrivateComparator;