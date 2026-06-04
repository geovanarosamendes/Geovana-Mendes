import CtaSection from "@/components/home/CtaSection";
import FeaturedProjectsSection from "@/components/home/FeaturedProjectsSection";
import HeroSection from "@/components/home/HeroSection";
import LatestPostsSection from "@/components/home/LatestPostsSection";
import SpecialtiesSection from "@/components/home/SpecialtiesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SpecialtiesSection />
      <FeaturedProjectsSection />
      <LatestPostsSection />
      <CtaSection />
    </>
  );
}