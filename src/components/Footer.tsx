"use client";

import Link from "next/link";
import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface py-10">
      <div className="mx-auto w-full max-w-[90rem] px-4 sm:px-8 lg:px-16 xl:px-24">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <Link href="#home" className="flex w-max items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-accent/20 bg-accent/10">
                <span className="font-display text-sm font-bold text-accent">A</span>
              </div>
              <span className="font-display text-xl font-semibold text-foreground">
                Abdi<span className="text-accent">.</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Software Engineering graduate building full-stack web applications,
              AI tools, and practical digital products.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <Link
                href="https://github.com/Ketoransile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-accent/40 hover:text-accent"
                aria-label="GitHub"
              >
                <FiGithub className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/abdi-sileshi-56710a2a6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-accent/40 hover:text-accent"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:abdisileshi123@gmail.com"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-accent/40 hover:text-accent"
                aria-label="Email"
              >
                <FiMail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground">Sections</h4>
            <ul className="mt-3 grid gap-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground">Info</h4>
            <div className="mt-3 grid gap-2 text-sm text-muted-foreground">
              <p>Addis Ababa, Ethiopia</p>
              <p>EAT timezone, UTC+3</p>
              <p>Open to software engineering roles</p>
            </div>
            <Link
              href="#home"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-light"
            >
              Back to top
              <FiArrowUp className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Abdi Sileshi Worku. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
