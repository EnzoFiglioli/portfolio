import { Send } from 'lucide-react';

interface ChatbotInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const ChatbotInput = ({ value, onChange, onSubmit }: ChatbotInputProps) => {
  return (
    <form
      onSubmit={onSubmit}
      className="
        flex
        shrink-0
        items-center
        gap-2
        border-t
        border-[var(--border)]
        px-4
        py-3
        bg-black/10
      "
    >
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Escribí una pregunta..."
        className="
          min-w-0
          flex-1
          rounded-xl
          border
          border-[var(--border)]
          bg-black/20
          px-4
          py-2.5
          text-sm
          text-white
          outline-none
          placeholder:text-zinc-600
          transition-all
          duration-200
          focus:border-blue-400
          focus:ring-1
          focus:ring-blue-400/20
          hover:border-zinc-600
        "
      />

      <button
        type="submit"
        aria-label="Enviar mensaje"
        disabled={!value.trim()}
        className="
          flex
          size-10
          shrink-0
          items-center
          justify-center
          rounded-xl
          bg-blue-500
          text-white
          transition-all
          duration-200
          hover:bg-blue-400
          hover:scale-105
          active:scale-95
          disabled:cursor-not-allowed
          disabled:opacity-40
          disabled:hover:scale-100
          shadow-lg
          shadow-blue-500/20
        "
      >
        <Send size={17} />
      </button>
    </form>
  );
};