
import React, { useState } from 'react';
import { 
  ArrowRight, Download, Plus, Trash2, HelpCircle, 
  CheckCircle2, XCircle, ThumbsUp, ThumbsDown, 
  Building, Globe, AlertTriangle, ShieldCheck, RefreshCw, BookOpen, ChevronRight, FileText
} from 'lucide-react';

interface SwotItem { 
  id: number; 
  text: string; 
  type: 'strengths' | 'weaknesses' | 'opportunities' | 'threats';
}

const DefinitionCard = ({ title, desc, icon: Icon, color }: any) => (
  <div className={`p-5 rounded-2xl border bg-white shadow-sm flex items-start gap-4 transition-transform hover:-translate-y-1 ${color}`}>
    <div className={`p-3 rounded-xl shrink-0 bg-slate-50`}>
      <Icon size={24} className="text-slate-700" />
    </div>
    <div>
      <h4 className="font-bold text-slate-800 text-lg mb-1 uppercase tracking-wide">{title}</h4>
      <p className="text-sm text-slate-600 leading-snug">{desc}</p>
    </div>
  </div>
);

// --- COMPONENTE: MAPA DE AYUDA (CHEAT SHEET) ---
const SwotCheatSheet = () => (
  <div className="bg-white border border-slate-200 rounded-2xl p-6 h-full shadow-sm">
    <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-6 flex items-center gap-2 pb-4 border-b border-slate-100">
      <HelpCircle size={14}/> Mapa de Referencia
    </h5>
    <div className="space-y-4">
      {/* Interno */}
      <div>
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">Origen Interno</span>
        <div className="space-y-2">
          <div className="flex items-center gap-3 p-3 bg-green-50 rounded-xl border border-green-100">
            <div className="bg-white p-1.5 rounded-lg shadow-sm"><ShieldCheck size={16} className="text-green-600"/></div>
            <div className="text-xs">
              <strong className="block text-green-800">FORTALEZA</strong>
              <span className="text-green-600/80">Positivo</span>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-red-50 rounded-xl border border-red-100">
            <div className="bg-white p-1.5 rounded-lg shadow-sm"><AlertTriangle size={16} className="text-red-600"/></div>
            <div className="text-xs">
              <strong className="block text-red-800">DEBILIDAD</strong>
              <span className="text-red-600/80">Negativo</span>
            </div>
          </div>
        </div>
      </div>

      {/* Externo */}
      <div>
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">Origen Externo</span>
        <div className="space-y-2">
          <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl border border-blue-100">
            <div className="bg-white p-1.5 rounded-lg shadow-sm"><CheckCircle2 size={16} className="text-blue-600"/></div>
            <div className="text-xs">
              <strong className="block text-blue-800">OPORTUNIDAD</strong>
              <span className="text-blue-600/80">Positivo</span>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-xl border border-orange-100">
            <div className="bg-white p-1.5 rounded-lg shadow-sm"><XCircle size={16} className="text-orange-600"/></div>
            <div className="text-xs">
              <strong className="block text-orange-800">AMENAZA</strong>
              <span className="text-orange-600/80">Negativo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SwotBuilder: React.FC = () => {
  const [items, setItems] = useState<SwotItem[]>([]);
  const [inputText, setInputText] = useState('');
  const [step, setStep] = useState<'intro' | 'input' | 'origin' | 'nature' | 'result'>('intro');
  
  const [currentOrigin, setCurrentOrigin] = useState<'internal' | 'external' | null>(null);

  const resetWizard = () => {
    setInputText('');
    setStep('input');
    setCurrentOrigin(null);
  };

  const classifyAndAdd = (nature: 'positive' | 'negative') => {
    let type: SwotItem['type'] = 'strengths';

    if (currentOrigin === 'internal' && nature === 'positive') type = 'strengths';     
    if (currentOrigin === 'internal' && nature === 'negative') type = 'weaknesses';    
    if (currentOrigin === 'external' && nature === 'positive') type = 'opportunities'; 
    if (currentOrigin === 'external' && nature === 'negative') type = 'threats';       

    setItems([...items, { id: Date.now(), text: inputText, type }]);
    setStep('result');
  };

  const handleStart = () => {
    if (!inputText.trim()) return;
    setStep('origin');
  };

  const deleteItem = (id: number) => {
    setItems(items.filter(i => i.id !== id));
  };

  // --- CONTENIDO DEL WIZARD ---

  const renderIntro = () => (
    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 text-center">
      <div className="inline-flex justify-center items-center p-4 bg-slate-900 rounded-2xl mb-8 shadow-lg">
        <BookOpen size={40} className="text-white" />
      </div>
      <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">Constructor de FODA</h2>
      <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">
        El FODA es la radiografía de tu institución. Te ayudaremos a clasificar cada factor paso a paso para evitar errores comunes.
      </p>
      
      <div className="grid md:grid-cols-2 gap-4 text-left mb-12 max-w-4xl mx-auto">
        <DefinitionCard 
          icon={ShieldCheck} color="border-green-500"
          title="Fortalezas" desc="Lo que hacemos BIEN. Depende de nosotros." 
        />
        <DefinitionCard 
          icon={AlertTriangle} color="border-red-500"
          title="Debilidades" desc="Lo que hacemos MAL. Depende de nosotros." 
        />
        <DefinitionCard 
          icon={CheckCircle2} color="border-blue-500"
          title="Oportunidades" desc="Lo BUENO de afuera que podemos aprovechar." 
        />
        <DefinitionCard 
          icon={XCircle} color="border-orange-500"
          title="Amenazas" desc="Lo MALO de afuera que nos puede dañar." 
        />
      </div>

      <button 
        onClick={() => setStep('input')}
        className="bg-teal-600 text-white px-10 py-4 rounded-xl font-bold text-xl hover:bg-teal-700 transition-all shadow-xl hover:shadow-teal-600/20 hover:scale-105 flex items-center gap-3 mx-auto"
      >
        Comenzar Análisis <ArrowRight size={24}/>
      </button>
    </div>
  );

  const renderInput = () => (
    <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 text-center animate-in zoom-in-95 max-w-2xl mx-auto">
      <div className="inline-block p-4 bg-teal-50 rounded-full mb-6 text-teal-600">
        <Plus size={32} />
      </div>
      <h3 className="text-2xl font-bold text-slate-800 mb-2">Nuevo Factor</h3>
      <p className="text-slate-500 mb-8">Escribe una situación, hecho o característica relevante.</p>
      
      <div className="relative">
        <input 
          type="text" 
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleStart()}
          placeholder="Ej: 'El equipo médico está muy comprometido'..."
          className="w-full p-5 text-lg border-2 border-slate-200 rounded-2xl focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all mb-6 text-center shadow-sm"
          autoFocus
        />
      </div>

      <button 
        onClick={handleStart}
        disabled={!inputText.trim()}
        className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold text-lg hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all w-full shadow-lg"
      >
        Analizar Factor
      </button>
    </div>
  );

  const renderQuestions = () => (
    <div className="flex flex-col lg:flex-row gap-8 animate-in slide-in-from-right-8">
      {/* Main Question Area */}
      <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 flex-1 relative overflow-hidden">
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-100">
          <div className={`h-full bg-teal-500 transition-all duration-500 ${step === 'origin' ? 'w-1/2' : 'w-full'}`}></div>
        </div>

        <div className="mb-8 mt-4">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">Analizando:</span>
          <div className="text-xl md:text-2xl font-medium text-slate-800 leading-snug">"{inputText}"</div>
        </div>

        {step === 'origin' ? (
          <>
            <h4 className="text-center text-2xl font-bold mb-8 text-slate-800">¿De dónde viene este factor?</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <button onClick={() => { setCurrentOrigin('internal'); setStep('nature'); }} className="group p-8 rounded-2xl border-2 border-slate-100 hover:border-blue-500 hover:bg-blue-50 transition-all text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform"><Building size={32}/></div>
                <span className="block font-bold text-lg text-slate-800 mb-1">Es INTERNO</span>
                <span className="text-sm text-slate-500">Depende de nosotros.<br/>(Personal, Procesos, Recursos)</span>
              </button>
              <button onClick={() => { setCurrentOrigin('external'); setStep('nature'); }} className="group p-8 rounded-2xl border-2 border-slate-100 hover:border-indigo-500 hover:bg-indigo-50 transition-all text-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center text-indigo-600 mx-auto mb-4 group-hover:scale-110 transition-transform"><Globe size={32}/></div>
                <span className="block font-bold text-lg text-slate-800 mb-1">Es EXTERNO</span>
                <span className="text-sm text-slate-500">Viene del entorno.<br/>(Leyes, Mercado, Sociedad)</span>
              </button>
            </div>
          </>
        ) : (
          <>
            <h4 className="text-center text-2xl font-bold mb-8 text-slate-800">¿Cómo nos afecta?</h4>
            <div className="flex justify-center gap-2 mb-8">
               <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase">{currentOrigin === 'internal' ? 'Origen Interno' : 'Origen Externo'}</span>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <button onClick={() => classifyAndAdd('positive')} className="group p-8 rounded-2xl border-2 border-slate-100 hover:border-green-500 hover:bg-green-50 transition-all text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center text-green-600 mx-auto mb-4 group-hover:scale-110 transition-transform"><ThumbsUp size={32}/></div>
                <span className="block font-bold text-lg text-slate-800 mb-1">Es POSITIVO</span>
                <span className="text-sm text-slate-500">Nos ayuda o beneficia.</span>
              </button>
              <button onClick={() => classifyAndAdd('negative')} className="group p-8 rounded-2xl border-2 border-slate-100 hover:border-red-500 hover:bg-red-50 transition-all text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center text-red-600 mx-auto mb-4 group-hover:scale-110 transition-transform"><ThumbsDown size={32}/></div>
                <span className="block font-bold text-lg text-slate-800 mb-1">Es NEGATIVO</span>
                <span className="text-sm text-slate-500">Nos daña o frena.</span>
              </button>
            </div>
          </>
        )}

        <div className="mt-8 flex justify-center">
          <button onClick={step === 'origin' ? () => setStep('input') : () => setStep('origin')} className="text-slate-400 text-sm hover:text-slate-600 hover:underline">
            Volver atrás
          </button>
        </div>
      </div>
      
      {/* Sidebar Cheat Sheet (Desktop) */}
      <div className="hidden lg:block w-72 shrink-0">
        <SwotCheatSheet />
      </div>
    </div>
  );

  const renderResult = () => {
    const lastItem = items[items.length - 1];
    let config = { title: "", desc: "", color: "", icon: null };

    switch(lastItem.type) {
      case 'strengths': config = { title: "FORTALEZA", desc: "Consérvala y úsala.", color: "text-green-600 bg-green-100", icon: ShieldCheck }; break;
      case 'weaknesses': config = { title: "DEBILIDAD", desc: "Corrígela rápido.", color: "text-red-600 bg-red-100", icon: AlertTriangle }; break;
      case 'opportunities': config = { title: "OPORTUNIDAD", desc: "Aprovéchala.", color: "text-blue-600 bg-blue-100", icon: CheckCircle2 }; break;
      case 'threats': config = { title: "AMENAZA", desc: "Afróntala.", color: "text-orange-600 bg-orange-100", icon: XCircle }; break;
    }
    const ResultIcon = config.icon!;

    return (
      <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-slate-100 max-w-md mx-auto text-center animate-in zoom-in-95">
        <div className={`inline-flex p-5 rounded-full mb-6 ${config.color}`}>
          <ResultIcon size={48} />
        </div>
        <h3 className="text-3xl font-black text-slate-800 mb-1">{config.title}</h3>
        <p className="text-slate-500 font-medium mb-8">{config.desc}</p>
        <button 
          onClick={resetWizard}
          className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg flex items-center justify-center gap-2 w-full"
        >
          <RefreshCw size={20}/> Clasificar otro
        </button>
      </div>
    );
  };

  const renderGrid = () => (
    <div className="mt-16 animate-in fade-in slide-in-from-bottom-8">
      <div className="flex justify-between items-end mb-6 border-b border-slate-200 pb-4">
        <div>
          <h3 className="font-black text-3xl text-slate-900">Matriz Resultante</h3>
          <p className="text-slate-500 mt-1">Resumen de tu análisis estratégico</p>
        </div>
        <button onClick={() => window.print()} className="text-sm font-bold text-teal-700 hover:text-teal-800 flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors">
          <Download size={18}/> Imprimir / PDF
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {[
          { type: 'strengths', title: 'FORTALEZAS', icon: ShieldCheck, style: 'bg-green-50 border-green-200 text-green-800' },
          { type: 'weaknesses', title: 'DEBILIDADES', icon: AlertTriangle, style: 'bg-red-50 border-red-200 text-red-800' },
          { type: 'opportunities', title: 'OPORTUNIDADES', icon: CheckCircle2, style: 'bg-blue-50 border-blue-200 text-blue-800' },
          { type: 'threats', title: 'AMENAZAS', icon: XCircle, style: 'bg-orange-50 border-orange-200 text-orange-800' },
        ].map((cat) => (
          <div key={cat.type} className={`border-2 rounded-2xl p-6 min-h-[200px] shadow-sm ${cat.style}`}>
            <h4 className="font-black flex items-center gap-2 mb-4 text-xl border-b border-current/20 pb-3">
              <cat.icon size={24}/> {cat.title}
            </h4>
            <ul className="space-y-3">
              {items.filter(i => i.type === cat.type).map(i => (
                <li key={i.id} className="flex justify-between items-start gap-2 bg-white/60 p-3 rounded-lg backdrop-blur-sm text-slate-800 font-medium text-sm group">
                  <span>{i.text}</span>
                  <button onClick={() => deleteItem(i.id)} className="text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 size={14}/></button>
                </li>
              ))}
              {items.filter(i => i.type === cat.type).length === 0 && (
                <li className="text-center italic opacity-50 py-4 text-sm">Sin elementos aún</li>
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto">
      {step === 'intro' && renderIntro()}
      {step === 'input' && renderInput()}
      {(step === 'origin' || step === 'nature') && renderQuestions()}
      {step === 'result' && renderResult()}
      
      {/* Mobile Cheat Sheet - Visible only when in process */}
      {(step === 'origin' || step === 'nature') && (
        <div className="lg:hidden mt-8">
          <SwotCheatSheet />
        </div>
      )}

      {items.length > 0 && step !== 'result' && renderGrid()}
    </div>
  );
};

export default SwotBuilder;
