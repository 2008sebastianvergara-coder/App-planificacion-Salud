import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, AlertTriangle } from 'lucide-react';
import { Message } from '../types';
import { sendMessageToTutor } from '../services/geminiService';

const AiTutor: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: '¡Bienvenido colega! Soy el Director Médico Virtual. Estoy aquí para poner a prueba tu planificación estratégica.\n\nPodemos trabajar en dos modalidades principales:\n1. **Modo Defensa de Tesis:** Preséntame un Objetivo Estratégico (SMART) y lo evaluaré con rigor técnico.\n2. **Modo Quiz de Clasificación:** Te haré preguntas rápidas para ver si sabes distinguir entre Amenazas, Debilidades o Tipos de KPI.\n\n¿Por dónde quieres empezar?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      // Prepare history for API (excluding error messages)
      const history = messages
        .filter(m => !m.isError)
        .map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        }));

      const responseText = await sendMessageToTutor(history, userMessage.text);
      
      if (responseText) {
        setMessages(prev => [...prev, { role: 'model', text: responseText }]);
      } else {
        throw new Error("Empty response");
      }
    } catch (error) {
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: 'Lo siento, hubo un error de conexión. Intente nuevamente.',
        isError: true 
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
      <div className="bg-slate-800 p-4 text-white flex items-center gap-3 shadow-md">
        <div className="bg-teal-500 p-2 rounded-full shadow-lg border-2 border-white/20">
          <Bot size={28} className="text-white" />
        </div>
        <div>
          <h2 className="font-bold text-lg">Director Médico Virtual</h2>
          <p className="text-slate-300 text-xs font-medium">Evaluación Estratégica Rigurosa (IA)</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
        {messages.map((msg, idx) => (
          <div 
            key={idx} 
            className={`flex items-start gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
          >
            <div className={`p-2 rounded-full shrink-0 shadow-sm ${msg.role === 'user' ? 'bg-indigo-100 text-indigo-700' : 'bg-teal-100 text-teal-700'}`}>
              {msg.role === 'user' ? <User size={20} /> : <Bot size={20} />}
            </div>
            <div className={`p-3 rounded-lg max-w-[85%] text-sm shadow-md ${
              msg.isError 
                ? 'bg-red-50 text-red-700 border border-red-200' 
                : msg.role === 'user' 
                  ? 'bg-indigo-600 text-white rounded-tr-none' 
                  : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none prose prose-sm max-w-none'
            }`}>
              {msg.text.split('\n').map((line, i) => (
                <p key={i} className="mb-2 last:mb-0 min-h-[1.2em]">{line}</p>
              ))}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex items-center gap-2 text-slate-400 text-sm ml-12">
            <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-75"></div>
            <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-150"></div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 bg-white border-t border-slate-200">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Escribe tu objetivo SMART o pide un quiz..."
            className="flex-1 p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm shadow-sm"
            disabled={loading}
          />
          <button
            onClick={handleSend}
            disabled={loading || !input.trim()}
            className="bg-teal-600 text-white p-3 rounded-lg hover:bg-teal-700 transition disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
          >
            <Send size={20} />
          </button>
        </div>
        <p className="text-[10px] text-slate-400 mt-2 text-center">
          Modo Director Médico activo. Respuestas basadas en Manual U. Finis Terrae 2025.
        </p>
      </div>
    </div>
  );
};

export default AiTutor;