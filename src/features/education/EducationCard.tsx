import { GraduationCap } from "lucide-react";
import { education } from "./education.data";

export const EducationCard = () => {
  const { education: data } = education.cards;

  return (
    <article
      className="
        rounded-xl
        border border-[var(--border)]
        bg-[rgba(15,23,42,.45)]
        p-6
        transition-colors
        hover:border-blue-500/40
      "
    >
      <div className="mb-6 flex items-center gap-3">
        <div
          className="
            flex size-9 items-center justify-center
            rounded-lg
            bg-blue-500/10
            text-blue-400
          "
        >
          <GraduationCap size={19} />
        </div>

        <span className="text-sm font-medium text-white">{data.overline}</span>
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">{data.title}</h3>

      <p className="text-sm text-slate-400">
        {data.university} · {data.state}
      </p>

      <p className="mt-4 text-sm leading-6 text-slate-400">
        {data.description}
      </p>

      <span
        className="
          mt-6 inline-flex
          rounded-full
          border border-blue-500/40
          px-3 py-1
          text-xs
          text-blue-400
        "
      >
        {data.period}
      </span>
    </article>
  );
};
