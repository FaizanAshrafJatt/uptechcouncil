import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership and Governance | UPTECH",
  description: "Learn about UPTECH's leadership team and governance structure.",
};

export default function LeadershipPage() {
  return (
    <div className="pt-20">
      <Section>
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">Leadership and Governance</h1>
          <p className="text-lg text-muted-text mb-12">
            UPTECH operates under a defined governance structure ensuring transparency, ethics, and accountability.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <h3 className="font-heading font-semibold text-xl mb-2">Governance Structure</h3>
              <p className="text-muted-text">TBD</p>
            </Card>
            <Card>
              <h3 className="font-heading font-semibold text-xl mb-2">Board of Directors</h3>
              <p className="text-muted-text">TBD</p>
            </Card>
            <Card>
              <h3 className="font-heading font-semibold text-xl mb-2">Advisory Council</h3>
              <p className="text-muted-text">TBD</p>
            </Card>
            <Card>
              <h3 className="font-heading font-semibold text-xl mb-2">Executive Team</h3>
              <p className="text-muted-text">TBD</p>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
}
