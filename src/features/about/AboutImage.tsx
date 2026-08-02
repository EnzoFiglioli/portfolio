import { about } from "./about.data"

export const AboutImage = () => {
  return (
    <figure className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[rgba(15,23,42,.45)]">
      <img
        src={about.image}
        alt="Computer and coffee cup"
        className="h-full w-full object-cover"
      />
    </figure>
  );
}
