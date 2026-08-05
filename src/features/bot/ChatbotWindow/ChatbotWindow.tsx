// ChatbotWindow.tsx
import { useState, useEffect, useRef } from 'react';
import { ChatbotHeader } from './ChatbotHeader';
import { ChatbotMessage } from './ChatbotMessage';
import { ChatbotSuggestions } from './ChatbotSuggestions';
import { ChatbotInput } from './ChatbotInput';
import { Message } from '../types';
import { ChatbotService } from '../services/chatbotService';
import { portfolioData } from '../data/portfolioData';

interface ChatbotWindowProps {
  onClose: () => void;
}

const chatbotService = new ChatbotService(portfolioData);

export const ChatbotWindow = ({ onClose }: ChatbotWindowProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: 'bot',
      text: '¡Hola! 👋 Soy el asistente de Enzo. ¿Qué te gustaría saber?',
    },
  ]);

  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!input.trim() || isTyping) return;

    const userMessage: Message = {
      id: Date.now(),
      sender: 'user',
      text: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const response = chatbotService.generateResponse(userMessage.text);
      
      const botMessage: Message = {
        id: Date.now() + 1,
        sender: 'bot',
        text: response,
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <div
      className="
        fixed
        bottom-24
        right-6
        z-[9998]
        flex
        h-[560px]
        w-[calc(100vw-2rem)]
        max-w-[400px]
        flex-col
        overflow-hidden
        rounded-3xl
        border
        border-[var(--border)]
        bg-[rgba(11,17,32,.98)]
        shadow-2xl
        shadow-black/40
        backdrop-blur-xl
      "
    >
      <ChatbotHeader onClose={onClose} />

      {/* Messages Container con Scroll Estilizado */}
      <div
        ref={messagesContainerRef}
        className="
          flex-1
          overflow-y-auto
          overflow-x-hidden
          px-5
          py-4
          scrollbar-thin
          scrollbar-track-transparent
          scrollbar-thumb-blue-400/30
          hover:scrollbar-thumb-blue-400/50
          scroll-smooth
        "
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(96, 165, 250, 0.3) transparent',
        }}
      >
        <div className="space-y-4">
          {messages.map((message) => (
            <ChatbotMessage key={message.id} message={message} />
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="max-w-[85%] rounded-2xl rounded-bl-md border border-[var(--border)] bg-white/[0.04] px-4 py-3">
                <div className="flex gap-1">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-blue-400 [animation-delay:-0.3s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-blue-400 [animation-delay:-0.15s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-blue-400" />
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>

      <ChatbotSuggestions onSelect={setInput} />
      <ChatbotInput
        value={input}
        onChange={setInput}
        onSubmit={handleSubmit}
      />
    </div>
  );
};