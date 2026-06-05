"use client";

import Image from "next/image";

const techSkills = [
  { title: "HTML", icon: "/techIcons/html.svg" },
  { title: "CSS", icon: "/techIcons/css.svg" },
  { title: "JavaScript", icon: "/techIcons/javascript.svg" },
  { title: "TypeScript", icon: "/techIcons/typescript.svg" },
  { title: "React", icon: "/techIcons/react.svg" },
  { title: "Next.js", icon: "/techIcons/next.svg" },
  { title: "Tailwind CSS", icon: "/techIcons/tailwind.svg" },
  { title: "Material UI", icon: "/techIcons/material.svg" },
  { title: "Node.js", icon: "/techIcons/node.svg" },
  { title: "Express.js", icon: "/techIcons/express-js.svg" },
  { title: "MongoDB", icon: "/techIcons/mongodb.svg" },
  { title: "PostgreSQL", icon: "/techIcons/postgresql.svg" },
  { title: "Supabase", icon: "/techIcons/supabase.svg" },
  { title: "Stripe", icon: "/techIcons/stripe.png" },
  { title: "React Native", icon: "/techIcons/react.svg" },
  { title: "Expo", icon: "/techIcons/expo.svg" },
  { title: "Python", icon: "/techIcons/python.svg" },
  { title: "C++", icon: "/techIcons/cpp.svg" },
  { title: "OpenAI", icon: "/techIcons/openai.svg" },
  { title: "FastAPI", icon: "/techIcons/fastapi.svg" },
  { title: "Neo4j", icon: "/techIcons/neo4j.svg" },
  { title: "Redis", icon: "/techIcons/redis.svg" },
];

const tools = [
  { title: "Figma", icon: "/toolsImage/figma.svg" },
  { title: "Git", icon: "/toolsImage/git.svg" },
  { title: "GitHub", icon: "/toolsImage/github.svg" },
  { title: "Docker", icon: "/toolsImage/docker.svg" },
  { title: "Netlify", icon: "/toolsImage/netlify.svg" },
  { title: "npm", icon: "/toolsImage/npm.svg" },
  { title: "Vercel", icon: "/toolsImage/vercel.svg" },
  { title: "Railway", icon: "/techIcons/railway.svg" },
  { title: "Vite", icon: "/toolsImage/vite.svg" },
  { title: "VSCode", icon: "/toolsImage/vscode.svg" },
];

function SkillPill({ skill }: { skill: { title: string; icon: string } }) {
  return (
    <div className="group flex min-h-12 items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 transition-colors hover:border-accent/40 hover:bg-surface-hover">
      <div className="relative h-6 w-6 shrink-0">
        <Image src={skill.icon} alt={skill.title} fill className="object-contain" />
      </div>
      <span className="truncate text-sm font-medium text-muted-foreground group-hover:text-foreground">
        {skill.title}
      </span>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-16 sm:py-20">
      <div className="w-full">
        <div className="mb-10 text-center sm:text-left">
          <div className="mb-4 flex items-center justify-center gap-3 sm:justify-start">
            <div className="h-px w-8 bg-accent" />
            <span className="font-mono text-sm font-medium uppercase tracking-wider text-accent">
              Tech Stack
            </span>
            <div className="h-px w-8 bg-accent" />
          </div>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Tools I use to build frontend interfaces, backend APIs, databases,
            deployments, and AI-powered product features.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_0.65fr]">
          <div>
            <h3 className="mb-4 flex items-center gap-3 font-display text-xl font-bold text-foreground">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Languages & Frameworks
            </h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
              {techSkills.map((skill) => (
                <SkillPill key={skill.title} skill={skill} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 flex items-center gap-3 font-display text-xl font-bold text-foreground">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Tools & Platforms
            </h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
              {tools.map((tool) => (
                <SkillPill key={tool.title} skill={tool} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
