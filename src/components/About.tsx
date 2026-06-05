"use client";

import { FiCode, FiDatabase, FiGlobe, FiServer } from "react-icons/fi";

const highlights = [
  {
    icon: <FiGlobe className="h-5 w-5" />,
    title: "Frontend",
    desc: "React, Next.js, Tailwind CSS, responsive interfaces, and clear user flows.",
  },
  {
    icon: <FiServer className="h-5 w-5" />,
    title: "Backend",
    desc: "Node.js, Express, FastAPI, REST APIs, authentication, and service design.",
  },
  {
    icon: <FiDatabase className="h-5 w-5" />,
    title: "Data",
    desc: "MongoDB, PostgreSQL, Supabase, Redis, and data models for real products.",
  },
  {
    icon: <FiCode className="h-5 w-5" />,
    title: "AI Products",
    desc: "OpenAI integrations, RAG workflows, AI analysis tools, and practical automation.",
  },
];

const stats = [
  { value: "15+", label: "Projects Built" },
  { value: "3+", label: "Years Building" },
  { value: "4.0", label: "CGPA" },
];

export default function About() {
  return (
    <section id="about" className="relative py-16 sm:py-20">
      <div className="w-full">
        <div className="mb-10 text-center sm:text-left">
          <div className="mb-4 flex items-center justify-center gap-3 sm:justify-start">
            <div className="h-px w-8 bg-accent" />
            <span className="font-mono text-sm font-medium uppercase tracking-wider text-accent">
              About
            </span>
            <div className="h-px w-8 bg-accent" />
          </div>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Software engineer focused on{" "}
            <span className="gradient-text">useful web products</span>
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <div className="space-y-5">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I am Abdi Sileshi Worku, a graduating Software Engineering
                student who builds full-stack applications with React, Next.js,
                Node.js, databases, and AI tools.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                I like projects that are practical: tools for document search,
                resume analysis, ecommerce, rental booking, job listings, and
                real estate discovery. I care about clean interfaces, reliable
                backend logic, and making the product easy to understand.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                My current focus is becoming sharper at production-ready
                full-stack development: strong TypeScript, clear architecture,
                useful AI features, and simple user experiences.
              </p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border bg-background p-4 text-center"
                >
                  <div className="font-display text-2xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs font-medium text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/30"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
                  {item.icon}
                </div>
                <h3 className="font-display font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
