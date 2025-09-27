import React from 'react';
import { Brain } from 'lucide-react';

export const TypingIndicator: React.FC = () => {
  return (
    <div className="flex gap-4 animate-fade-in">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-dark-grey via-gray-600 to-gray-700 flex items-center justify-center shadow-soft">
        <Brain size={18} className="text-white" />
      </div>
      
      <div className="bg-white rounded-2xl rounded-bl-md px-5 py-4 shadow-soft border border-border-grey">
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-hermes-orange rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-dark-grey rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 bg-text-grey rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
};