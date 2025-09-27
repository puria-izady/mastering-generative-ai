import React, { useState, KeyboardEvent } from 'react';
import { Send, Loader2 } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading }) => {
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    if (input.trim() && !isLoading) {
      onSendMessage(input.trim());
      setInput('');
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="border-t border-border-grey bg-white/80 backdrop-blur-sm px-8 py-6">
      <div className="max-w-5xl mx-auto">
        <div className="relative">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything..."
            className="w-full resize-none border border-border-grey rounded-2xl px-6 py-5 pr-20 focus:outline-none focus:ring-2 focus:ring-hermes-orange focus:border-hermes-orange bg-white text-dark-grey placeholder-text-grey shadow-soft transition-all duration-200 text-base leading-relaxed"
            rows={3}
            style={{ minHeight: '80px', maxHeight: '160px' }}
            disabled={isLoading}
          />
          <button
            onClick={handleSubmit}
            disabled={!input.trim() || isLoading}
            className="absolute bottom-4 right-4 bg-gradient-to-r from-hermes-orange to-orange-400 hover:from-orange-400 hover:to-hermes-orange disabled:from-gray-300 disabled:to-gray-400 text-white p-3 rounded-xl transition-all duration-200 shadow-soft hover:shadow-medium disabled:cursor-not-allowed"
          >
            {isLoading ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
          </button>
        </div>
      </div>
    </div>
  );
};