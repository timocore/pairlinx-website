import { HeroSection } from "../components/homepage/HeroSection";
import { ProblemTeaserSection } from "../components/homepage/ProblemTeaserSection";
import { FeaturedProductSection } from "../components/homepage/FeaturedProductSection";
import { PlatformPrinciplesSection } from "../components/homepage/PlatformPrinciplesSection";
import { FutureUtilitiesSection } from "../components/homepage/FutureUtilitiesSection";
import { CTASection } from "../components/homepage/CTASection";

export function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <ProblemTeaserSection />
      <FeaturedProductSection />
      <PlatformPrinciplesSection />
      <FutureUtilitiesSection />
      <CTASection />
    </div>
  );
}
