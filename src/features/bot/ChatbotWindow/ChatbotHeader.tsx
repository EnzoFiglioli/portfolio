import { Bot, X } from 'lucide-react';

interface ChatbotHeaderProps {
  onClose: () => void;
}

export const ChatbotHeader = ({ onClose }: ChatbotHeaderProps) => {
  return (
    <header
      className="
        flex
        shrink-0
        items-center
        justify-between
        border-b
        border-[var(--border)]
        px-4
        py-3
        bg-black/20
      "
    >
      <div className="flex items-center gap-2.5">
        <div
          className="
            flex
            size-8
            items-center
            justify-center
            rounded-lg
            bg-blue-500/10
            text-blue-400
          "
        >
          <Bot size={18} />
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white leading-none">
            Enzo Bot
          </h3>

          <div className="mt-1 flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] text-zinc-500">
              Asistente del portfolio
            </span>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={onClose}
        aria-label="Cerrar chatbot"
        className="
          flex
          size-8
          items-center
          justify-center
          rounded-full
          text-zinc-500
          transition-all
          duration-200
          hover:bg-white/5
          hover:text-white
          hover:scale-110
          active:scale-95
        "
      >
        <X size={17} />
      </button>
    </header>
  );
};