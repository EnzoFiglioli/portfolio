import { HeroContent } from "./HeroContent";
import HeroImage from "./HeroImage";

export const Hero = () => {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="
        min-h-screen
        flex
        items-center
        overflow-hidden
        py-10
        lg:py-0
      "
    >
      <div className="grid lg:grid-cols-2">
  <div className="order-2 lg:order-1">
    <HeroContent />
  </div>

  <div className="order-1 lg:order-2">
    <HeroImage />
  </div>
</div>
    </section>
  );
};
