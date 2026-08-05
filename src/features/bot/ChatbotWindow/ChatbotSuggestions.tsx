import { ChatbotSuggestion } from '../types';

const SUGGESTIONS: ChatbotSuggestion[] = [
  { id: 'about', label: '👤 Sobre Enzo', value: '¿Quién es Enzo?' },
  { id: 'tech', label: '🛠️ Tecnologías', value: '¿Qué tecnologías usa?' },
  { id: 'projects', label: '📁 Proyectos', value: '¿Qué proyectos tiene?' },
  { id: 'experience', label: '💼 Experiencia', value: '¿Qué experiencia tiene?' },
  { id: 'education', label: '🎓 Educación', value: '¿Qué estudió?' },
  { id: 'cv', label: '📄 CV', value: '¿Dónde puedo ver el CV?' },
  { id: 'contact', label: '📫 Contacto', value: '¿Cómo contacto con Enzo?' },
];

interface ChatbotSuggestionsProps {
  onSelect: (value: string) => void;
}

export const ChatbotSuggestions = ({ onSelect }: ChatbotSuggestionsProps) => {
  return (
    <div
      className="
        flex
        gap-1.5
        overflow-x-auto
        overflow-y-hidden
        px-5
        py-2.5
        scrollbar-thin
        scrollbar-track-transparent
        scrollbar-thumb-blue-400/20
        hover:scrollbar-thumb-blue-400/40
        border-t
        border-[var(--border)]
        bg-black/5
      "
      style={{
        scrollbarWidth: 'thin',
        scrollbarColor: 'rgba(96, 165, 250, 0.2) transparent',
      }}
    >
      {SUGGESTIONS.map((suggestion) => (
        <button
          key={suggestion.id}
          type="button"
          onClick={() => onSelect(suggestion.value)}
          className="
            shrink-0
            rounded-full
            border
            border-[var(--border)]
            bg-white/[0.03]
            px-3.5
            py-1.5
            text-xs
            font-medium
            text-zinc-400
            transition-all
            duration-200
            hover:border-blue-400/40
            hover:bg-blue-500/10
            hover:text-blue-300
            hover:scale-105
            active:scale-95
            whitespace-nowrap
          "
        >
          {suggestion.label}
        </button>
      ))}
    </div>
  );
};