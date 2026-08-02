import { about } from "./about.data";
import { AboutStatsItem } from "./AboutStatsItem";

export const AboutStatsContainer = () => {
  return (
    <section
      className="grid grid-cols-1 gap-5 rounded-3xl border border-[var(--border)] bg-[rgba(11,17,32,.65)] backdrop-blur-xl p-5 sm:grid-cols-2"
    >
      {about.stats.map((item, index) => (
        <AboutStatsItem key={index} item={item} />
      ))}
    </section>
  );
};
