"use client";

import { motion } from "framer-motion";
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
];

const tools = [
    { title: "Figma", icon: "/toolsImage/figma.svg" },
    { title: "Git", icon: "/toolsImage/git.svg" },
    { title: "GitHub", icon: "/toolsImage/github.svg" },
    { title: "Netlify", icon: "/toolsImage/netlify.svg" },
    { title: "npm", icon: "/toolsImage/npm.svg" },
    { title: "Vercel", icon: "/toolsImage/vercel.svg" },
    { title: "Vite", icon: "/toolsImage/vite.svg" },
    { title: "VSCode", icon: "/toolsImage/vscode.svg" },
];

function SkillPill({
    skill,
    index,
    color,
}: {
    skill: { title: string; icon: string };
    index: number;
    color: "accent" | "purple";
}) {
    const hoverBorder =
        color === "accent" ? "hover:border-accent/40" : "hover:border-purple/40";
    const hoverShadow =
        color === "accent"
            ? "hover:shadow-[0_0_20px_rgba(99,102,241,0.1)]"
            : "hover:shadow-[0_0_20px_rgba(168,85,247,0.1)]";
    const hoverText =
        color === "accent" ? "group-hover:text-accent-light" : "group-hover:text-purple";

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.3, duration: 1.5 }}
            className={`group flex items-center gap-3 px-4 py-3 rounded-xl bg-surface border border-border ${hoverBorder} ${hoverShadow} transition-all duration-300 hover:-translate-y-1 cursor-default`}
        >
            <div className="relative w-7 h-7 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 dark:invert-0">
                <Image src={skill.icon} alt={skill.title} fill className="object-contain" />
            </div>
            <span
                className={`text-sm font-medium text-muted-foreground/70 ${hoverText} transition-colors whitespace-nowrap`}
            >
                {skill.title}
            </span>
        </motion.div>
    );
}

export default function Skills() {
    return (
        <section id="skills" className="relative py-24 sm:py-32">
            <div className="w-full">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-px w-12 bg-accent" />
                        <span className="text-accent font-mono text-sm font-medium tracking-wider uppercase">
                            Tech Stack
                        </span>
                    </div>
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Skills &{" "}
                        <span className="gradient-text">Technologies</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl">
                        My toolkit spans from intuitive frontends to scalable backends. I&apos;m
                        always exploring new technologies to deliver seamless, high-performance
                        solutions.
                    </p>
                </motion.div>

                {/* Marquee banner */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.1, delay: 0.8 }}
                    className="mb-16 overflow-hidden rounded-2xl bg-surface border border-border py-5"
                >
                    <div className="flex animate-marquee">
                        {[...techSkills, ...techSkills].map((skill, i) => (
                            <div
                                key={`marquee-${i}`}
                                className="flex items-center gap-2 mx-6 flex-shrink-0"
                            >
                                <div className="relative w-5 h-5">
                                    <Image
                                        src={skill.icon}
                                        alt={skill.title}
                                        fill
                                        className="object-contain opacity-50"
                                    />
                                </div>
                                <span className="text-sm text-muted-foreground font-medium whitespace-nowrap">
                                    {skill.title}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Tech Skills */}
                <div className="mb-12">
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-3"
                    >
                        <span className="w-2 h-2 rounded-full bg-accent" />
                        Languages & Frameworks
                    </motion.h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                        {techSkills.map((skill, i) => (
                            <SkillPill key={skill.title} skill={skill} index={i} color="accent" />
                        ))}
                    </div>
                </div>

                {/* Tools */}
                <div>
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-3"
                    >
                        <span className="w-2 h-2 rounded-full bg-accent" />
                        Tools & Platforms
                    </motion.h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                        {tools.map((tool, i) => (
                            <SkillPill key={tool.title} skill={tool} index={i} color="accent" />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
