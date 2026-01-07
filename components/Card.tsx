import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  variant?: "light" | "dark";
}

export function Card({ children, className = "", hover = false, variant = "light" }: CardProps) {
  const baseStyles = "rounded-card border p-6 transition-all duration-300";
  const variantStyles = variant === "dark"
    ? "surface-dark border-dark text-on-dark"
    : "surface-light border-light text-on-light shadow-sm";
  
  const hoverClass = hover 
    ? "hover:-translate-y-1 hover:shadow-lg hover:border-primary/40 cursor-pointer" 
    : "";
  
  return (
    <div className={`${baseStyles} ${variantStyles} ${hoverClass} ${className}`}>
      {children}
    </div>
  );
}