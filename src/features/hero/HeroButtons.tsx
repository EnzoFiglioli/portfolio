import { Button } from "@/components/common/Button";
import { hero } from "./hero.data";

export const HeroButtons = () => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
      <Button name={hero.primaryButton.label} color="blue" padding="3" icon="ArrowRight" />
      <Button name={hero.secondaryButton.label} padding="3" icon="Mail" color="black" />
    </div>
  );
};