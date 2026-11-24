"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Menu, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { profile } from "@/content/portfolioData";
import { Container, Button } from "@/components/ui";
import { MobileNav, NavItem } from "./MobileNav";
import { cn } from "@/lib/utils";

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Handle scroll detection for background glass and active section
  useEffect(() => {
    const handleScroll = () => {
      // Sticky header background state
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section detection
      const sectionIds = NAV_ITEMS.map((item) => item.href.replace("#", ""));
      const scrollPosition = window.scrollY + 160;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Trigger once on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(targetId);
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled
            ? "py-3 bg-[#030712]/80 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "py-5 sm:py-6 bg-transparent"
        )}
      >
        <Container size="wide">
          <nav
            aria-label="Main Navigation"
            className="flex items-center justify-between"
          >
            {/* Brand Logo */}
            <motion.a
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              initial={shouldReduceMotion ? false : { opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2.5 text-white group outline-none"
              aria-label="Eng. Maaz Ullah Home"
            >
              {/* Monogram Badge */}
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-black text-base shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:scale-105 transition-transform">
                M
              </div>

              {/* Text Logo */}
              <div className="flex flex-col">
                <span className="font-extrabold text-base sm:text-lg tracking-tight leading-none text-white group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <span>Eng. Maaz Ullah</span>
                  <span title={profile.accreditation}>
                    <ShieldCheck
                      className="w-4 h-4 text-blue-400 opacity-90"
                      aria-label={profile.accreditation}
                    />
                  </span>
                </span>
                <span className="text-[10px] font-mono text-slate-400 font-medium tracking-wide">
                  AI & ML Software Engineer
                </span>
              </div>
            </motion.a>

            {/* Desktop Navigation Links */}
            <motion.ul
              initial={shouldReduceMotion ? false : { opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-900/60 backdrop-blur-lg border border-white/10 shadow-inner"
            >
              {NAV_ITEMS.map((item) => {
                const sectionId = item.href.replace("#", "");
                const isActive = activeSection === sectionId;

                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={cn(
                        "relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 block select-none",
                        isActive
                          ? "text-white"
                          : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                      )}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="activeNavIndicator"
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/80 to-cyan-500/80 -z-10 shadow-[0_0_12px_rgba(6,182,212,0.4)]"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                      <span>{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </motion.ul>

            {/* Right Actions: CTA & Mobile Hamburger */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <Button
                variant="primary"
                size="sm"
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="hidden sm:inline-flex shadow-[0_0_20px_rgba(37,99,235,0.3)]"
              >
                <span>Contact Me</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Button>

              {/* Mobile Menu Hamburger Button */}
              <button
                type="button"
                onClick={() => setIsMobileNavOpen(true)}
                className="lg:hidden p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Open Navigation Menu"
                aria-expanded={isMobileNavOpen}
                aria-controls="mobile-navigation-drawer"
              >
                <Menu className="w-5 h-5" />
              </button>
            </motion.div>
          </nav>
        </Container>
      </header>

      {/* Mobile Drawer Menu */}
      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
        navItems={NAV_ITEMS}
        activeSection={activeSection}
      />
    </>
  );
}

export default Navbar;
