import Countdown from "@/components/countdown";
import Hero from "@/components/hero";
import OurMoments from "@/components/our-moments";
import SaveTheDate from "@/components/save-the-date";
import SectionSeparator from "@/components/section-separator";
import TheDetails from "@/components/the-details";

export default function Home() {
  return (
    <div>
      <Hero />
      <Countdown />
      <SectionSeparator />
      <SaveTheDate />
      <SectionSeparator />
      <OurMoments />
      <SectionSeparator />
      <TheDetails />
    </div>
  );
}
