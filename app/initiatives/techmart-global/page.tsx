import { Section } from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TechMart Global | UPTECH",
  description: "A cross-border marketplace connecting IT vendors, buyers, and resellers.",
};

export default function TechMartGlobalPage() {
  return (
    <div className="pt-20">
      <Section>
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">TechMart Global</h1>
          <div className="aspect-video bg-gradient-to-br from-tech-blue to-tech-teal rounded-lg mb-8 flex items-center justify-center">
            <span className="text-white text-sm">Image Placeholder</span>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-text mb-6">
              A cross-border marketplace connecting IT vendors, buyers, and resellers.
            </p>
            <p className="text-muted-text">
              TBD - Detailed information about TechMart Global will be available soon.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}



