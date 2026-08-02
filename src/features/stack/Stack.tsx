import { SectionContainer } from "@/components/common/SectionContainer";
import StackContent from "./StackContent";

export const Stack = () => {
  return (
    <SectionContainer
      className="
        mx-auto
        mt-20
        max-w-7xl
        overflow-hidden
        rounded-3xl
        border
        border-[var(--border)]
        bg-[rgba(11,17,32,.65)]
        backdrop-blur-xl
        px-6
        py-14
        md:px-10
      "
    >
      <StackContent />
    </SectionContainer>
  );
};
