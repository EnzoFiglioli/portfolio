import { Button } from "@/components/common/Button";
import { hero } from "./hero.data";

export const HeroButtons = () => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
      <a href="#projects">
        <Button
          name={hero.primaryButton.label}
          color="blue"
          padding="3"
          icon="ArrowRight"
        />
      </a>
      <a href="#contact">
        <Button
          name={hero.secondaryButton.label}
          padding="3"
          icon="Mail"
          color="black"
        />
      </a>
    </div>
  );
};
