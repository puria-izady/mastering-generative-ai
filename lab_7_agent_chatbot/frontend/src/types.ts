export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
  thinking?: string;
}

export interface AgentState {
  thought: string;
  action: string;
  observation: string;
}