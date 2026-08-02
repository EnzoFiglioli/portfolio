import { SectionContainer } from "@/components/common/SectionContainer";
import { EducationContent } from "./EducationContent";
import { education } from "./education.data";
import { Overline } from "@/components/common/Overline";

export const Education = () => {
  return (

    <SectionContainer className="p-10" id="education">
      
      <EducationContent />
    </SectionContainer>
  );
};
