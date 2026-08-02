import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface Certificate {
  name: string;
  institute: string;
  year: string;
  cover: string;
  description: string;
}

interface CertificateModalProps {
  certificates: Certificate[];
  selectedIndex: number;
  onChange: (index: number) => void;
  onClose: () => void;
}

export const CertificateModal = ({
  certificates,
  selectedIndex,
  onChange,
  onClose,
}: CertificateModalProps) => {
  const certificate = certificates[selectedIndex];

  const previous = () => {
    onChange(
      selectedIndex === 0
        ? certificates.length - 1
        : selectedIndex - 1,
    );
  };

  const next = () => {
    onChange(
      selectedIndex === certificates.length - 1
        ? 0
        : selectedIndex + 1,
    );
  };

  return createPortal(
    <div
      className="
        fixed
        inset-0
        z-[9999]
        flex
        min-h-screen
        items-center
        justify-center
        bg-black/80
        p-6
        backdrop-blur-sm
      "
      onClick={onClose}
    >
      <div
        className="
          relative
          flex
          max-h-[90vh]
          max-w-6xl
          items-center
          gap-4
        "
        onClick={(event) => event.stopPropagation()}
      >
        {/* Cerrar */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="
            absolute
            -right-3
            -top-3
            z-20
            flex
            size-9
            items-center
            justify-center
            rounded-full
            border
            border-[var(--border)]
            bg-slate-900
            text-slate-300
            transition
            hover:bg-slate-800
            hover:text-white
          "
        >
          <X size={18} />
        </button>

        {/* Anterior */}
        {certificates.length > 1 && (
          <button
            type="button"
            onClick={previous}
            aria-label="Certificado anterior"
            className="
              flex
              size-10
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-[var(--border)]
              bg-slate-900/90
              text-slate-300
              transition
              hover:bg-slate-800
              hover:text-white
            "
          >
            <ChevronLeft />
          </button>
        )}

        {/* Certificado */}
        <div className="max-w-5xl">
          <img
            src={certificate.cover}
            alt={`Certificado ${certificate.name}`}
            className="
              max-h-[80vh]
              max-w-full
              rounded-xl
              border
              border-[var(--border)]
              object-contain
              shadow-2xl
            "
          />

          <div className="mt-4 text-center">
            <h3 className="font-semibold text-white">
              {certificate.name}
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              {certificate.institute} · {certificate.year}
            </p>

            <p className="mt-2 text-xs text-slate-500">
              {selectedIndex + 1} / {certificates.length}
            </p>
          </div>
        </div>

        {/* Siguiente */}
        {certificates.length > 1 && (
          <button
            type="button"
            onClick={next}
            aria-label="Siguiente certificado"
            className="
              flex
              size-10
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-[var(--border)]
              bg-slate-900/90
              text-slate-300
              transition
              hover:bg-slate-800
              hover:text-white
            "
          >
            <ChevronRight />
          </button>
        )}
      </div>
    </div>,
    document.body,
  );
};