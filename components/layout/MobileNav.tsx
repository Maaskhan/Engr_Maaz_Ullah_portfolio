"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, ArrowRight, Github, Linkedin, Mail, ShieldCheck } from "lucide-react";
import { profile, contactInfo, socialLinks } from "@/content/portfolioData";
import { Button } from "@/components/ui";

export interface NavItem {
  label: string;
  href: string;
}

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  activeSection: string;
}

export function MobileNav({
  isOpen,
  onClose,
  navItems,
  activeSection,
}: MobileNavProps) {
  const shouldReduceMotion = useReducedMotion();

  // Prevent background scrolling when mobile navigation is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleLinkClick = (href: string) => {
    onClose();
    // Smooth scroll to the target section
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
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
            aria-hidden="true"
          />

          {/* Slide-in Drawer */}
          <motion.div
            id="mobile-navigation-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={
              shouldReduceMotion
                ? { duration: 0.1 }
                : { type: "spring", damping: 28, stiffness: 300 }
            }
            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-[#070b14]/95 backdrop-blur-2xl border-l border-white/10 z-50 p-6 flex flex-col justify-between shadow-2xl md:hidden overflow-y-auto"
          >
            {/* Header: Logo and Close Button */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <div>
                  <div className="flex items-center gap-1.5 text-base font-extrabold text-white tracking-tight">
                    <span>Eng. Maaz Ullah</span>
                    <ShieldCheck className="w-4 h-4 text-blue-400" />
                  </div>
                  <p className="text-xs text-slate-400">Software Engineer & AI Developer</p>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/5 border border-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav aria-label="Mobile Navigation Links">
                <ul className="space-y-2">
                  {navItems.map((item, index) => {
                    const sectionId = item.href.replace("#", "");
                    const isActive = activeSection === sectionId;

                    return (
                      <motion.li
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.04 }}
                      >
                        <a
                          href={item.href}
                          onClick={(e) => {
                            e.preventDefault();
                            handleLinkClick(item.href);
                          }}
                          className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                            isActive
                              ? "bg-gradient-to-r from-blue-600/20 to-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                              : "text-slate-300 hover:text-white hover:bg-white/5 border border-transparent"
                          }`}
                        >
                          <span>{item.label}</span>
                          {isActive ? (
                            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                          ) : (
                            <ArrowRight className="w-3.5 h-3.5 text-slate-500 opacity-60" />
                          )}
                        </a>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>
            </div>

            {/* Drawer Footer Actions */}
            <div className="pt-6 border-t border-white/10 mt-6 space-y-4">
              <Button
                variant="primary"
                size="md"
                href="#contact"
                onClick={() => handleLinkClick("#contact")}
                className="w-full justify-center shadow-lg"
              >
                <span>Contact Me</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>

              {/* Quick Social Links */}
              <div className="flex items-center justify-center gap-3 pt-2">
                <a
                  href={contactInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={contactInfo.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <div className="text-center text-[11px] text-slate-500">
                PEC-Accredited • {profile.location}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default MobileNav;
