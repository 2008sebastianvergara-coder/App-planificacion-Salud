
import React from 'react';
import { BookOpen, PenTool, Users, Home, Layout, MessageCircleQuestion, BrainCircuit } from 'lucide-react';
import { ViewState } from '../types';

interface HeaderProps {
  currentView: ViewState;
  tutorMode?: 'friendly' | 'defense';
  onNavigate: (view: ViewState) => void;
  onChatFriendly: () => void;
  onChatDefense: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  currentView, 
  tutorMode, 
  onNavigate, 
  onChatFriendly, 
  onChatDefense 
}) => {

  const getButtonStyle = (isActive: boolean) => 
    `px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 whitespace-nowrap ${
      isActive ? 'bg-teal-900 text-white shadow-inner' : 'text-teal-100 hover:bg-teal-600'
    }`;

  return (
    <header className="bg-teal-700 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo / Home Link */}
          <div className="flex items-center gap-2 cursor-pointer shrink-0 mr-4" onClick={() => onNavigate(ViewState.HOME)}>
            <div className="bg-white p-1 rounded-full">
              <BookOpen className="text-teal-700 h-6 w-6" />
            </div>
            <span className="font-bold text-lg tracking-tight hidden lg:block">EstrategiaSalud</span>
          </div>
          
          {/* Navigation Items */}
          <nav className="flex space-x-1 overflow-x-auto no-scrollbar items-center flex-1 justify-end">
            
            <button 
              onClick={() => onNavigate(ViewState.HOME)}
              className={getButtonStyle(currentView === ViewState.HOME)}
            >
              <Layout size={18} />
              <span className="hidden xl:inline">Inicio</span>
            </button>

            <button 
              onClick={() => onNavigate(ViewState.WELCOME)}
              className={getButtonStyle(currentView === ViewState.WELCOME)}
            >
              <Home size={18} />
              <span className="hidden xl:inline">Bienvenida</span>
            </button>

            <button 
              onClick={() => onNavigate(ViewState.LEARN)}
              className={getButtonStyle(currentView === ViewState.LEARN)}
            >
              <BookOpen size={18} />
              <span>Contenidos</span>
            </button>

            {/* Separator for Tutors */}
            <div className="h-6 w-px bg-teal-600 mx-1 hidden md:block"></div>

            {/* Friendly Tutor Button */}
            <button 
              onClick={onChatFriendly}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 whitespace-nowrap border border-transparent ${
                currentView === ViewState.CHAT && tutorMode === 'friendly'
                  ? 'bg-orange-500 text-white shadow-md border-orange-600' 
                  : 'text-orange-100 hover:bg-teal-600 hover:text-white'
              }`}
            >
              <MessageCircleQuestion size={18} />
              <span>Tutor de Dudas</span>
            </button>

            {/* Director (Defense) Button */}
            <button 
              onClick={onChatDefense}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 whitespace-nowrap border border-transparent ${
                currentView === ViewState.CHAT && tutorMode === 'defense'
                  ? 'bg-indigo-600 text-white shadow-md border-indigo-700' 
                  : 'text-indigo-100 hover:bg-teal-600 hover:text-white'
              }`}
            >
              <BrainCircuit size={18} />
              <span>Habla con el Director</span>
            </button>

             {/* Separator */}
             <div className="h-6 w-px bg-teal-600 mx-1 hidden md:block"></div>

            <button 
              onClick={() => onNavigate(ViewState.TOOLS)}
              className={getButtonStyle(currentView === ViewState.TOOLS)}
            >
              <PenTool size={18} />
              <span className="hidden xl:inline">Herramientas</span>
            </button>

            <button 
              onClick={() => onNavigate(ViewState.CREDITS)}
              className={getButtonStyle(currentView === ViewState.CREDITS)}
            >
              <Users size={18} />
              <span className="hidden xl:inline">Créditos</span>
            </button>

          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
