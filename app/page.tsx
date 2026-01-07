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
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Globe2, TrendingUp, Award } from "lucide-react";

function HeroContent() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6 }}
      >
        <h1 className="font-heading font-bold mb-6 text-on-dark text-balance">
          UK–Pakistan Tech Council
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-on-dark font-medium">
          Bridging Innovation. Uniting Talent. Empowering Futures.
        </p>
        <p className="muted-on-dark mb-8 text-lg leading-relaxed max-w-xl">
          A strategic platform strengthening technology, innovation, and digital trade between the United Kingdom and Pakistan.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button href="/about" variant="primary" size="lg" showArrow>
            Explore the Council
          </Button>
          <Button 
            href="https://portal.example.com" 
            variant="secondary" 
            size="lg" 
            showArrow 
            className="border-on-dark text-on-dark hover:bg-on-dark hover:text-dark"
          >
            Access Member and Partner Portal
          </Button>
        </div>
      </motion.div>
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="aspect-square rounded-2xl surface-dark-2 border border-dark p-12 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-glow opacity-40" />
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              <Image
                src="/image/Main Logo/mainlogo.jpeg"
                alt="UPTECH Logo"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <Section variant="dark" className="relative overflow-hidden">
        <HeroContent />
      </Section>

      {/* Authority and Trust */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
          <AnimatedSection>
            <div>
              <SectionHeader
                title="Authority and Trust"
                align="left"
              />
              <p className="text-lg muted-on-light leading-relaxed mb-6">
                The UK–Pakistan Technology Council (UPTECH) is a bilateral initiative connecting governments, enterprises, investors, startups, and academia to drive technology-led growth.
              </p>
              <p className="muted-on-light leading-relaxed">
                Built by professionals, entrepreneurs, and technology leaders committed to ethical governance and long-term impact across both nations.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <TrustCards />
          </AnimatedSection>
        </div>
        <AnimatedSection>
          <div className="pt-8">
            <h3 className="font-heading font-semibold text-lg mb-6 text-center muted-on-light">
              Trusted by Leading Organizations
            </h3>
            <SponsorMarquee />
          </div>
        </AnimatedSection>
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
                icon={<Globe2 className="w-8 h-8 text-primary" />}
                title="Strong Diaspora"
                description="Strong Pakistani tech diaspora in the UK"
              />
              <StatCard
                icon={<TrendingUp className="w-8 h-8 text-accent-teal" />}
                title="Rapid Growth"
                description="Rapid growth of Pakistan's IT exports"
              />
              <StatCard
                icon={<Award className="w-8 h-8 text-primary" />}
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
            <div className="surface-light rounded-2xl border-2 border-primary/20 p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent-teal/5" />
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