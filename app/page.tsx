"use client";

import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { PillarGrid } from "@/components/PillarGrid";
import { InitiativeGrid } from "@/components/InitiativeGrid";
import { AudienceGrid } from "@/components/AudienceGrid";
import { EventPreview } from "@/components/EventPreview";
import { TrustCards } from "@/components/TrustCards";
import { SponsorMarquee } from "@/components/SponsorMarquee";
import { EventGallery } from "@/components/EventGallery";
import { GovernanceBadges } from "@/components/GovernanceBadges";
import { SectionHeader } from "@/components/SectionHeader";
import { StatCard } from "@/components/StatCard";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Hero } from "@/components/Hero";
import { Globe2, TrendingUp, Award } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <Hero />

      {/* Sponsor Marquee */}
      <section className="bg-[#050B14] border-t border-[rgba(234,242,255,0.08)]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-12">
          <h3 className="text-center text-[rgba(234,242,255,0.6)] text-sm font-medium mb-6 uppercase tracking-wider">
            Trusted by Leading Organizations
          </h3>
          <SponsorMarquee />
        </div>
      </section>

      {/* Authority and Trust */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
          <AnimatedSection>
            <div>
              <SectionHeader
                title="Authority and Trust"
                align="left"
              />
              <p className="text-lg text-[rgba(11,18,32,0.68)] leading-relaxed mb-6">
                The UK–Pakistan Technology Council (UPTECH) is a bilateral initiative connecting governments, enterprises, investors, startups, and academia to drive technology-led growth.
              </p>
              <p className="text-[rgba(11,18,32,0.68)] leading-relaxed">
                Built by professionals, entrepreneurs, and technology leaders committed to ethical governance and long-term impact across both nations.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <TrustCards />
          </AnimatedSection>
        </div>
      </Section>

      {/* What We Do */}
      <Section variant="dark">
        <AnimatedSection>
          <SectionHeader
            title="What We Do"
            subtitle="Core Pillars"
            align="center"
          />
          <PillarGrid />
        </AnimatedSection>
      </Section>

      {/* Flagship Initiatives */}
      <Section>
        <AnimatedSection>
          <SectionHeader
            title="Flagship Initiatives"
            subtitle="Leading programs driving innovation and collaboration between the UK and Pakistan."
            align="left"
          />
          <InitiativeGrid />
        </AnimatedSection>
      </Section>

      {/* Who It's For */}
      <Section variant="dark">
        <AnimatedSection>
          <SectionHeader
            title="Who It's For"
            subtitle="UPTECH serves diverse stakeholders across the technology ecosystem."
            align="center"
          />
          <AudienceGrid />
        </AnimatedSection>
      </Section>

      {/* Why UK–Pakistan */}
      <Section>
        <AnimatedSection>
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="Why UK–Pakistan"
              subtitle="The UK and Pakistan share a growing technology corridor driven by talent, innovation, and digital trade. UPTECH serves as a trusted bridge for collaboration and growth."
              align="center"
            />
            <div className="grid md:grid-cols-3 gap-8">
              <StatCard
                icon={<Globe2 className="w-8 h-8 text-[#1E40AF]" />}
                title="Strong Diaspora"
                description="Strong Pakistani tech diaspora in the UK"
              />
              <StatCard
                icon={<TrendingUp className="w-8 h-8 text-[#00B140]" />}
                title="Rapid Growth"
                description="Rapid growth of Pakistan's IT exports"
              />
              <StatCard
                icon={<Award className="w-8 h-8 text-[#E11D48]" />}
                title="UK Leadership"
                description="UK leadership in AI and enterprise technology"
              />
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* Leadership and Governance Preview */}
      <Section variant="dark">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeader
              title="Leadership and Governance"
              subtitle="UPTECH operates under a defined governance structure ensuring transparency, ethics, and accountability."
              align="center"
            />
            <div className="mb-8">
              <GovernanceBadges />
            </div>
            <Button href="/leadership" variant="primary" size="lg" showArrow>
              View Leadership and Governance
            </Button>
          </div>
        </AnimatedSection>
      </Section>

      {/* Events and Activity Preview */}
      <Section>
        <AnimatedSection>
          <SectionHeader
            title="Events and Activity"
            subtitle="Stay updated with UPTECH events, news, and activities."
            align="left"
          />
          <EventPreview />
          <div className="mt-12 text-center">
            <Button href="/events" variant="primary" size="lg" showArrow>
              View all events
            </Button>
          </div>
          <div className="mt-16">
            <h3 className="font-heading font-semibold text-xl mb-6">Event Gallery</h3>
            <EventGallery />
          </div>
        </AnimatedSection>
      </Section>

      {/* Membership Invitation */}
      <Section variant="dark" className="relative">
        <div className="absolute inset-0 bg-hero-glow opacity-30" />
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <SectionHeader
              title="Join UPTECH"
              subtitle="Join a trusted network shaping the future of UK–Pakistan technology collaboration."
              align="center"
            />
            <Button href="/membership" variant="primary" size="lg" showArrow>
              Become a Member
            </Button>
          </div>
        </AnimatedSection>
      </Section>

      {/* Portal Access Strip */}
      <Section>
        <AnimatedSection>
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl border-2 border-[#1E40AF]/20 p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1E40AF]/8 via-[#00B140]/6 to-[#E11D48]/6" />
              <div className="relative z-10 text-center">
                <SectionHeader
                  title="Member and Partner Portal"
                  subtitle="Access programs, applications, events, and professional networks."
                  align="center"
                />
                <Button href="https://portal.example.com" variant="primary" size="lg" showArrow>
                  Access Portal
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </div>
  );
}