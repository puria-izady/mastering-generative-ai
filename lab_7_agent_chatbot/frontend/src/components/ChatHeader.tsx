import React from 'react';
import { Brain, Trash2 } from 'lucide-react';

interface ChatHeaderProps {
  onClearChat: () => void;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({ onClearChat }) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm border-b border-border-grey px-8 py-5 flex items-center justify-between shadow-soft">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gradient-to-br from-hermes-orange via-orange-400 to-orange-500 rounded-xl flex items-center justify-center shadow-medium">
          <Brain size={24} className="text-white" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-dark-grey">Agentic Assistant</h1>
          <p className="text-sm text-text-grey font-medium">ReAct Pattern AI Agent</p>
        </div>
      </div>
      
      <button
        onClick={onClearChat}
        className="p-3 text-text-grey hover:text-hermes-orange hover:bg-accent-grey rounded-xl transition-all duration-200 hover:shadow-soft"
        title="Clear conversation"
      >
        <Trash2 size={20} />
      </button>
    </div>
  );
};