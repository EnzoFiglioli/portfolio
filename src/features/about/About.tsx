import { AboutContent } from "./AboutContent.tsx";
import { AboutStatsContainer } from "./AboutStatsContainer.tsx";
import { AboutImage } from "./AboutImage";

export const About = () => {
  return (
    <section
      id="about"
      aria-labelledby="hero-title"
      className="mx-auto mt-6 max-w-7xl rounded-2xl border border-[var(--border)] bg-[rgba(11,17,32,.65)] px-4 py-16 backdrop-blur-xl sm:px-6 sm:py-20 lg:px-8"
    >
      <div
        className="mx-auto w-full px-0 sm:px-6 grid gap-10 lg:grid-cols-3 items-center"
      >
        <AboutContent />
        <AboutStatsContainer />
        <AboutImage />
      </div>
    </section>
  );
};
