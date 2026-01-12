import { ReactNode } from "react";
import { Card } from "./Card";

interface StatCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  variant?: "light" | "dark";
  className?: string;
}

export function StatCard({ icon, title, description, variant = "light", className = "" }: StatCardProps) {
  return (
    <Card hover variant={variant} className={`text-center ${className}`}>
      {icon && (
        <div className="w-16 h-16 rounded-xl bg-[#1E40AF]/10 flex items-center justify-center mx-auto mb-4">
          {icon}
        </div>
      )}
      <h3 className="font-heading font-semibold text-xl mb-2 text-[#0B1220]">{title}</h3>
      <p className="text-[rgba(11,18,32,0.68)] text-sm">{description}</p>
    </Card>
  );
}