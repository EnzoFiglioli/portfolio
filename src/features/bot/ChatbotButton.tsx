import { MessageCircle } from "lucide-react";

interface ChatbotButtonProps {
  onClick: () => void;
}

export const ChatbotButton = ({ onClick }: ChatbotButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Abrir asistente"
      className="
        fixed
        bottom-6
        right-6
        z-40
        flex
        size-14
        items-center
        justify-center
        rounded-full
        border
        border-blue-400/30
        bg-slate-900
        text-blue-400
        shadow-lg
        shadow-blue-500/10
        transition-all
        duration-300
        hover:scale-105
        hover:border-blue-400/60
        hover:bg-slate-800
        hover:text-blue-300
      "
    >
      <MessageCircle size={24} />
    </button>
  );
};