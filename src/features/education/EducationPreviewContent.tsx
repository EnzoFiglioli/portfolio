import { useState } from "react";
import { Star } from "lucide-react";
import { education } from "./education.data";
import { CertificateModal } from "./CertificateModal";

export const EducationPreviewContent = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const certificates = education.certifications.all;
  const certification = certificates[selectedIndex];

  return (
    <>
      <article
        className="
          w-full
          rounded-xl
          border border-[var(--border)]
          bg-[rgba(15,23,42,.45)]
          p-6
          transition-colors
          hover:border-blue-500/40
        "
      >
        <div className="mb-5 flex items-center gap-3">
          <Star
            size={18}
            className="fill-blue-400 text-blue-400"
          />

          <h3 className="text-sm font-medium text-white">
            {education.certifications.title}
          </h3>
        </div>

        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="
            mb-5
            block
            w-full
            cursor-zoom-in
            overflow-hidden
            rounded-lg
            border border-[var(--border)]
            bg-slate-950
          "
        >
          <img
            src={certification.cover}
            alt={`Certificado de ${certification.name}`}
            className="
              aspect-[4/3]
              w-full
              object-cover
              transition-transform
              duration-300
              hover:scale-[1.02]
            "
          />
        </button>

        <h4 className="text-lg font-semibold text-white">
          {certification.name}
        </h4>

        <p className="mt-1 text-sm text-blue-400">
          {certification.institute}
        </p>

        <p className="mt-3 text-sm leading-6 text-slate-400">
          {certification.description}
        </p>

        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="
            mt-5
            text-sm
            text-blue-400
            transition-colors
            hover:text-blue-300
          "
        >
          Ver certificado →
        </button>
      </article>

      {isModalOpen && (
        <CertificateModal
          certificates={certificates}
          selectedIndex={selectedIndex}
          onChange={setSelectedIndex}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};