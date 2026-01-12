import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "People AI Platform | UPTECH",
  description: "Human-centric AI support systems integrating technology with professional services.",
};

export default function PeopleAIPage() {
  return (
    <div className="pt-20">
      <Section>
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">People AI Platform</h1>
          <div className="aspect-video bg-gradient-to-br from-tech-blue to-tech-teal rounded-lg mb-8 flex items-center justify-center">
            <span className="text-white text-sm">Image Placeholder</span>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-text mb-6">
              Human-centric AI support systems integrating technology with professional services.
            </p>
            <p className="text-muted-text">
              TBD - Detailed information about the People AI Platform will be available soon.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}



