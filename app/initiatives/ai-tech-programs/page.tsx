import { Section } from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI and Tech Programs | UPTECH",
  description: "Training, certifications, incubation, and collective startup models.",
};

export default function AITechProgramsPage() {
  return (
    <div className="pt-20">
      <Section>
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">AI and Tech Programs</h1>
          <div className="aspect-video bg-gradient-to-br from-tech-blue to-tech-teal rounded-lg mb-8 flex items-center justify-center">
            <span className="text-white text-sm">Image Placeholder</span>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-text mb-6">
              Training, certifications, incubation, and collective startup models.
            </p>
            <p className="text-muted-text mb-6">
              TBD - Detailed information about AI and Tech Programs will be available soon.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div>
                <h3 className="font-heading font-semibold text-xl mb-2">Skill Development Center</h3>
                <p className="text-muted-text">TBD</p>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-xl mb-2">Incubation and Collective Startups</h3>
                <p className="text-muted-text">TBD</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}



