"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Experience {
    title: string;
    company: string;
    type: string;
    date: string;
    location: string;
    description?: string;
    logo: string;
}

const workExperience: Experience[] = [
    {
        title: "Full Stack Developer",
        company: "Information Network Security Administration (INSA)",
        type: "Internship",
        date: "Jul 2025 – Sep 2025 · 3 mos",
        location: "Addis Ababa, Ethiopia · On-site",
        description: "Built a microservice-oriented inventory management application with a React frontend during my Software Developer Internship at INSA.",
        logo: "/insa_logo.png",
    },
    {
        title: "Full Stack Engineer",
        company: "Ministry of Innovation and Technology (MinT)",
        type: "Internship",
        date: "Jul 2024 – Sep 2024 · 3 mos",
        location: "Addis Ababa, Ethiopia · On-site",
        description:
            "Developed a scalable real estate website using the MERN stack during a two-month internship. Spearheaded both frontend and backend development, enhancing UI/UX with React and Material-UI while optimizing performance and security.",
        logo: "/mit_logo.png",
    },
];



export default function Experience() {
    return (
        <section id="experience" className="relative py-24 sm:py-32">
            <div className="w-full">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-px w-8 bg-accent" />
                        <span className="text-accent font-mono text-sm font-medium tracking-wider uppercase">
                            Journey
                        </span>
                        <div className="h-px w-8 bg-accent" />
                    </div>
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Work <span className="gradient-text">Experience</span>
                    </h2>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {/* Experience Column */}
                    <div>
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-xl font-display font-bold text-foreground mb-8 flex items-center justify-center sm:justify-start gap-3"
                        >
                            <span className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">💼</span>
                            Work Experience
                        </motion.h3>

                        <div className="space-y-6">
                            {workExperience.map((exp, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: i * 0.2, duration: 0.5 }}
                                    className="relative"
                                >
                                    <div className="hidden sm:block absolute left-[-41px] top-6 w-5 h-5 rounded-full bg-surface border-4 border-accent z-10" />
                                    <div className="hidden sm:block absolute left-[-32px] top-10 bottom-[-40px] w-0.5 bg-border z-0" />

                                    <div className="group p-6 rounded-2xl bg-surface border border-border hover:border-accent/30 transition-all duration-300 glow-card hover:-translate-y-1">
                                        <div className="flex flex-col sm:flex-row gap-4 sm:items-start mb-4">
                                            <div className="w-14 h-14 rounded-xl bg-surface border border-border flex items-center justify-center p-2 flex-shrink-0 shadow-inner">
                                                <div className="relative w-full h-full">
                                                    <Image
                                                        src={exp.logo}
                                                        alt={exp.company}
                                                        fill
                                                        className="object-contain"
                                                        onError={(e) => {
                                                            // Fallback if image fails to load
                                                            (e.target as HTMLImageElement).src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236366f1' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='2' y='7' width='20' height='14' rx='2' ry='2'%3E%3C/rect%3E%3Cpath d='M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16'%3E%3C/path%3E%3C/svg%3E`;
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-lg font-bold text-foreground group-hover:text-accent-light transition-colors">{exp.title}</h4>
                                                <div className="flex flex-wrap items-center gap-2 text-sm mt-1">
                                                    <span className="font-medium text-accent">{exp.company}</span>
                                                    <span className="text-muted-foreground/70 px-2 py-0.5 rounded-full bg-surface border border-border text-xs">{exp.type}</span>
                                                </div>
                                                <p className="text-xs text-muted-foreground font-mono mt-2">{exp.date} &bull; {exp.location}</p>
                                            </div>
                                        </div>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {exp.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
