import { Section } from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About UPTECH | UK–Pakistan Tech Council",
  description: "Learn about the UK–Pakistan Technology Council and our mission to strengthen technology collaboration.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <Section>
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">About UPTECH</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-text mb-6">
              The UK–Pakistan Technology Council (UPTECH) is a bilateral initiative connecting governments, enterprises, investors, startups, and academia to drive technology-led growth.
            </p>
            <p className="text-muted-text mb-6">
              UPTECH serves as a strategic platform strengthening technology, innovation, and digital trade between the United Kingdom and Pakistan. We focus on AI, FinTech, Cloud, Cybersecurity, and Software Development.
            </p>
            <p className="text-muted-text">
              Built by professionals, entrepreneurs, and technology leaders, UPTECH is committed to ethical governance and long-term impact across both nations.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}



