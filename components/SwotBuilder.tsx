import React, { useState } from 'react';
import { Plus, Trash2, Download } from 'lucide-react';

interface SwotItem { id: number; text: string; }
type SwotKey = 'strengths' | 'weaknesses' | 'opportunities' | 'threats';

const Quadrant = ({ title, type, items, color, bg, onAdd, onRemove, inputVal, onInputChange }: any) => (
  <div className={`p-4 rounded-lg border ${bg} h-full flex flex-col`}>
    <h3 className={`font-bold text-lg mb-3 ${color} uppercase tracking-wider`}>{title}</h3>
    <div className="flex gap-2 mb-4">
      <input 
        type="text" 
        value={inputVal}
        onChange={(e) => onInputChange(type, e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && onAdd(type)}
        placeholder="Añadir ítem..."
        className="flex-1 p-2 text-sm border rounded focus:ring-2 focus:ring-teal-500 outline-none"
      />
      <button onClick={() => onAdd(type)} className="p-2 bg-white rounded border hover:bg-slate-50">
        <Plus size={18} />
      </button>
    </div>
    <ul className="space-y-2 flex-1 overflow-y-auto max-h-60">
      {items.map((item: SwotItem) => (
        <li key={item.id} className="flex justify-between items-start gap-2 bg-white p-2 rounded border shadow-sm text-sm">
          <span className="text-slate-700">{item.text}</span>
          <button onClick={() => onRemove(type, item.id)} className="text-slate-400 hover:text-red-500">
            <Trash2 size={14} />
          </button>
        </li>
      ))}
      {items.length === 0 && <li className="text-slate-400 text-xs italic text-center py-2">Sin elementos</li>}
    </ul>
  </div>
);

const SwotBuilder: React.FC = () => {
  const [swot, setSwot] = useState<Record<SwotKey, SwotItem[]>>({ strengths: [], weaknesses: [], opportunities: [], threats: [] });
  const [inputs, setInputs] = useState<Record<SwotKey, string>>({ strengths: '', weaknesses: '', opportunities: '', threats: '' });

  const handleAdd = (type: SwotKey) => {
    if (!inputs[type].trim()) return;
    setSwot(prev => ({ ...prev, [type]: [...prev[type], { id: Date.now(), text: inputs[type] }] }));
    setInputs(prev => ({ ...prev, [type]: '' }));
  };

  const handleRemove = (type: SwotKey, id: number) => {
    setSwot(prev => ({ ...prev, [type]: prev[type].filter(item => item.id !== id) }));
  };

  const handleInput = (type: SwotKey, val: string) => {
    setInputs(prev => ({ ...prev, [type]: val }));
  };

  const quadrants = [
    { title: "Fortalezas (Interno)", type: "strengths", color: "text-green-700", bg: "bg-green-50 border-green-200" },
    { title: "Debilidades (Interno)", type: "weaknesses", color: "text-red-700", bg: "bg-red-50 border-red-200" },
    { title: "Oportunidades (Externo)", type: "opportunities", color: "text-blue-700", bg: "bg-blue-50 border-blue-200" },
    { title: "Amenazas (Externo)", type: "threats", color: "text-orange-700", bg: "bg-orange-50 border-orange-200" },
  ] as const;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-slate-800">Constructor FODA</h2>
        <p className="text-slate-600">Herramienta interactiva para diagnóstico</p>
      </div>
      <div className="grid md:grid-cols-2 gap-4 h-[600px]">
        {quadrants.map(q => (
          <Quadrant 
            key={q.type} {...q} items={swot[q.type]} inputVal={inputs[q.type]}
            onAdd={handleAdd} onRemove={handleRemove} onInputChange={handleInput}
          />
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <button onClick={() => window.print()} className="flex items-center gap-2 bg-slate-800 text-white px-6 py-2 rounded-lg hover:bg-slate-700">
          <Download size={18} /> Imprimir / PDF
        </button>
      </div>
    </div>
  );
};

export default SwotBuilder;