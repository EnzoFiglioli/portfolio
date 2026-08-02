interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const SectionContainer = ({
  children,
  className = "",
  id = "",
}: SectionContainerProps) => {
  return (
    <section
      id={id}
      className={`
        mx-auto
        mt-6
        flex
        max-w-7xl
        flex-col
        items-center
        justify-between
        rounded-2xl
        border
        border-[var(--border)]
        bg-[rgba(11,17,32,.65)]
        px-4
        sm:px-6
        lg:px-8
        backdrop-blur-xl
        ${className}
      `}
    >
      {children}
    </section>
  );
};
