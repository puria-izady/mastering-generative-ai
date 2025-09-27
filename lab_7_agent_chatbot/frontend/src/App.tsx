import React, { useEffect, useRef } from 'react';
import { Brain } from 'lucide-react';
import { ChatHeader } from './components/ChatHeader';
import { MessageBubble } from './components/MessageBubble';
import { ChatInput } from './components/ChatInput';
import { TypingIndicator } from './components/TypingIndicator';
import { useChat } from './hooks/useChat';

function App() {
  const { messages, isLoading, sendMessage, clearMessages } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  return (
    <div className="h-screen bg-gradient-to-br from-light-grey to-accent-grey flex flex-col">
      <ChatHeader onClearChat={clearMessages} />
      
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.length === 0 && (
          <div className="text-center text-text-grey mt-32 animate-fade-in">
            <div className="w-20 h-20 bg-gradient-to-br from-hermes-orange via-orange-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-soft animate-glow">
              <Brain size={32} className="text-white" />
            </div>
            <h2 className="text-2xl font-semibold mb-3 text-dark-grey">Welcome to Agentic Assistant</h2>
            <p className="text-text-grey text-lg max-w-md mx-auto leading-relaxed">I'm an AI agent that uses the ReAct pattern to reason and act. Ask me anything!</p>
            <div className="mt-8 flex justify-center space-x-4">
              <div className="px-4 py-2 bg-white rounded-full shadow-soft text-sm text-text-grey">💡 Ask questions</div>
              <div className="px-4 py-2 bg-white rounded-full shadow-soft text-sm text-text-grey">🔍 Get insights</div>
              <div className="px-4 py-2 bg-white rounded-full shadow-soft text-sm text-text-grey">⚡ Take action</div>
            </div>
          </div>
        )}
        
        {messages.map((message, index) => (
          <div key={message.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
            <MessageBubble message={message} />
          </div>
        ))}
        
        {isLoading && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>
      
      <ChatInput onSendMessage={sendMessage} isLoading={isLoading} />
    </div>
  );
}

export default App;