"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiExternalLink,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

const roles = [
  "Full-Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "Problem Solver",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 2800);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pb-16 pt-24 lg:pt-16"
    >
      <div className="relative z-10 w-full">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <p className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[5rem] lg:leading-none">
              Hi, I&apos;m
            </p>

            <h1 className="mt-2 font-display text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-[5.8rem] lg:leading-[0.95]">
              <span className="gradient-text">Abdi Sileshi</span>
            </h1>

            <h2 className="mt-6 font-display text-2xl font-semibold text-foreground sm:text-3xl lg:text-4xl">
              Software Engineer
            </h2>

            <div className="mt-4 flex items-center justify-center gap-3 lg:justify-start">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <p className="text-base font-medium text-muted-foreground sm:text-lg">
                {roles[roleIndex]}
              </p>
            </div>

            <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
              I craft{" "}
              <span className="font-semibold text-foreground">
                robust and beautiful digital experiences
              </span>
              . I focus on turning complex, real-world problems into clear,
              scalable products with strong frontend structure and reliable
              backend systems.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="#projects"
                className="group inline-flex h-14 items-center gap-3 rounded-2xl bg-accent px-8 font-semibold text-white shadow-[0_12px_30px_rgba(99,102,241,0.24)] transition-colors hover:bg-accent-dark"
              >
                View My Work
                <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="https://drive.google.com/file/d/1ewHEq0WvVtWYGblq4clqaiOGmVV_u06k/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center gap-3 rounded-2xl border border-border px-8 font-semibold text-muted-foreground transition-colors hover:border-accent/40 hover:text-foreground"
              >
                <FiExternalLink className="h-4 w-4" />
                View Resume
              </Link>
            </div>

            <div className="mt-9 flex items-center justify-center gap-5 lg:justify-start">
              <Link
                href="https://github.com/Ketoransile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-accent/40 hover:text-accent"
                aria-label="GitHub"
              >
                <FiGithub className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/abdi-sileshi-56710a2a6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-accent/40 hover:text-accent"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:abdisileshi123@gmail.com"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-accent/40 hover:text-accent"
                aria-label="Email"
              >
                <FiMail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="order-1 w-full lg:order-2">
            <div className="relative mx-auto w-full max-w-[18rem] sm:max-w-[22rem] lg:ml-auto lg:mr-0 lg:max-w-[28rem]" style={{ aspectRatio: "896 / 1111" }}>
              <div className="absolute inset-0 -rotate-3 rounded-[2rem] border border-accent/15 bg-accent/5" />
              <div className="absolute inset-0 rotate-2 rounded-[2rem] border border-border bg-background" />

              <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-border bg-surface shadow-[0_20px_60px_rgba(17,24,39,0.14)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                <Image
                  src="/my_second_image.png"
                  alt="Abdi Sileshi Worku"
                  fill
                  priority
                  className="object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="rounded-xl border border-white/15 bg-black/45 px-4 py-3 text-white backdrop-blur-md">
                    <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/70">
                      Software Engineer
                    </p>
                    <p className="mt-1 text-sm font-medium">
                      Full-stack, AI, and product-focused development
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
