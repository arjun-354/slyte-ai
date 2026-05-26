import { HeroSection } from "@/components/sections/hero";
import { ValuePropsSection } from "@/components/sections/value-props";
import { CaseStudiesSection } from "@/components/sections/case-studies";
import { EmailCaptureSection } from "@/components/sections/email-capture";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ValuePropsSection />
      <CaseStudiesSection />
      <EmailCaptureSection />
    </>
  );
}
