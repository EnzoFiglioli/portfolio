import { hero } from "./hero.data";

const HeroImage = () => {
  return (
    <figure
      className="
        relative
        flex
        h-[420px]
        sm:h-[520px]
        md:h-[620px]
        lg:h-[700px]
        w-full
        items-center
        justify-center
      "
    >
      {/* Glow grande */}
      <div
        className="
          absolute
          left-1/2
          bottom-0
          -translate-x-1/2

          h-[520px]
          w-[520px]

          rounded-full
          bg-gradient-to-tr
          from-blue-600/40
          via-violet-500/25
          to-transparent

          blur-[120px]

          sm:h-[620px]
          sm:w-[620px]

          lg:h-[760px]
          lg:w-[760px]
        "
      />

      {/* Grid que desaparece */}
      <div
        className="
          absolute
          inset-0

          bg-[linear-gradient(rgba(59,130,246,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,.08)_1px,transparent_1px)]
          bg-[size:36px_36px]

          [mask-image:radial-gradient(circle_at_center,black_35%,transparent_95%)]
          opacity-40
        "
      />

      {/* Partículas */}
      <span className="absolute left-16 top-16 h-2 w-2 rounded-full bg-blue-400 blur-sm animate-pulse" />
      <span className="absolute right-12 top-36 h-3 w-3 rounded-full bg-violet-500 blur-sm animate-pulse" />
      <span className="absolute left-12 bottom-32 h-2 w-2 rounded-full bg-cyan-400 blur-sm animate-pulse" />
      <span className="absolute right-20 bottom-20 h-2 w-2 rounded-full bg-blue-500 blur-sm animate-pulse" />

      {/* Imagen */}
      <img
        src={hero.image}
        alt={hero.imageAlt}
        className="
          relative
          z-10

          h-auto
          w-full
          max-w-[720px]

          object-contain

          lg:-translate-y-6

          select-none
          pointer-events-none
        "
      />
    </figure>
  );
};

export default HeroImage;
