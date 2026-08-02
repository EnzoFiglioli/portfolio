import { HeroContent } from "./HeroContent";
import HeroImage from "./HeroImage";

export const Hero = () => {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="min-h-screen flex items-center overflow-hidden py-24 sm:py-28"
    >
      <div
        className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2 lg:gap-24 items-center"
      >
        <HeroContent />

        <HeroImage />
      </div>
    </section>
  );
};