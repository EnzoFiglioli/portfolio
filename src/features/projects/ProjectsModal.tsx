import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { getRepositories } from "@/services/github.service";
import { GithubProjectCard } from "./GithubProjectCard";

type Repository = Awaited<ReturnType<typeof getRepositories>>[number];

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectsModal = ({
  isOpen,
  onClose,
}: ProjectsModalProps) => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [selectedTechnology, setSelectedTechnology] = useState("Todas");

  useEffect(() => {
    getRepositories("EnzoFiglioli")
      .then(setRepositories)
      .catch(console.error);
  }, []);

  if (!isOpen) return null;

  const technologies = [
    "Todas",
    ...new Set(
      repositories
        .map((repo) => repo.language)
        .filter((language): language is string => language !== null)
    ),
  ];

  const filteredRepositories =
    selectedTechnology === "Todas"
      ? repositories
      : repositories.filter(
          (repo) => repo.language === selectedTechnology
        );

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
          max-h-[85vh]
          w-full
          max-w-5xl
          overflow-y-auto
          rounded-3xl
          border
          border-[var(--border)]
          bg-[rgba(11,17,32,.95)]
          p-8
          shadow-2xl
        "
        onClick={(event) => event.stopPropagation()}
      >
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Portfolio
            </p>

            <h2 className="mt-2 text-3xl font-bold text-white">
              Mis proyectos
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar proyectos"
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

        {/* Filtro */}
        <div className="mb-8 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <button
              key={technology}
              type="button"
              onClick={() => setSelectedTechnology(technology)}
              className={`
                rounded-full
                border
                px-4
                py-2
                text-sm
                font-medium
                transition
                ${
                  selectedTechnology === technology
                    ? "border-blue-400 bg-blue-500/20 text-blue-300"
                    : "border-[var(--border)] bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white"
                }
              `}
            >
              {technology}
            </button>
          ))}
        </div>

        {/* Proyectos */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredRepositories.map((repo) => (
            <GithubProjectCard
              key={repo.id}
              repo={repo}
            />
          ))}
        </div>

        {/* Sin resultados */}
        {filteredRepositories.length === 0 && (
          <div className="py-12 text-center text-zinc-400">
            No hay proyectos con esta tecnología.
          </div>
        )}
      </div>
    </div>
  );
};
