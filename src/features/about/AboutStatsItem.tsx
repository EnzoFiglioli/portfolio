type Props = {
  item: string[];
};

export const AboutStatsItem = ({ item }: Props) => {
  return (
    <article
      className="
        group

        flex
        min-h-40
        flex-col
        items-center
        justify-center
        gap-3

        rounded-2xl
        border
        border-[var(--border)]

        bg-[rgba(255,255,255,.02)]

        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-blue-500/50
        hover:bg-[rgba(59,130,246,.06)]
        hover:shadow-[0_0_25px_rgba(59,130,246,.15)]
      "
    >
      <p
        className="
          text-5xl
          font-extrabold
          text-white
          transition-transform
          duration-300

          group-hover:scale-110
        "
      >
        {item[0]}
      </p>

      <p
        className="
          max-w-[140px]
          text-center
          text-sm
          text-zinc-400

          transition-colors
          duration-300

          group-hover:text-zinc-200
        "
      >
        {item[1]}
      </p>
    </article>
  );
};
