type Course = {
  name: string;
  institute: string;
  year: string;
  logo: string;
};

interface CourseItemProps {
  course: Course;
}

export const CourseItem = ({ course }: CourseItemProps) => {
  return (
    <li className="flex items-center gap-3 py-4 first:pt-0 last:pb-0">
      <div
        className="
          flex size-9 shrink-0 items-center justify-center
          overflow-hidden
          rounded-lg
          border border-[var(--border)]
          bg-slate-900
        "
      >
        <img
          src={course.logo}
          alt={course.name}
        />
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-white">
          {course.name}
        </p>

        <p className="mt-0.5 text-xs text-slate-500">
          {course.institute}
        </p>
      </div>

      <span className="shrink-0 text-xs text-slate-500">
        {course.year}
      </span>
    </li>
  );
};