import { ExternalLink, GitFork, Star, CalendarDays } from "lucide-react";
import { SiGithub as Github } from "react-icons/si";

interface Repository {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
}

interface GithubProjectCardProps {
  repo: Repository;
}

export const GithubProjectCard = ({ repo }: GithubProjectCardProps) => {
  const updatedDate = new Date(repo.updated_at).toLocaleDateString("es-AR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <article
      className="
        group
        flex
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-[var(--border)]
        bg-[rgba(15,23,42,.55)]
        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-blue-500/40
        hover:bg-[rgba(15,23,42,.8)]
        hover:shadow-[0_15px_40px_rgba(0,0,0,.25)]
      "
    >
      {/* Imagen / preview */}
      <div
        className="
          relative
          flex
          h-40
          items-center
          justify-center
          overflow-hidden
          bg-gradient-to-br
          from-slate-900
          via-slate-800
          to-blue-950
        "
      >
        {/* Glow */}
        <div
          className="
            absolute
            -right-10
            -top-10
            size-32
            rounded-full
            bg-blue-500/20
            blur-3xl
          "
        />

        <Github
          size={58}
          strokeWidth={1.2}
          className="
            relative
            text-slate-500
            transition-all
            duration-300
            group-hover:scale-110
            group-hover:text-blue-400
          "
        />

        {/* GitHub */}
        <div
          className="
            absolute
            right-4
            top-4
            rounded-full
            border
            border-white/10
            bg-black/20
            p-2
            text-slate-400
          "
        >
          <Github size={16} />
        </div>
      </div>

      {/* Contenido */}
      <div className="flex flex-1 flex-col p-5">
        {/* Nombre */}
        <div className="mb-3">
          <h3
            className="
              truncate
              text-lg
              font-bold
              text-white
              transition-colors
              group-hover:text-blue-400
            "
            title={repo.name}
          >
            {repo.name}
          </h3>

          <p className="mt-1 text-xs text-slate-500">{repo.full_name}</p>
        </div>

        {/* Descripción */}
        <p className="mb-5 line-clamp-3 min-h-[60px] text-sm leading-5 text-slate-400">
          {repo.description || "Sin descripción disponible."}
        </p>

        {/* Topics */}
        {repo.topics?.length > 0 && (
          <div className="mb-5 flex flex-wrap gap-2">
            {repo.topics.slice(0, 4).map((topic) => (
              <span
                key={topic}
                className="
                  rounded-full
                  border
                  border-blue-500/20
                  bg-blue-500/5
                  px-2.5
                  py-1
                  text-[11px]
                  text-blue-300
                "
              >
                #{topic}
              </span>
            ))}
          </div>
        )}

        {/* Stats */}
        <div
          className="
            mb-5
            flex
            items-center
            gap-4
            border-t
            border-[var(--border)]
            pt-4
            text-xs
            text-slate-500
          "
        >
          {repo.language && (
            <span className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-blue-400" />
              {repo.language}
            </span>
          )}

          <span className="flex items-center gap-1.5">
            <Star size={14} />
            {repo.stargazers_count}
          </span>

          <span className="flex items-center gap-1.5">
            <GitFork size={14} />
            {repo.forks_count}
          </span>
        </div>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-xs text-slate-600">
            <CalendarDays size={13} />
            {updatedDate}
          </span>

          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              gap-2
              rounded-lg
              border
              border-[var(--border)]
              bg-white/5
              px-3
              py-2
              text-xs
              font-medium
              text-slate-300
              transition
              hover:border-blue-500/40
              hover:bg-blue-500/10
              hover:text-blue-400
            "
          >
            GitHub
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </article>
  );
};
