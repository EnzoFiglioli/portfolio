import DescriptionDetail from "@/components/common/DescriptionDetail";
import { about } from "./about.data";
import { AboutDetailInformation } from "./AboutDetailInformation";
import { Overline } from "@/components/common/Overline";

export const AboutContent = () => {
  return (
    <div
      className="
        flex
        flex-col
        justify-center
        gap-8
        max-w-2xl
        py-20
    "
    >
      <Overline name={about.overline} />

      <h1
        className="
      text-5xl
      md:text-4xl
      font-extrabold
      leading-tight
      tracking-tight
    "
      >
        <span className="">{about.title}</span>
        <span className="text-white rounded">.</span>
      </h1>

      <DescriptionDetail text={about.description} />

      <p
        className="
        text-sm"
      >
        <AboutDetailInformation />
      </p>
    </div>
  );
};
