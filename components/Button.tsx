import { ReactNode, ButtonHTMLAttributes } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "glass";
  href?: string;
  children: ReactNode;
  showArrow?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Button({
  variant = "primary",
  href,
  children,
  showArrow = false,
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1E40AF] focus:ring-offset-2 focus:ring-offset-[#050B14] rounded-lg relative overflow-hidden group";
  
  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  
  const variants = {
    primary: "bg-gradient-to-r from-[#1E40AF] to-[#1E3A8A] text-white hover:from-[#1E3A8A] hover:to-[#1E3A8A] shadow-lg hover:shadow-[0_0_30px_rgba(30,64,175,0.5)] hover:-translate-y-0.5",
    secondary: "border-2 border-[#1E40AF] text-[#1E40AF] hover:bg-[#1E40AF] hover:text-white hover:shadow-lg",
    ghost: "text-[#1E40AF] hover:bg-[#1E40AF]/10 hover:shadow-sm",
    glass: "bg-[rgba(255,255,255,0.08)] backdrop-blur-sm border border-[rgba(234,242,255,0.2)] text-[#EAF2FF] hover:bg-[rgba(255,255,255,0.12)] hover:border-[#1E40AF]/50 hover:shadow-[0_0_20px_rgba(30,64,175,0.3)]",
  };

  const classes = `${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`;

  // Shine effect for primary button
  const shineEffect = variant === "primary" ? (
    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/25 to-transparent"></span>
  ) : null;

  if (href) {
    const isExternal = href.startsWith("http");
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {shineEffect}
          <span className="relative z-10 flex items-center gap-2">
            {children}
            {showArrow && <ArrowRight className="w-4 h-4" />}
          </span>
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {shineEffect}
        <span className="relative z-10 flex items-center gap-2">
          {children}
          {showArrow && <ArrowRight className="w-4 h-4" />}
        </span>
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {shineEffect}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {showArrow && <ArrowRight className="w-4 h-4" />}
      </span>
    </button>
  );
}