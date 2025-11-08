import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { ProblemSolution } from "@/components/problem-solution";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
import { Pricing } from "@/components/pricing";
import { DemoForm } from "@/components/demo-form";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ProblemSolution />
      <Features />
      <HowItWorks />
      <Pricing />
      <DemoForm />
      <FAQ />
      <CTA />
    </>
  );
}

