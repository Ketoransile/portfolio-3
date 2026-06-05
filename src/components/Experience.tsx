"use client";

import Image from "next/image";
import { FiBriefcase, FiMapPin } from "react-icons/fi";

interface Experience {
  title: string;
  company: string;
  type: string;
  date: string;
  location: string;
  description: string;
  logo: string;
  work: string[];
}

const workExperience: Experience[] = [
  {
    title: "Full Stack Developer",
    company: "Information Network Security Administration (INSA)",
    type: "Internship",
    date: "Jul 2025 - Sep 2025",
    location: "Addis Ababa, Ethiopia",
    description:
      "Built a microservice-oriented inventory management application with a React frontend during my Software Developer Internship.",
    logo: "/insa_logo.png",
    work: [
      "Worked on frontend screens and product flow for inventory management",
      "Connected UI workflows with service-oriented backend logic",
      "Practiced working in a real engineering environment",
    ],
  },
  {
    title: "Full Stack Engineer",
    company: "Ministry of Innovation and Technology (MinT)",
    type: "Internship",
    date: "Jul 2024 - Sep 2024",
    location: "Addis Ababa, Ethiopia",
    description:
      "Developed a scalable real estate website using the MERN stack, covering frontend, backend, UI polish, and performance improvements.",
    logo: "/mit_logo.png",
    work: [
      "Built React interfaces for property discovery and listing workflows",
      "Implemented backend features with Node.js, Express, and MongoDB",
      "Improved responsiveness, usability, and application structure",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-16 sm:py-20">
      <div className="w-full">
        <div className="mb-10 text-center sm:text-left">
          <div className="mb-4 flex items-center justify-center gap-3 sm:justify-start">
            <div className="h-px w-8 bg-accent" />
            <span className="font-mono text-sm font-medium uppercase tracking-wider text-accent">
              Experience
            </span>
            <div className="h-px w-8 bg-accent" />
          </div>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Practical <span className="gradient-text">Work Experience</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Internship experience where I worked on real systems, frontend
            screens, backend APIs, and product workflows.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {workExperience.map((exp) => (
            <article
              key={`${exp.company}-${exp.date}`}
              className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/30"
            >
              <div className="mb-5 flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-border bg-background p-2">
                  <div className="relative h-full w-full">
                    <Image
                      src={exp.logo}
                      alt={exp.company}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {exp.title}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-accent">
                    {exp.company}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2 text-xs font-medium text-muted-foreground">
                    <span className="inline-flex items-center gap-1 rounded-md border border-border bg-background px-2 py-1">
                      <FiBriefcase className="h-3.5 w-3.5" />
                      {exp.type}
                    </span>
                    <span className="rounded-md border border-border bg-background px-2 py-1">
                      {exp.date}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-md border border-border bg-background px-2 py-1">
                      <FiMapPin className="h-3.5 w-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {exp.description}
              </p>

              <ul className="mt-5 grid gap-2">
                {exp.work.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg bg-background px-3 py-2 text-sm text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
