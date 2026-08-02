import { SquareArrowOutUpRight } from "lucide-react";
import { project } from "./project.data";
import { SiGithub } from "react-icons/si";

const ProjectContainer = () => {
  return (
    <aside className="mt-16">
      <ul className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {project.projects.map((project) => (
          <li
            key={project.id}
            className="
              flex
              flex-col
              overflow-hidden
              rounded-3xl
              border
              border-[var(--border)]
              bg-[var(--background-secondary)]
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-blue-500/40
              hover:shadow-2xl
            "
          >
            <picture className="block aspect-video overflow-hidden">
              <img
                src={project.cover}
                alt={project.name}
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  hover:scale-105
                "
              />
            </picture>

            <div className="flex flex-1 flex-col p-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold">{project.name}</h3>

                <p className="mt-3 leading-7 text-gray-400">
                  {project.description}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
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
              </div>

              <footer className="mt-8 flex gap-3">
                <a
                  href={project.deploy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex-1
                    rounded-xl
                    bg-blue-500
                    px-4
                    py-3
                    text-center
                    font-medium
                    text-white
                    transition-colors
                    hover:bg-blue-600
                    relative
                    flex
                    items-center
                    justify-center
                  "
                >
                  Ver Demo
                  <SquareArrowOutUpRight className="absolute right-3" />
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  relative
                    flex
                    justify-center
                    items-center
                    flex-1
                    rounded-xl
                    border
                    border-[var(--border)]
                    px-4
                    py-3
                    text-center
                    font-medium
                    transition-colors
                    hover:bg-white/5
                  "
                >
                  <span>GitHub</span>
                  <SiGithub className="absolute right-8" />
                </a>
              </footer>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default ProjectContainer;
