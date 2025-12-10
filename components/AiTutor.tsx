import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';
import { Message } from '../types';
import { sendMessageToTutor } from '../services/geminiService';

const INITIAL_MSG = '¡Bienvenido colega! Soy el Director Médico Virtual.\n\nModalidades:\n1. **Modo Defensa de Tesis:** Evalúo tu Objetivo Estratégico.\n2. **Modo Quiz:** Clasificación rápida.\n\n¿Empezamos?';

const MessageBubble: React.FC<{ msg: Message }> = ({ msg }) => {
  const isUser = msg.role === 'user';
  return (
    <div className={`flex items-start gap-3 ${isUser ? 'flex-row-reverse' : ''}`}>
      <div className={`p-2 rounded-full shrink-0 shadow-sm ${isUser ? 'bg-indigo-100 text-indigo-700' : 'bg-teal-100 text-teal-700'}`}>
        {isUser ? <User size={20} /> : <Bot size={20} />}
      </div>
      <div className={`p-3 rounded-lg max-w-[85%] text-sm shadow-md whitespace-pre-wrap ${
        msg.isError ? 'bg-red-50 text-red-700 border-red-200' : 
        isUser ? 'bg-indigo-600 text-white rounded-tr-none' : 'bg-white text-slate-700 border-slate-100 rounded-tl-none'
      }`}>
        {msg.text}
      </div>
    </div>
  );
};

const AiTutor: React.FC<{ initialMode?: string }> = ({ initialMode }) => {
  const [messages, setMessages] = useState<Message[]>([{ 
    role: 'model', 
    text: initialMode === 'defense' ? "Modo Defensa activado. Preséntame tu Objetivo Estratégico para destruirlo... digo, evaluarlo." : INITIAL_MSG 
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
      const response = await sendMessageToTutor(history, userText);
      if (response) setMessages(p => [...p, { role: 'model', text: response }]);
    } catch {
      setMessages(p => [...p, { role: 'model', text: 'Error de conexión.', isError: true }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
      <div className="bg-slate-800 p-4 text-white flex items-center gap-3">
        <div className="bg-teal-500 p-2 rounded-full border-2 border-white/20"><Bot size={28} /></div>
        <div><h2 className="font-bold">Director Médico Virtual</h2><p className="text-xs text-slate-300">Evaluación Estratégica Rigurosa</p></div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
        {messages.map((m, i) => <MessageBubble key={i} msg={m} />)}
        {loading && <div className="text-slate-400 text-sm ml-12 animate-pulse">Escribiendo...</div>}
        <div ref={endRef} />
      </div>

      <div className="p-4 bg-white border-t">
        <div className="flex gap-2">
          <input 
            value={input} onChange={e => setInput(e.target.value)} onKeyPress={e => e.key === 'Enter' && handleSend()}
            disabled={loading} placeholder="Escribe aquí..." 
            className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none text-sm"
          />
          <button onClick={handleSend} disabled={loading || !input.trim()} className="bg-teal-600 text-white p-3 rounded-lg hover:bg-teal-700 disabled:opacity-50">
            <Send size={20} />
          </button>
        </div>
        <p className="text-[10px] text-slate-400 mt-2 text-center">Basado en Manual U. Finis Terrae 2025.</p>
      </div>
    </div>
  );
};

export default AiTutor;