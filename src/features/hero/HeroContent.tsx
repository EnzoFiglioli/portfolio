import { hero } from "./hero.data";
import { HeroButtons } from "./HeroButtons";

export const HeroContent = () => {
  return (
    <div
      className="
    flex
    flex-col
    justify-center
    gap-8
    max-w-2xl"
    >
      <p
        className="
      text-sm
      uppercase
      tracking-[0.25em]
      text-blue-400
      font-semibold
    "
      >
        {hero.subtitle}
      </p>

      <h1
        className="
      text-5xl
      md:text-7xl
      font-extrabold
      leading-tight
      tracking-tight
    "
      >
        Hola, soy <br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500">
          {hero.name}
        </span>
        <span className="text-white rounded">.</span>
      </h1>

      <p
        className="
      text-lg
      text-zinc-400
      leading-8
      max-w-xl
    "
      >
        {hero.description}
      </p>

      <HeroButtons />

      <p
        className="
        text-sm"
      >
        <span className="text-green-500">●</span> {hero.badge}
      </p>
    </div>
  );
};
