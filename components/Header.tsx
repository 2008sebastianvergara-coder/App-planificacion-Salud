import React from 'react';
import { BookOpen, MessageSquare, PenTool } from 'lucide-react';
import { ViewState } from '../types';

interface HeaderProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  return (
    <header className="bg-teal-700 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate(ViewState.HOME)}>
            <div className="bg-white p-1 rounded-full">
              <BookOpen className="text-teal-700 h-6 w-6" />
            </div>
            <span className="font-bold text-lg tracking-tight hidden sm:block">EstrategiaSalud</span>
          </div>
          
          <nav className="flex space-x-2 sm:space-x-4">
            <button 
              onClick={() => onNavigate(ViewState.LEARN)}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${currentView === ViewState.LEARN ? 'bg-teal-800 text-white' : 'text-teal-100 hover:bg-teal-600'}`}
            >
              <BookOpen size={18} />
              <span className="hidden sm:inline">Aprender</span>
            </button>
            <button 
              onClick={() => onNavigate(ViewState.TOOLS)}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${currentView === ViewState.TOOLS ? 'bg-teal-800 text-white' : 'text-teal-100 hover:bg-teal-600'}`}
            >
              <PenTool size={18} />
              <span className="hidden sm:inline">Herramientas</span>
            </button>
            <button 
              onClick={() => onNavigate(ViewState.CHAT)}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${currentView === ViewState.CHAT ? 'bg-teal-800 text-white' : 'text-teal-100 hover:bg-teal-600'}`}
            >
              <MessageSquare size={18} />
              <span className="hidden sm:inline">Tutor IA</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;