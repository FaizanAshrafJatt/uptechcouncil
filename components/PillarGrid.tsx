import { Card } from "./Card";
import { Network, Users, TrendingUp, Cpu, FileText } from "lucide-react";

const pillars = [
  {
    icon: Network,
    title: "Technology and Innovation Collaboration",
    description: "Joint ventures, R&D partnerships, and cross-border innovation.",
  },
  {
    icon: Users,
    title: "Talent and Professional Networks",
    description: "Connecting UK-based Pakistani tech professionals globally.",
  },
  {
    icon: TrendingUp,
    title: "Trade, Investment and Market Access",
    description: "Supporting exports, inward investment, and market entry.",
  },
  {
    icon: Cpu,
    title: "AI and Digital Transformation Programs",
    description: "AI platforms, collective startups, and digital services.",
  },
  {
    icon: FileText,
    title: "Policy, Research and Advocacy",
    description: "Responsible tech growth, knowledge transfer, and R&D alignment.",
  },
];

export function PillarGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {pillars.map((pillar, index) => {
        const Icon = pillar.icon;
        return (
          <Card key={index} hover variant="dark" className="h-full">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-xl mb-3 text-on-dark">{pillar.title}</h3>
            <p className="muted-on-dark leading-relaxed text-sm">{pillar.description}</p>
          </Card>
        );
      })}
    </div>
  );
}