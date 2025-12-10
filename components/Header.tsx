import React from 'react';
import { BookOpen, MessageSquare, PenTool } from 'lucide-react';
import { ViewState } from '../types';

interface HeaderProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

const NAV_ITEMS = [
  { view: ViewState.LEARN, label: 'Aprender', icon: BookOpen },
  { view: ViewState.TOOLS, label: 'Herramientas', icon: PenTool },
  { view: ViewState.CHAT, label: 'Tutor IA', icon: MessageSquare },
];

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
            {NAV_ITEMS.map(({ view, label, icon: Icon }) => (
              <button 
                key={view}
                onClick={() => onNavigate(view)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
                  currentView === view ? 'bg-teal-800 text-white' : 'text-teal-100 hover:bg-teal-600'
                }`}
              >
                <Icon size={18} />
                <span className="hidden sm:inline">{label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;