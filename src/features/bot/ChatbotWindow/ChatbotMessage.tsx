import { Message } from '../types';

interface ChatbotMessageProps {
  message: Message;
}

export const ChatbotMessage = ({ message }: ChatbotMessageProps) => {
  const formattedText = message.text.split('\n').map((line, i) => (
    <span key={i}>
      {line}
      {i < message.text.split('\n').length - 1 && <br />}
    </span>
  ));

  return (
    <div
      className={`flex ${
        message.sender === 'user' ? 'justify-end' : 'justify-start'
      } animate-in fade-in slide-in-from-bottom-2 duration-300`}
    >
      <div
        className={`
          max-w-[85%]
          rounded-2xl
          px-4
          py-2.5
          text-sm
          leading-relaxed
          shadow-sm
          ${
            message.sender === 'user'
              ? 'rounded-br-md bg-blue-500 text-white shadow-blue-500/10'
              : 'rounded-bl-md border border-[var(--border)] bg-white/[0.04] text-zinc-300'
          }
        `}
      >
        {formattedText}
      </div>
    </div>
  );
};