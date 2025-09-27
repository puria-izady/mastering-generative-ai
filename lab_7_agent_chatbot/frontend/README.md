# Agentic Chatbot Frontend

A modern TypeScript React application implementing a ReAct pattern chatbot interface with state-of-the-art design.

## Features

- **ReAct Pattern**: Shows agent thinking process (Reasoning, Acting, Observing)
- **Modern UI**: Clean, responsive design with Tailwind CSS
- **TypeScript**: Full type safety and developer experience
- **Real-time Chat**: Smooth messaging interface with typing indicators
- **Expandable Thinking**: Click to view agent's reasoning process

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Architecture

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Custom hooks** for state management

## Components

- `App.tsx` - Main application component
- `ChatHeader.tsx` - Header with branding and controls
- `MessageBubble.tsx` - Individual message display with ReAct thinking
- `ChatInput.tsx` - Message input with send functionality
- `TypingIndicator.tsx` - Loading state indicator
- `useChat.ts` - Custom hook for chat logic

The application demonstrates a modern approach to building conversational AI interfaces with emphasis on transparency in agent reasoning.