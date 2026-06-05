"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiExternalLink,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

const strengths = [
  "Full-stack web apps",
  "AI product features",
  "Clean interfaces",
  "Backend APIs",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pb-16 pt-24 lg:pt-16"
    >
      <div className="relative z-10 w-full">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.75fr]">
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <div className="mb-5 inline-flex rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-muted-foreground">
              Graduating Software Engineer
            </div>

            <h1 className="font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Abdi Sileshi
            </h1>

            <h2 className="mt-4 max-w-3xl font-display text-2xl font-semibold leading-tight text-foreground sm:text-3xl lg:text-4xl">
              I build full-stack web applications and practical AI-powered tools.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
              I focus on simple, useful products with clear interfaces, reliable
              backend logic, and modern technologies like Next.js, TypeScript,
              Node.js, PostgreSQL, MongoDB, and OpenAI.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
              {strengths.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-border bg-surface px-3 py-1.5 text-sm font-medium text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-border bg-surface p-4 text-center lg:text-left">
                <div className="font-display text-2xl font-bold text-foreground">4.0</div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  CGPA
                </div>
              </div>
              <div className="rounded-xl border border-border bg-surface p-4 text-center lg:text-left">
                <div className="font-display text-2xl font-bold text-foreground">15+</div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Projects
                </div>
              </div>
              <div className="rounded-xl border border-border bg-surface p-4 text-center lg:text-left">
                <div className="font-display text-2xl font-bold text-foreground">2026</div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Graduation
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="#projects"
                className="group inline-flex h-12 items-center gap-3 rounded-xl bg-accent px-7 font-semibold text-white transition-colors hover:bg-accent-dark"
              >
                View Projects
                <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="https://drive.google.com/file/d/1bqmJFrNjhmys262Ear6ZuCF3cAIsuHzm/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-3 rounded-xl border border-border px-7 font-semibold text-muted-foreground transition-colors hover:border-accent/40 hover:text-foreground"
              >
                <FiExternalLink className="h-4 w-4" />
                View Resume
              </Link>
            </div>

            <div className="mt-7 flex items-center justify-center gap-3 lg:justify-start">
              <Link
                href="https://github.com/Ketoransile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-accent/40 hover:text-accent"
                aria-label="GitHub"
              >
                <FiGithub className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/abdi-sileshi-56710a2a6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-accent/40 hover:text-accent"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:abdisileshi123@gmail.com"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-accent/40 hover:text-accent"
                aria-label="Email"
              >
                <FiMail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative h-[20rem] w-[17rem] sm:h-[25rem] sm:w-[21rem] lg:h-[30rem] lg:w-[24rem]">
              <div className="absolute inset-0 -rotate-3 rounded-[2rem] border border-accent/15 bg-accent/5" />
              <div className="absolute inset-0 rotate-2 rounded-[2rem] border border-border bg-background" />

              <div className="relative h-full overflow-hidden rounded-[2rem] border border-border bg-surface shadow-[0_20px_60px_rgba(17,24,39,0.14)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                <Image
                  src="/hero-profile.png"
                  alt="Abdi Sileshi Worku"
                  fill
                  priority
                  className="object-cover object-top"
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
