"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowUp,
  Github,
  Linkedin,
  Mail,
  Phone,
  ShieldCheck,
  ExternalLink,
  Code2,
} from "lucide-react";
import { profile, contactInfo, socialLinks } from "@/content/portfolioData";
import { Container } from "@/components/ui";

const QUICK_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About Me", href: "#about" },
  { label: "Technical Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Featured Projects", href: "#projects" },
  { label: "Education & Certifications", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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
    }
  };

  return (
    <footer className="relative bg-[#02050d] border-t border-white/10 pt-16 pb-12 overflow-hidden z-10">
      {/* Ambient Top Glow Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/[0.08]">
          {/* Column 1: Identity & Bio (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-black text-sm shadow-[0_0_12px_rgba(59,130,246,0.4)]">
                M
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight flex items-center gap-1.5">
                <span>Eng. Maaz Ullah</span>
                <ShieldCheck className="w-4 h-4 text-blue-400" />
              </span>
            </div>

            <p className="text-sm font-medium text-cyan-400">
              Software Engineer | AI & Machine Learning Developer
            </p>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              PEC-recognized engineer specializing in Computer Vision, Deep Learning, and Python-powered intelligent architectures. Open to international opportunities, remote roles, and relocation.
            </p>

            {/* Verified Social Channels */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={contactInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-400 hover:text-white border border-white/10 hover:border-blue-500/40 flex items-center justify-center transition-all hover:scale-105 shadow-sm"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={contactInfo.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-400 hover:text-white border border-white/10 hover:border-blue-500/40 flex items-center justify-center transition-all hover:scale-105 shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${contactInfo.email}`}
                className="w-9 h-9 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-400 hover:text-white border border-white/10 hover:border-blue-500/40 flex items-center justify-center transition-all hover:scale-105 shadow-sm"
                aria-label="Send Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
                className="w-9 h-9 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-400 hover:text-white border border-white/10 hover:border-blue-500/40 flex items-center justify-center transition-all hover:scale-105 shadow-sm"
                aria-label="Call Mobile"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Quick Navigation
            </h3>
            <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-xs sm:text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-slate-400 hover:text-cyan-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    <span className="text-slate-600 group-hover:text-cyan-400 transition-colors">›</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Live App & Back to Top (3 cols) */}
          <div className="md:col-span-3 flex flex-col justify-between space-y-4">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                Flagship Project
              </h3>
              <a
                href={contactInfo.livePortfolioAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900/70 border border-white/10 hover:border-cyan-500/40 transition-colors block group"
              >
                <div className="flex items-center justify-between text-xs font-semibold text-white group-hover:text-cyan-300">
                  <span>VisionLens Detector</span>
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Live Deep Learning Cataract Classification Platform
                </p>
              </a>
            </div>

            {/* Back to Top Button */}
            <div>
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-xs font-semibold text-slate-300 hover:text-white border border-white/10 hover:border-blue-500/40 transition-all shadow-sm group"
                aria-label="Scroll back to top of page"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal / Accreditation Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} <strong className="text-slate-300 font-semibold">Eng. Maaz Ullah</strong>. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-[11px]">
            <span>Mirpur University of Science and Technology (MUST)</span>
            <span>•</span>
            <span className="text-slate-400">{profile.accreditation}</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
