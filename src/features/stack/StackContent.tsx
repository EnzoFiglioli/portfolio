import { stack } from "./stack.data";

const technologies = [...stack.technology, ...stack.technology];

const StackContent = () => {
  return (
    <>
      <div className="mb-12 text-center p-4">
        <p
          className="
            text-sm
            font-semibold
            uppercase
            tracking-[0.25em]
            text-blue-400
          "
        >
          {stack.overline}
        </p>

        <h2
          className="
            mt-3
            text-3xl
            font-extrabold
            tracking-tight
            md:text-5xl
          "
        >
          {stack.title}
        </h2>
      </div>

      <div className="relative overflow-hidden">
        <ul className="animate-marquee flex w-max gap-6">
          {technologies.map((tech, index) => (
            <li
              key={`${tech.name}-${index}`}
              className="
                group
                flex
                w-40
                shrink-0
                flex-col
                items-center
                justify-center
                gap-4

                rounded-2xl
                border
                border-[var(--border)]

                bg-[rgba(255,255,255,.02)]

                p-6

                transition-all
                duration-300

                hover:-translate-y-2
                hover:border-blue-500/50
                hover:bg-[rgba(59,130,246,.08)]
                hover:shadow-[0_0_30px_rgba(59,130,246,.15)]
              "
            >
              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center

                  rounded-2xl
                  bg-white/5

                  transition-transform
                  duration-300

                  group-hover:scale-110
                "
              >
                <img
                  src={tech.image}
                  alt={tech.name}
                  className="h-10 w-10 object-contain"
                />
              </div>

              <span
                className="
                  text-sm
                  font-medium
                  text-zinc-300

                  transition-colors
                  duration-300

                  group-hover:text-white
                "
              >
                {tech.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default StackContent;
