"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  FiBookOpen,
  FiBriefcase,
  FiCpu,
  FiFolder,
  FiHome,
  FiMail,
  FiMenu,
  FiUser,
  FiX,
} from "react-icons/fi";
import { ModeToggle } from "@/components/ModeToggle";

const navLinks = [
  { name: "Home", href: "#home", icon: <FiHome size={20} /> },
  { name: "About", href: "#about", icon: <FiUser size={20} /> },
  { name: "Projects", href: "#projects", icon: <FiFolder size={20} /> },
  { name: "Skills", href: "#skills", icon: <FiCpu size={20} /> },
  { name: "Experience", href: "#experience", icon: <FiBriefcase size={20} /> },
  { name: "Education", href: "#education", icon: <FiBookOpen size={20} /> },
  { name: "Contact", href: "#contact", icon: <FiMail size={20} /> },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i -= 1) {
        const element = document.getElementById(sections[i]);
        if (element && element.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed left-0 top-0 z-50 hidden h-screen w-[76px] flex-col items-center justify-between border-r border-gray-200/80 bg-white/70 py-6 backdrop-blur-xl dark:border-white/10 dark:bg-[#0a0a0a]/70 lg:flex">
        <Link href="#home" className="flex items-center justify-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/20 bg-accent/10">
            <span className="font-display text-base font-bold text-accent">A</span>
          </div>
        </Link>

        <div className="flex flex-col items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`group relative flex h-12 w-12 items-center justify-center rounded-xl border transition-colors ${
                  isActive
                    ? "border-accent/25 bg-accent/10 text-accent"
                    : "border-transparent text-muted-foreground hover:bg-surface-hover hover:text-foreground"
                }`}
              >
                {isActive ? (
                  <span className="absolute -left-[13px] top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-r-full bg-accent" />
                ) : null}
                {link.icon}
                <span className="pointer-events-none absolute left-full ml-3 whitespace-nowrap rounded-lg bg-foreground px-3 py-1.5 text-xs font-medium text-background opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                  {link.name}
                </span>
              </Link>
            );
          })}
        </div>

        <div className="flex flex-col items-center gap-3">
          <ModeToggle />
          <Link
            href="#contact"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-white transition-colors hover:bg-accent-dark"
            aria-label="Contact"
          >
            <FiMail className="h-4 w-4" />
          </Link>
        </div>
      </nav>

      <nav className="fixed left-0 top-0 z-50 w-full lg:hidden">
        <div className="flex items-center justify-between border-b border-gray-200/80 bg-white/70 px-4 py-3 backdrop-blur-xl dark:border-white/10 dark:bg-[#0a0a0a]/70">
          <Link href="#home" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-accent/20 bg-accent/10">
              <span className="font-display text-sm font-bold text-accent">A</span>
            </div>
            <span className="hidden font-display font-semibold text-foreground sm:block">
              Abdi<span className="text-accent">.</span>
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <ModeToggle />
            <button
              onClick={() => setMobileOpen((open) => !open)}
              className="p-2 text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>

        {mobileOpen ? (
          <div className="border-b border-gray-200/80 bg-white/90 p-4 backdrop-blur-xl dark:border-white/10 dark:bg-[#0a0a0a]/90">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                  activeSection === link.href.replace("#", "")
                    ? "bg-accent/10 text-accent"
                    : "text-muted-foreground hover:bg-surface hover:text-foreground"
                }`}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-3 block rounded-lg bg-accent px-4 py-3 text-center text-sm font-medium text-white"
            >
              Contact Me
            </Link>
          </div>
        ) : null}
      </nav>
    </>
  );
}
