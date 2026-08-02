import { Award } from "lucide-react";
import { education } from "./education.data";
import { CourseItem } from "./CourseItem";

export const CoursesCard = () => {
  const { coursesCertification } = education.cards;

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
      <div className="mb-5 flex items-center gap-3">
        <div
          className="
            flex size-9 items-center justify-center
            rounded-lg
            bg-purple-500/10
            text-purple-400
          "
        >
          <Award size={19} />
        </div>

        <h3 className="text-sm font-medium text-white">
          {coursesCertification.overline}
        </h3>
      </div>

      <ul className="divide-y divide-[var(--border)]">
        {coursesCertification.courses.map((course) => (
          <CourseItem key={`${course.name}-${course.year}`} course={course} />
        ))}
      </ul>
    </article>
  );
};