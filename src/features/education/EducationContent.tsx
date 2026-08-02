import { education } from "./education.data";
import DescriptionDetail from "@/components/common/DescriptionDetail";
import { EducationCard } from "./EducationCard";
import { CoursesCard } from "./CoursesCard";
import { EducationPreviewContent } from "./EducationPreviewContent";

export const EducationContent = () => {
  return (
    <div className="grid w-full gap-10 lg:grid-cols-[1fr_320px]">
      {/* Información */}
      <div>
        <div className="mb-8 max-w-2xl">
          <span className="mb-3 block text-sm font-medium uppercase tracking-wider text-blue-400">
            Mi formación
          </span>

          <h2 className="text-5xl font-semibold leading-tight text-white">
            {education.title}
          </h2>
          <h2 className="text-5xl font-semibold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-300 to-purple-500">
            {education.underTitle}
          </h2>
          <DescriptionDetail text={education.resume} />
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <EducationCard />
          <CoursesCard />
        </div>
      </div>

      {/* Preview */}
      <EducationPreviewContent />
    </div>
  );
};
