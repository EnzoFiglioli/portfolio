import { hero } from "./hero.data";

const HeroImage = () => {
  return (
    <figure
      className="relative flex h-[420px] w-full items-end justify-center overflow-hidden rounded-[2rem] sm:h-[520px] md:h-[600px] lg:h-[650px]"
    >
      {/* Glow principal */}
      <div
        className="
          absolute
          bottom-10
          left-1/2
          h-[360px]
          w-[360px]
          -translate-x-1/2
          rounded-full
          bg-gradient-to-tr
          from-blue-600/30
          via-violet-500/20
          to-transparent
          blur-3xl
          sm:h-[420px]
          sm:w-[420px]
          md:h-[520px]
          md:w-[520px]
          lg:h-[600px]
          lg:w-[600px]
        "
      />

      {/* Grid */}
      <div
        className="
          absolute
          inset-0
          opacity-30
          bg-[linear-gradient(rgba(59,130,246,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,.08)_1px,transparent_1px)]
          bg-[size:36px_36px]
        "
      />

      {/* Partículas */}
      <span className="absolute left-20 top-16 h-2 w-2 animate-pulse rounded-full bg-blue-400 blur-sm" />
      <span className="absolute right-10 top-40 h-3 w-3 animate-pulse rounded-full bg-violet-500 blur-sm" />
      <span className="absolute bottom-40 left-10 h-2 w-2 animate-pulse rounded-full bg-cyan-400 blur-sm" />
      <span className="absolute bottom-20 right-24 h-2 w-2 animate-pulse rounded-full bg-blue-500 blur-sm" />

      {/* Imagen */}
      <img
        src={hero.image}
        alt={hero.imageAlt}
        className="
          relative
          z-10

          h-full
          w-auto
          max-w-[900px]

          object-contain

          select-none
          pointer-events-none
        "
      />
    </figure>
  );
};

export default HeroImage;
