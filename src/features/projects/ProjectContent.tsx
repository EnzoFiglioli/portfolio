import { Button } from "@/components/common/Button";
import { project } from "./project.data";

interface ProjectContentProps {
  onSeeAll: () => void;
}

export const ProjectContent = ({ onSeeAll }: ProjectContentProps) => {
  return (
    <header className="flex flex-col gap-6 p-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p
          className="
            text-sm
            font-semibold
            uppercase
            tracking-[0.25em]
            text-blue-400
          "
        >
          {project.overline}
        </p>

        <h2
          className="
            mt-2
            text-4xl
            font-bold
            text-white
          "
        >
          {project.title}
        </h2>
      </div>

      <Button
        name={project.btnSeeAll}
        padding="5"
        color="gray"
        icon="ArrowRight"
        onClick={onSeeAll}
      />
    </header>
  );
};
