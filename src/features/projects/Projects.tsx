import { useState } from "react";
import { SectionContainer } from "@/components/common/SectionContainer";
import { ProjectContent } from "./ProjectContent";
import ProjectContainer from "./ProjectContainer";
import { ProjectsModal } from "./ProjectsModal";

export const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div id="projects">
      <SectionContainer
        className="
          mt-6
          overflow-hidden
          rounded-2xl
          px-8
          py-10
        "
      >
        <ProjectContent
          onSeeAll={() => {
            console.log("CLICK EN VER TODOS");
            setIsModalOpen(true);
          }}
        />

        <ProjectContainer />
      </SectionContainer>

      <ProjectsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
