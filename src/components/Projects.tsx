"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  FiArrowUpRight,
  FiCheckCircle,
  FiExternalLink,
  FiGithub,
  FiLayers,
} from "react-icons/fi";

interface Project {
  title: string;
  type: string;
  role: string;
  focus: string;
  outcome: string;
  description: string;
  img: string;
  tech: { name: string; icon: string }[];
  highlights: string[];
  live?: string;
  github?: string;
  backend?: string;
}

const projects: Project[] = [
  // {
  //   title: "Enterprise Graph RAG",
  //   type: "Full-Stack AI Platform",
  //   role: "Full-stack engineer",
  //   focus: "Graph-based RAG, multi-tenant RBAC, knowledge retrieval",
  //   outcome:
  //     "A multi-tenant enterprise platform that ingests documents, builds a knowledge graph, and lets users query it through a conversational AI interface with role-based access control.",
  //   description:
  //     "Enterprise Graph RAG combines vector search, BM25 keyword search, and Reciprocal Rank Fusion to retrieve the most relevant document chunks. It builds a Neo4j knowledge graph from uploaded documents, enforces strict RBAC security filtering before any data reaches the LLM, and provides an interactive graph explorer for visualizing entity relationships.",
  //   img: "/projectsPictures/enterprise-graph-rag.png",
  //   tech: [
  //     { name: "Next.js", icon: "/techIcons/next.svg" },
  //     { name: "TypeScript", icon: "/techIcons/typescript.svg" },
  //     { name: "Tailwind", icon: "/techIcons/tailwind.svg" },
  //     { name: "Python", icon: "/techIcons/python.svg" },
  //     { name: "FastAPI", icon: "/techIcons/fastapi.svg" },
  //     { name: "PostgreSQL", icon: "/techIcons/postgresql.svg" },
  //     { name: "Neo4j", icon: "/techIcons/neo4j.svg" },
  //     { name: "Redis", icon: "/techIcons/redis.svg" },
  //     { name: "OpenAI", icon: "/techIcons/openai.svg" },
  //     { name: "Docker", icon: "/techIcons/docker.svg" },
  //   ],
  //   highlights: [
  //     "Hybrid retrieval pipeline with vector search, BM25, and Reciprocal Rank Fusion",
  //     "Interactive knowledge graph explorer with entity filtering and relationship inspection",
  //     "Multi-tenant architecture with strict RBAC security filtering across 4 clearance levels",
  //     "Real-time streaming chat with document citations and conversation history",
  //     "Async document ingestion via Celery workers with PDF and DOCX parsing",
  //   ],
  //   live: "https://enterprise-graph-rag.vercel.app/",
  //   github: "https://github.com/Ketoransile/Enterprise-Graph-Rag",
  // },

  {
    title: "Reveal - AI Conversion Analyzer",
    type: "AI SaaS Product",
    role: "Product engineer",
    focus: "AI analysis, UX scoring, SaaS workflow",
    outcome:
      "A focused AI tool that reviews website copy and explains how to improve conversion.",
    description:
      "Reveal analyzes page content, estimates conversion quality, and returns practical recommendations that are easy to act on.",
    img: "/projectsPictures/reveal.png",
    tech: [
      { name: "Next.js", icon: "/techIcons/next.svg" },
      { name: "TypeScript", icon: "/techIcons/typescript.svg" },
      { name: "Tailwind", icon: "/techIcons/tailwind.svg" },
      { name: "Supabase", icon: "/techIcons/supabase.svg" },
      { name: "OpenAI", icon: "/techIcons/openai.svg" },
    ],
    highlights: [
      "AI-powered website and copy analysis",
      "Conversion scoring with actionable recommendations",
      "Clean SaaS-style interface with fast feedback loops",
    ],
    live: "https://reveal-analysis.vercel.app/",
    github: "https://github.com/Ketoransile/Reveal",
  },
  {
    title: "AI-Powered Resume Analyzer",
    type: "AI Career Tool",
    role: "Full-stack developer",
    focus: "Resume parsing, AI scoring, backend API",
    outcome:
      "A job-search assistant that compares resumes with job descriptions and gives fit feedback.",
    description:
      "The app scores resume alignment, explains gaps, and helps applicants improve the way they present their experience.",
    img: "/projectsPictures/resumeAnalyzer.png",
    tech: [
      { name: "Next.js", icon: "/techIcons/next.svg" },
      { name: "TypeScript", icon: "/techIcons/typescript.svg" },
      { name: "Tailwind", icon: "/techIcons/tailwind.svg" },
      { name: "MongoDB", icon: "/techIcons/mongodb.svg" },
      { name: "Node.js", icon: "/techIcons/node.svg" },
      { name: "OpenAI", icon: "/techIcons/openai.svg" },
    ],
    highlights: [
      "Resume to job-description match scoring",
      "Separate frontend and backend repositories",
      "AI feedback designed around practical application decisions",
    ],
    live: "https://elevatcv.vercel.app/",
    github: "https://github.com/Ketoransile/ResumeAnalyzerFrontend",
    backend: "https://github.com/Ketoransile/ResumeAnalyzerBackend",
  },
  {
    title: "Ethio Shop Ecommerce",
    type: "Commerce Platform",
    role: "Full-stack developer",
    focus: "Checkout, product browsing, payments",
    outcome:
      "A modern ecommerce storefront with product browsing, responsive pages, and secure payment flow.",
    description:
      "I built the product experience, checkout path, and data-backed shopping flow using a modern Next.js stack.",
    img: "/projectsPictures/ethioShop.png",
    tech: [
      { name: "Next.js", icon: "/techIcons/next.svg" },
      { name: "TypeScript", icon: "/techIcons/typescript.svg" },
      { name: "Tailwind", icon: "/techIcons/tailwind.svg" },
      { name: "Stripe", icon: "/techIcons/stripe.png" },
      { name: "MongoDB", icon: "/techIcons/mongodb.svg" },
    ],
    highlights: [
      "Product catalog and shopping experience",
      "Stripe checkout integration",
      "Responsive UI optimized for browsing and purchase flow",
    ],
    live: "https://ethio-shop.vercel.app/",
    github: "https://github.com/Ketoransile/EthioShop",
  },
  {
    title: "Drivezy Car Rental",
    type: "Booking Platform",
    role: "Full-stack developer",
    focus: "Filtering, bookings, API design",
    outcome:
      "A car-rental workflow where users can browse, filter, and book vehicles quickly.",
    description:
      "Drivezy combines a React interface with a Node/Express API and MongoDB database for vehicle inventory and bookings.",
    img: "/projectsPictures/drivezyCarRental.png",
    tech: [
      { name: "React", icon: "/techIcons/react.svg" },
      { name: "TypeScript", icon: "/techIcons/typescript.svg" },
      { name: "Tailwind", icon: "/techIcons/tailwind.svg" },
      { name: "MongoDB", icon: "/techIcons/mongodb.svg" },
      { name: "Node.js", icon: "/techIcons/node.svg" },
      { name: "Express", icon: "/techIcons/express-js.svg" },
    ],
    highlights: [
      "Fleet browsing with useful filters",
      "Booking workflow backed by an Express API",
      "MongoDB data model for inventory and reservations",
    ],
    live: "https://drivezy-car-rental.vercel.app/",
    github: "https://github.com/Ketoransile/CarRental",
  },
  {
    title: "NextJobs",
    type: "Job Marketplace",
    role: "Full-stack developer",
    focus: "Listings, filters, applications",
    outcome:
      "A job board experience with searchable listings and a direct application flow.",
    description:
      "NextJobs lets users browse roles by category and location, then apply through a responsive interface connected to backend services.",
    img: "/projectsPictures/nextJobs.png",
    tech: [
      { name: "Next.js", icon: "/techIcons/next.svg" },
      { name: "TypeScript", icon: "/techIcons/typescript.svg" },
      { name: "Tailwind", icon: "/techIcons/tailwind.svg" },
      { name: "Node.js", icon: "/techIcons/node.svg" },
      { name: "Express", icon: "/techIcons/express-js.svg" },
      { name: "MongoDB", icon: "/techIcons/mongodb.svg" },
    ],
    highlights: [
      "Job browsing by category and location",
      "Application flow connected to backend services",
      "Responsive UI built for fast scanning",
    ],
    live: "https://job-portal-omega-flame.vercel.app/",
    github: "https://github.com/Ketoransile/JobPortal",
  },
  {
    title: "Bet Real Estate Platform",
    type: "Real Estate App",
    role: "MERN developer",
    focus: "Listings, agents, property discovery",
    outcome:
      "A property discovery platform with listing management and agent connection flows.",
    description:
      "The platform supports property browsing, agent contact, and listing workflows through a responsive MERN stack application.",
    img: "/projectsPictures/betRealEstate.png",
    tech: [
      { name: "React", icon: "/techIcons/react.svg" },
      { name: "Tailwind", icon: "/techIcons/tailwind.svg" },
      { name: "Node.js", icon: "/techIcons/node.svg" },
      { name: "Express", icon: "/techIcons/express-js.svg" },
      { name: "MongoDB", icon: "/techIcons/mongodb.svg" },
    ],
    highlights: [
      "Property browsing and listing management",
      "Agent contact and discovery workflows",
      "MERN architecture with a clean responsive frontend",
    ],
    live: "https://bet-real-estate.vercel.app/",
    github: "https://github.com/Ketoransile/Bet-Real-EstateProject",
  },
];

function ProjectStack({ tech, limit }: { tech: Project["tech"]; limit?: number }) {
  const visibleTech = limit ? tech.slice(0, limit) : tech;
  const hiddenCount = limit && tech.length > limit ? tech.length - limit : 0;

  return (
    <div className="flex flex-wrap items-center gap-2">
      {visibleTech.map((item) => (
        <span
          key={item.name}
          className="inline-flex h-8 items-center gap-2 rounded-md border border-border bg-background px-2.5 text-xs font-medium text-muted-foreground"
        >
          <span className="relative flex h-4 w-4 shrink-0 items-center justify-center overflow-hidden rounded bg-zinc-950">
            <Image src={item.icon} alt={item.name} fill className="object-contain p-0.5" />
          </span>
          <span className="max-w-[7rem] truncate">{item.name}</span>
        </span>
      ))}
      {hiddenCount ? (
        <span className="inline-flex h-8 items-center rounded-md border border-border bg-surface-hover px-2.5 text-xs font-semibold text-foreground">
          +{hiddenCount}
        </span>
      ) : null}
    </div>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {project.live ? (
        <Link
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center gap-2 rounded-lg bg-accent px-4 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
        >
          <FiExternalLink className="h-4 w-4" />
          Live
        </Link>
      ) : null}
      {project.github ? (
        <Link
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center gap-2 rounded-lg border border-border bg-surface-hover px-4 text-sm font-semibold text-foreground transition-colors hover:border-accent/40 hover:text-accent"
        >
          <FiGithub className="h-4 w-4" />
          Code
        </Link>
      ) : null}
      {project.backend ? (
        <Link
          href={project.backend}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center gap-2 rounded-lg border border-border bg-surface-hover px-4 text-sm font-semibold text-foreground transition-colors hover:border-accent/40 hover:text-accent"
        >
          <FiGithub className="h-4 w-4" />
          API
        </Link>
      ) : null}
    </div>
  );
}

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];
  const liveCount = projects.filter((project) => project.live).length;
  const stackCount = new Set(
    projects.flatMap((project) => project.tech.map((tech) => tech.name)),
  ).size;

  return (
    <section id="projects" className="relative py-16 sm:py-20">
      <div className="w-full">
        <div className="mb-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="text-center sm:text-left">
            <div className="mb-4 flex items-center justify-center gap-3 sm:justify-start">
              <div className="h-px w-8 bg-accent" />
              <span className="font-mono text-sm font-medium uppercase tracking-wider text-accent">
                Portfolio
              </span>
              <div className="h-px w-8 bg-accent" />
            </div>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
              Project <span className="gradient-text">Snapshot</span>
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              A quick overview of the projects I have built, the problems they solve,
              and the technologies behind them.
            </p>
          </div>

          <div className="grid grid-cols-3 overflow-hidden rounded-2xl border border-border bg-surface">
            {[
              { value: projects.length, label: "Projects" },
              { value: liveCount, label: "Live demos" },
              { value: stackCount, label: "Tech used" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className={`px-4 py-3 text-center ${index > 0 ? "border-l border-border" : ""}`}
              >
                <div className="font-display text-2xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="mt-0.5 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[minmax(300px,0.85fr)_minmax(0,1.35fr)]">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <FiLayers className="h-4 w-4 text-accent" />
                Project Index
              </div>
              <span className="text-xs font-medium text-muted-foreground">
                Select one
              </span>
            </div>

            <div className="divide-y divide-border">
              {projects.map((project, index) => {
                const isActive = activeIndex === index;

                return (
                  <button
                    key={project.title}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveIndex(index)}
                    className={`group flex w-full items-center gap-3 px-3 py-3 text-left transition-colors ${isActive
                      ? "bg-accent/10 text-foreground"
                      : "bg-surface text-muted-foreground hover:bg-surface-hover"
                      }`}
                  >
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md border text-xs font-bold ${isActive
                        ? "border-accent/40 bg-accent text-white"
                        : "border-border bg-background text-muted-foreground"
                        }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="relative hidden h-11 w-16 shrink-0 overflow-hidden rounded-md border border-border bg-background sm:block">
                      <Image
                        src={project.img}
                        alt={project.title}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-semibold text-foreground">
                        {project.title}
                      </span>
                      <span className="mt-1 block truncate text-xs font-medium text-muted-foreground">
                        {project.type}
                      </span>
                    </span>

                    <FiArrowUpRight
                      className={`h-4 w-4 shrink-0 transition-transform ${isActive
                        ? "text-accent"
                        : "text-muted-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                        }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          <article className="overflow-hidden rounded-2xl border border-border bg-surface">
            <div className="p-5 sm:p-6 lg:p-7">
              <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="mb-2 inline-flex rounded-md bg-accent/10 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-accent">
                    {activeProject.type}
                  </p>
                  <h3 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                    {activeProject.title}
                  </h3>
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {activeProject.outcome}
                  </p>
                  <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                    {activeProject.description}
                  </p>
                </div>
                <p className="shrink-0 text-xs font-medium text-muted-foreground">
                  {activeIndex + 1} of {projects.length}
                </p>
              </div>

              <div className="mb-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-background p-3">
                  <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Role
                  </div>
                  <div className="mt-1 text-sm font-semibold text-foreground">
                    {activeProject.role}
                  </div>
                </div>
                <div className="rounded-xl border border-border bg-background p-3">
                  <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Focus
                  </div>
                  <div className="mt-1 text-sm font-semibold text-foreground">
                    {activeProject.focus}
                  </div>
                </div>
              </div>

              <div className="mb-5 grid gap-2 md:grid-cols-3">
                {activeProject.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex gap-2 rounded-lg bg-background px-3 py-2 text-sm text-muted-foreground"
                  >
                    <FiCheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="mb-5">
                <h4 className="mb-3 text-sm font-bold text-foreground">Stack</h4>
                <ProjectStack tech={activeProject.tech} />
              </div>

              <div className="flex flex-wrap items-center gap-3 border-t border-border pt-5">
                <ProjectLinks project={activeProject} />
              </div>
            </div>

            <div className="relative h-64 overflow-hidden border-t border-border bg-background sm:h-72 lg:h-80">
              <Image
                key={activeProject.img}
                src={activeProject.img}
                alt={activeProject.title}
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover object-top"
                priority={activeIndex === 0}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
