"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./Button";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navGroups = [
  {
    label: "About",
    items: [
      { label: "About UPTECH", href: "/about" },
      { label: "Leadership and Governance", href: "/leadership" },
      { label: "Code of Conduct", href: "/code-of-conduct" },
    ],
  },
  {
    label: "Programs",
    items: [
      { label: "AI and Tech Programs", href: "/initiatives/ai-tech-programs" },
      { label: "Skill Development Center", href: "/initiatives/ai-tech-programs" },
      { label: "Incubation and Collective Startups", href: "/initiatives/ai-tech-programs" },
    ],
  },
  {
    label: "Initiatives",
    items: [
      { label: "People AI Platform", href: "/initiatives/people-ai" },
      { label: "TechMart Global", href: "/initiatives/techmart-global" },
      { label: "Tech Excellence Awards", href: "/initiatives/tech-excellence-awards" },
    ],
  },
  {
    label: "Ecosystem",
    items: [
      { label: "UK–Pakistan Technology Partnership", href: "/about" },
      { label: "Funding and Grants", href: "/membership" },
      { label: "Trade Delegations and Exhibitions", href: "/events" },
    ],
  },
  {
    label: "Updates",
    items: [
      { label: "Events and News", href: "/events" },
      { label: "Careers", href: "/careers" },
    ],
  },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-light/95 backdrop-blur-md border-b border-light shadow-md"
          : "bg-light"
      }`}
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-lg overflow-hidden shadow-md group-hover:shadow-lg transition-shadow">
              <Image
                src="/image/Main Logo/mainlogo.jpeg"
                alt="UPTECH Logo"
                width={40}
                height={40}
                className="object-contain"
                unoptimized
              />
            </div>
            <span className="font-heading font-bold text-xl text-on-light">UPTECH</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navGroups.map((group) => (
              <div
                key={group.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(group.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 text-on-light hover:text-primary transition-colors font-medium text-sm">
                  {group.label}
                  <ChevronDown className="w-4 h-4" />
                </button>
                <AnimatePresence>
                  {openDropdown === group.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-surface-light rounded-lg shadow-lg border border-light p-2"
                    >
                      {group.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2 text-on-light hover:text-primary hover:bg-surface-light-2 rounded-md transition-colors text-sm"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <Link href="/membership" className="text-on-light hover:text-primary transition-colors font-medium text-sm">
              Membership
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button href="https://portal.example.com" variant="ghost" size="sm">
              Portal
            </Button>
            <Button href="/membership" variant="primary" size="sm">
              Become a Member
            </Button>
          </div>

          <button
            className="lg:hidden p-2 text-on-light"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-y-0 right-0 w-80 bg-surface-light shadow-2xl z-50 overflow-y-auto border-l border-light"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <Link href="/" className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-lg overflow-hidden">
                    <Image
                      src="/image/Main Logo/mainlogo.jpeg"
                      alt="UPTECH Logo"
                      width={40}
                      height={40}
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                  <span className="font-heading font-bold text-xl">UPTECH</span>
                </Link>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="p-2"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="space-y-4">
                {navGroups.map((group) => (
                  <div key={group.label}>
                    <button
                      className="flex items-center justify-between w-full py-3 text-on-light font-medium"
                      onClick={() =>
                        setOpenDropdown(openDropdown === group.label ? null : group.label)
                      }
                    >
                      {group.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          openDropdown === group.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === group.label && (
                      <div className="pl-4 space-y-2">
                        {group.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block py-2 text-muted-on-light hover:text-primary text-sm"
                            onClick={() => setIsMobileOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link
                  href="/membership"
                  className="block py-3 text-on-light font-medium hover:text-primary"
                  onClick={() => setIsMobileOpen(false)}
                >
                  Membership
                </Link>
              </nav>

              <div className="mt-8 space-y-3">
                <Button
                  href="https://portal.example.com"
                  variant="secondary"
                  className="w-full"
                >
                  Access Portal
                </Button>
                <Button href="/membership" variant="primary" className="w-full">
                  Become a Member
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}