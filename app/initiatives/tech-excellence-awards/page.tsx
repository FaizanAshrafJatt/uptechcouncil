import { Section } from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Excellence Awards | UPTECH",
  description: "Celebrating innovation, partnership, and digital leadership.",
};

export default function TechExcellenceAwardsPage() {
  return (
    <div className="pt-20">
      <Section>
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">UK–Pakistan Tech Excellence Awards</h1>
          <div className="aspect-video bg-gradient-to-br from-tech-blue to-tech-teal rounded-lg mb-8 flex items-center justify-center">
            <span className="text-white text-sm">Image Placeholder</span>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-text mb-6">
              Celebrating innovation, partnership, and digital leadership.
            </p>
            <p className="text-muted-text">
              TBD - Detailed information about the Tech Excellence Awards will be available soon.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
