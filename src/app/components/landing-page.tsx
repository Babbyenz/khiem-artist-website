import { useArtist } from "../context/artist-context";
import { HeroSection } from "./hero-section";
import { BiographySection } from "./biography-section";
import { MusicSection } from "./music-section";
import { PressSection } from "./press-section";
import { ContactSection } from "./contact-section";
import { AIUsageSection } from "./aiUsage-section";
import { Navigation } from "./navigation";
import { InformationSection } from "./information-section";
import { CreativeInspirationSection } from "./creativeInspiration-section";
export function LandingPage() {
  const { artistData } = useArtist();

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
      <Navigation />
      <HeroSection data={artistData} />
      <InformationSection />
      <BiographySection data={artistData} />
      <MusicSection data={artistData} />
      <CreativeInspirationSection />
      <PressSection data={artistData} />
      <ContactSection data={artistData} />
      <AIUsageSection />
    </div>
  );
}
