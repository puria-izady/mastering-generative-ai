import React, { useState } from 'react';
import { Brain, User, ChevronDown, ChevronUp } from 'lucide-react';
import { Message } from '../types';

interface MessageBubbleProps {
  message: Message;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const [showThinking, setShowThinking] = useState(false);
  const isUser = message.role === 'user';

  return (
    <div className={`flex gap-4 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
      <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center shadow-soft ${
        isUser ? 'bg-gradient-to-br from-hermes-orange via-orange-400 to-orange-500' : 'bg-gradient-to-br from-dark-grey via-gray-600 to-gray-700'
      }`}>
        {isUser ? <User size={18} className="text-white" /> : <Brain size={18} className="text-white" />}
      </div>
      
      <div className={`max-w-[75%] ${isUser ? 'items-end' : 'items-start'} flex flex-col`}>
        <div className={`rounded-2xl px-5 py-3 shadow-soft ${
          isUser 
            ? 'bg-gradient-to-r from-hermes-orange to-orange-400 text-white rounded-br-md' 
            : 'bg-white text-dark-grey rounded-bl-md border border-border-grey'
        }`}>
          <p className="text-sm leading-relaxed">{message.content}</p>
        </div>
        
        {message.thinking && !isUser && (
          <button
            onClick={() => setShowThinking(!showThinking)}
            className="flex items-center gap-2 mt-3 text-xs text-text-grey hover:text-hermes-orange transition-all duration-200 bg-white px-3 py-1 rounded-full shadow-soft hover:shadow-medium"
          >
            <Brain size={14} />
            ReAct Thinking
            {showThinking ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
        )}
        
        {showThinking && message.thinking && (
          <div className="mt-3 p-4 bg-accent-grey rounded-xl text-xs text-dark-grey font-mono whitespace-pre-wrap shadow-soft border border-border-grey">
            {message.thinking}
          </div>
        )}
        
        <span className="text-xs text-text-grey mt-2 opacity-70">
          {message.timestamp.toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
};