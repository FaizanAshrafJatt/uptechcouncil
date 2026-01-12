import { Card } from "./Card";
import { Button } from "./Button";
import { Brain, Globe, GraduationCap, Award } from "lucide-react";

const initiatives = [
  {
    icon: Brain,
    title: "People AI Platform",
    description: "Human-centric AI support systems integrating technology with professional services.",
    href: "/initiatives/people-ai",
    gradient: "from-[#1E40AF]/25 to-[#00B140]/25",
    iconColor: "#1E40AF",
  },
  {
    icon: Globe,
    title: "TechMart Global",
    description: "A cross-border marketplace connecting IT vendors, buyers, and resellers.",
    href: "/initiatives/techmart-global",
    gradient: "from-[#00B140]/25 to-[#E11D48]/25",
    iconColor: "#00B140",
  },
  {
    icon: GraduationCap,
    title: "AI and Tech Programs",
    description: "Training, certifications, incubation, and collective startup models.",
    href: "/initiatives/ai-tech-programs",
    gradient: "from-[#1E40AF]/25 to-[#00B140]/25",
    iconColor: "#1E40AF",
  },
  {
    icon: Award,
    title: "UK–Pakistan Tech Excellence Awards",
    description: "Celebrating innovation, partnership, and digital leadership.",
    href: "/initiatives/tech-excellence-awards",
    gradient: "from-[#E11D48]/25 to-[#1E40AF]/25",
    iconColor: "#E11D48",
  },
];

export function InitiativeGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {initiatives.map((initiative, index) => {
        const Icon = initiative.icon;
        return (
          <Card key={index} hover className="overflow-hidden group">
            <div className={`aspect-video bg-gradient-to-br ${initiative.gradient} mb-6 rounded-lg flex items-center justify-center relative overflow-hidden`}>
              <div className="absolute inset-0 bg-grid-pattern opacity-5" />
              <Icon className={`w-16 h-16 relative z-10`} style={{ color: initiative.iconColor, opacity: 0.8 }} />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-md px-3 py-2">
                  <span className="text-xs font-medium text-[rgba(11,18,32,0.68)]">Media Placeholder</span>
                </div>
              </div>
            </div>
            <h3 className="font-heading font-semibold text-xl mb-3 text-[#0B1220]">{initiative.title}</h3>
            <p className="text-[rgba(11,18,32,0.68)] mb-6 leading-relaxed">{initiative.description}</p>
            <Button href={initiative.href} variant="ghost" showArrow>
              Learn more
            </Button>
          </Card>
        );
      })}
    </div>
  );
}