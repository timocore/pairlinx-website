import { Navigation } from "../components/homepage/Navigation";
import { HeroSection } from "../components/homepage/HeroSection";
import { ProblemTeaserSection } from "../components/homepage/ProblemTeaserSection";
import { FeaturedProductSection } from "../components/homepage/FeaturedProductSection";
import { PlatformPrinciplesSection } from "../components/homepage/PlatformPrinciplesSection";
import { FutureUtilitiesSection } from "../components/homepage/FutureUtilitiesSection";
import { CTASection } from "../components/homepage/CTASection";
import { Footer } from "../components/homepage/Footer";

export function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navigation />
      <HeroSection />
      <ProblemTeaserSection />
      <FeaturedProductSection />
      <PlatformPrinciplesSection />
      <FutureUtilitiesSection />
      <CTASection />
      <Footer />
    </div>
  );
}
