import Hero from "@/components/Home-Sections/hero";

import Image from "next/image";
import { ServicesSection } from "@/components/Home-Sections/Services-Section";
import { WhyChooseUsSection } from "@/components/Home-Sections/WhyChooseUs-Section";
import { GlobalPresenceSection } from "@/components/Home-Sections/GlobalPresence-Section";
import { IndustriesSection } from "@/components/Home-Sections/Industries-Section";
import { CTASection } from "@/components/Home-Sections/CTA-Section";
import { AboutUsSection } from "@/components/Home-Sections/AboutUs-Section";
import { ExpertiseSection } from "@/components/Home-Sections/Expertise-Section";
import { CredibilityBar } from "@/components/Home-Sections/CredibilityBar";

export default function Main() {
  return (
    <div className="">

      <Hero />
      <CredibilityBar />
      <AboutUsSection />
      <ExpertiseSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <GlobalPresenceSection />
      <IndustriesSection />
      <CTASection />
      
    
    </div>
  );
}


