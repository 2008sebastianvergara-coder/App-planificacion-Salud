import React, { useState } from 'react';
import { Plus, Trash2, Download } from 'lucide-react';

interface SwotItem {
  id: number;
  text: string;
}

interface SwotState {
  strengths: SwotItem[];
  weaknesses: SwotItem[];
  opportunities: SwotItem[];
  threats: SwotItem[];
}

const SwotBuilder: React.FC = () => {
  const [swot, setSwot] = useState<SwotState>({
    strengths: [],
    weaknesses: [],
    opportunities: [],
    threats: []
  });
  const [inputs, setInputs] = useState({
    strengths: '',
    weaknesses: '',
    opportunities: '',
    threats: ''
  });

  const addItem = (type: keyof SwotState) => {
    if (!inputs[type].trim()) return;
    setSwot(prev => ({
      ...prev,
      [type]: [...prev[type], { id: Date.now(), text: inputs[type] }]
    }));
    setInputs(prev => ({ ...prev, [type]: '' }));
  };

  const removeItem = (type: keyof SwotState, id: number) => {
    setSwot(prev => ({
      ...prev,
      [type]: prev[type].filter(item => item.id !== id)
    }));
  };

  const Quadrant = ({ 
    title, 
    type, 
    items, 
    colorClass, 
    bgClass 
  }: { 
    title: string, 
    type: keyof SwotState, 
    items: SwotItem[], 
    colorClass: string,
    bgClass: string
  }) => (
    <div className={`p-4 rounded-lg border ${bgClass} h-full flex flex-col`}>
      <h3 className={`font-bold text-lg mb-3 ${colorClass} uppercase tracking-wider`}>{title}</h3>
      <div className="flex gap-2 mb-4">
        <input 
          type="text" 
          value={inputs[type]}
          onChange={(e) => setInputs(prev => ({...prev, [type]: e.target.value}))}
          onKeyPress={(e) => e.key === 'Enter' && addItem(type)}
          placeholder="Añadir ítem..."
          className="flex-1 p-2 text-sm border rounded focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-teal-500"
        />
        <button 
          onClick={() => addItem(type)}
          className="p-2 bg-white rounded border text-slate-600 hover:bg-slate-50 transition"
        >
          <Plus size={18} />
        </button>
      </div>
      <ul className="space-y-2 flex-1 overflow-y-auto max-h-60">
        {items.map(item => (
          <li key={item.id} className="flex justify-between items-start gap-2 bg-white p-2 rounded border border-slate-100 shadow-sm text-sm">
            <span className="text-slate-700">{item.text}</span>
            <button onClick={() => removeItem(type, item.id)} className="text-slate-400 hover:text-red-500">
              <Trash2 size={14} />
            </button>
          </li>
        ))}
        {items.length === 0 && <li className="text-slate-400 text-xs italic text-center py-2">Sin elementos aún</li>}
      </ul>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-slate-800">Constructor de Matriz FODA</h2>
        <p className="text-slate-600">Herramienta interactiva para el diagnóstico estratégico</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 h-[600px]">
        {/* Internal Factors */}
        <Quadrant 
          title="Fortalezas (Interno)" 
          type="strengths" 
          items={swot.strengths} 
          colorClass="text-green-700" 
          bgClass="bg-green-50 border-green-200"
        />
        <Quadrant 
          title="Debilidades (Interno)" 
          type="weaknesses" 
          items={swot.weaknesses} 
          colorClass="text-red-700" 
          bgClass="bg-red-50 border-red-200"
        />
        {/* External Factors */}
        <Quadrant 
          title="Oportunidades (Externo)" 
          type="opportunities" 
          items={swot.opportunities} 
          colorClass="text-blue-700" 
          bgClass="bg-blue-50 border-blue-200"
        />
        <Quadrant 
          title="Amenazas (Externo)" 
          type="threats" 
          items={swot.threats} 
          colorClass="text-orange-700" 
          bgClass="bg-orange-50 border-orange-200"
        />
      </div>
      
      <div className="mt-6 flex justify-center">
        <button 
          onClick={() => window.print()}
          className="flex items-center gap-2 bg-slate-800 text-white px-6 py-2 rounded-lg hover:bg-slate-700 transition"
        >
          <Download size={18} /> Imprimir / Guardar PDF
        </button>
      </div>
    </div>
  );
};

export default SwotBuilder;