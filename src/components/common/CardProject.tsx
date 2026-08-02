import { ArrowBigRightDash } from "lucide-react";

interface Card {
  cover: string;
  title: string;
  stack: string[];
  deploy: string;
  github: string;
  alt: string;
  detail: string;
}

export const CardProject = (props: Card) => {
  return (
    <article
      className="
    overflow-hidden
    rounded-3xl
    border
    border-[var(--border)]
    bg-[var(--background-secondary)]
    transition-all
    duration-300
    hover:-translate-y-2
    hover:border-blue-500/40
  "
    >
      <figure className="aspect-video overflow-hidden">
        <img
          src={props.cover}
          alt={props.alt}
          className="
        h-full
        w-full
        object-cover
        transition-transform
        duration-500
        hover:scale-105
      "
        />
      </figure>

      <div className="flex flex-col gap-6 p-6">
        <header className="flex items-center justify-between">
          <h3 className="text-2xl font-bold">{props.title}</h3>

          <ArrowBigRightDash className="text-blue-400" />
        </header>

        <p className="text-zinc-400 leading-7">{props.detail}</p>

        <ul className="flex flex-wrap gap-2">
          {props.stack.map((tech) => (
            <li
              key={tech}
              className="
            rounded-full
            border
            border-blue-500/20
            bg-blue-500/10
            px-3
            py-1
            text-sm
            text-blue-300
          "
            >
              {tech}
            </li>
          ))}
        </ul>

        <footer className="mt-auto flex gap-4">
          <a
            href={props.deploy}
            target="_blank"
            rel="noreferrer"
            className="
          flex-1
          rounded-xl
          bg-blue-500
          px-4
          py-3
          text-center
          font-medium
          text-white
        "
          >
            Ver Demo
          </a>

          <a
            href={props.github}
            target="_blank"
            rel="noreferrer"
            className="
          flex-1
          rounded-xl
          border
          border-[var(--border)]
          px-4
          py-3
          text-center
        "
          >
            GitHub
          </a>
        </footer>
      </div>
    </article>
  );
};
