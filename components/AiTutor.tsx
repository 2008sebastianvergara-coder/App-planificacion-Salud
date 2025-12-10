
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, BrainCircuit, HelpCircle } from 'lucide-react';
import { Message } from '../types';
import { sendMessageToTutor } from '../services/geminiService';

const STRICT_INTRO = "Modo Defensa activado. Preséntame tu Objetivo Estratégico o duda para evaluarla con el rigor de un Director Médico.";
const FRIENDLY_INTRO = "¡Hola! Soy tu Profesor Ayudante. Estoy aquí para resolver cualquier duda que tengas sobre el manual, explicarte conceptos difíciles o darte ejemplos. ¿En qué te puedo ayudar hoy?";

const MessageBubble: React.FC<{ msg: Message, isStrict: boolean }> = ({ msg, isStrict }) => {
  const isUser = msg.role === 'user';
  
  // Dynamic colors based on mode
  const botBg = isStrict ? 'bg-indigo-100 text-indigo-800' : 'bg-orange-100 text-orange-800';
  const userBg = 'bg-slate-100 text-slate-700';
  const botBubble = isStrict ? 'bg-white border-indigo-100 text-slate-700' : 'bg-white border-orange-100 text-slate-700';
  const userBubble = isStrict ? 'bg-indigo-600 text-white' : 'bg-orange-500 text-white';

  return (
    <div className={`flex items-start gap-3 ${isUser ? 'flex-row-reverse' : ''}`}>
      <div className={`p-2 rounded-full shrink-0 shadow-sm ${isUser ? userBg : botBg}`}>
        {isUser ? <User size={20} /> : <Bot size={20} />}
      </div>
      <div className={`p-3 rounded-lg max-w-[85%] text-sm shadow-md whitespace-pre-wrap border ${
        msg.isError ? 'bg-red-50 text-red-700 border-red-200' : 
        isUser ? `${userBubble} rounded-tr-none border-transparent` : `${botBubble} rounded-tl-none`
      }`}>
        {msg.text}
      </div>
    </div>
  );
};

interface AiTutorProps {
  initialMode?: 'normal' | 'defense' | 'friendly';
}

const AiTutor: React.FC<AiTutorProps> = ({ initialMode = 'normal' }) => {
  // Determine if we are in strict mode (defense) or friendly mode
  // If 'normal' is passed (legacy), default to friendly for better UX, or strict if preferred. 
  // Based on request, let's map 'friendly' explicitly.
  const isStrict = initialMode === 'defense';
  const modeKey = isStrict ? 'strict' : 'friendly';

  const [messages, setMessages] = useState<Message[]>([{ 
    role: 'model', 
    text: isStrict ? STRICT_INTRO : FRIENDLY_INTRO
  }]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => endRef.current?.scrollIntoView({ behavior: 'smooth' }), [messages, loading]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    const userText = input;
    setInput('');
    setLoading(true);
    setMessages(p => [...p, { role: 'user', text: userText }]);

    try {
      const history = messages.filter(m => !m.isError).map(m => ({ role: m.role, parts: [{ text: m.text }] }));
      const response = await sendMessageToTutor(history, userText, modeKey);
      if (response) setMessages(p => [...p, { role: 'model', text: response }]);
    } catch {
      setMessages(p => [...p, { role: 'model', text: 'Error de conexión. Por favor intenta de nuevo.', isError: true }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
      {/* Header varies by mode */}
      <div className={`${isStrict ? 'bg-indigo-900' : 'bg-orange-500'} p-4 text-white flex items-center gap-3 shadow-md transition-colors duration-500`}>
        <div className="bg-white/20 p-2 rounded-full border-2 border-white/20">
          {isStrict ? <BrainCircuit size={28} /> : <HelpCircle size={28} />}
        </div>
        <div>
          <h2 className="font-bold text-lg">
            {isStrict ? "Director Médico Virtual" : "Tutor de Dudas y Consultas"}
          </h2>
          <p className="text-xs opacity-90">
            {isStrict ? "Modo Defensa: Evaluación Rigurosa" : "Modo Ayudante: Explicaciones Claras y Amables"}
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
        {messages.map((m, i) => <MessageBubble key={i} msg={m} isStrict={isStrict} />)}
        {loading && <div className="text-slate-400 text-sm ml-12 animate-pulse flex items-center gap-2">
          <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
          <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-75"></span>
          <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-150"></span>
        </div>}
        <div ref={endRef} />
      </div>

      <div className="p-4 bg-white border-t">
        <div className="flex gap-2">
          <input 
            value={input} 
            onChange={e => setInput(e.target.value)} 
            onKeyPress={e => e.key === 'Enter' && handleSend()}
            disabled={loading} 
            placeholder={isStrict ? "Defiende tu argumento aquí..." : "Escribe tu duda aquí..."} 
            className={`flex-1 p-3 border rounded-lg outline-none text-sm transition-all ${
              isStrict 
                ? 'focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500' 
                : 'focus:ring-2 focus:ring-orange-400 focus:border-orange-400'
            }`}
          />
          <button 
            onClick={handleSend} 
            disabled={loading || !input.trim()} 
            className={`text-white p-3 rounded-lg disabled:opacity-50 transition-colors ${
              isStrict 
                ? 'bg-indigo-700 hover:bg-indigo-800' 
                : 'bg-orange-500 hover:bg-orange-600'
            }`}
          >
            <Send size={20} />
          </button>
        </div>
        <p className="text-[10px] text-slate-400 mt-2 text-center">
          {isStrict ? "El Director evaluará la calidad técnica de tu respuesta." : "El Ayudante te explicará basándose en el Manual U. Finis Terrae."}
        </p>
      </div>
    </div>
  );
};

export default AiTutor;
