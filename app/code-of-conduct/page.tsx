import { Section } from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Code of Conduct | UPTECH",
  description: "UPTECH's code of conduct and ethical guidelines.",
};

export default function CodeOfConductPage() {
  return (
    <div className="pt-20">
      <Section>
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">Code of Conduct</h1>
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="font-heading font-semibold text-2xl mb-4">Summary</h2>
              <p className="text-muted-text mb-4">
                UPTECH is committed to maintaining the highest standards of ethical conduct, transparency, and accountability in all our activities.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="font-heading font-semibold text-2xl mb-4">Ethical Principles</h2>
              <ul className="space-y-2 text-muted-text">
                <li>• Integrity and honesty in all dealings</li>
                <li>• Respect for diversity and inclusion</li>
                <li>• Transparency in governance and operations</li>
                <li>• Accountability to members and stakeholders</li>
                <li>• Commitment to responsible technology development</li>
              </ul>
            </section>
            <section className="mb-8">
              <h2 className="font-heading font-semibold text-2xl mb-4">Member Responsibilities</h2>
              <p className="text-muted-text">
                TBD - Detailed member responsibilities and guidelines will be available soon.
              </p>
            </section>
          </div>
        </div>
      </Section>
    </div>
  );
}



