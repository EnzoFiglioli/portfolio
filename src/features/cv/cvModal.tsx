import { Download, ExternalLink, X } from "lucide-react";

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal = ({
  isOpen,
  onClose,
}: CvModalProps) => {
  if (!isOpen) return null;

  const cvUrl = "/cv.pdf";

  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        bg-black/80
        p-4
        backdrop-blur-sm
      "
      onClick={onClose}
    >
      <div
        className="
          relative
          flex
          h-[90vh]
          w-full
          max-w-5xl
          flex-col
          overflow-hidden
          rounded-3xl
          border
          border-[var(--border)]
          bg-[rgba(11,17,32,.98)]
          shadow-2xl
        "
        onClick={(event) => event.stopPropagation()}
      >
        {/* Header */}
        <header
          className="
            flex
            shrink-0
            items-center
            justify-between
            border-b
            border-[var(--border)]
            px-6
            py-4
          "
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
              Portfolio
            </p>

            <h2 className="mt-1 text-xl font-bold text-white">
              Curriculum Vitae
            </h2>
          </div>

          <div className="flex items-center gap-2">
            {/* Abrir en otra pestaña */}
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir CV en otra pestaña"
              className="
                flex
                size-10
                items-center
                justify-center
                rounded-full
                border
                border-[var(--border)]
                bg-white/5
                text-zinc-400
                transition
                hover:bg-white/10
                hover:text-white
              "
            >
              <ExternalLink size={18} />
            </a>

            {/* Cerrar */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar CV"
              className="
                flex
                size-10
                items-center
                justify-center
                rounded-full
                border
                border-[var(--border)]
                bg-white/5
                text-zinc-400
                transition
                hover:bg-white/10
                hover:text-white
              "
            >
              <X size={20} />
            </button>
          </div>
        </header>

        {/* PDF */}
        <div className="min-h-0 flex-1 bg-zinc-900">
          <iframe
            src={cvUrl}
            title="Curriculum Vitae de Enzo Figlioli"
            className="h-full w-full"
          />
        </div>

        {/* Footer */}
        <footer
          className="
            flex
            shrink-0
            justify-end
            border-t
            border-[var(--border)]
            px-6
            py-4
          "
        >
          <a
            href={cvUrl}
            download
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-blue-500
              px-5
              py-2.5
              text-sm
              font-semibold
              text-white
              transition
              hover:bg-blue-400
            "
          >
            <Download size={18} />
            Descargar CV
          </a>
        </footer>
      </div>
    </div>
  );
};