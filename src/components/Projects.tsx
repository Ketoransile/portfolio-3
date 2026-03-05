"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Project {
    title: string;
    description: string;
    img: string;
    tech: { name: string; icon: string }[];
    live?: string;
    github?: string;
    backend?: string;
    featured?: boolean;
}

const projects: Project[] = [
    {
        title: "Reveal - AI Conversion Analyzer",
        description:
            "An innovative web application that leverages advanced AI (GPT-5.2) to analyze web page content and copy, predicting conversion rates and providing actionable feedback to optimize user engagement and sales.",
        img: "/projectsPictures/reveal.png",
        tech: [
            { name: "Next.js", icon: "/techIcons/next.svg" },
            { name: "TypeScript", icon: "/techIcons/typescript.svg" },
            { name: "Tailwind", icon: "/techIcons/tailwind.svg" },
            { name: "Supabase", icon: "/techIcons/supabase.svg" },
            { name: "OpenAI", icon: "/techIcons/openai.svg" },
        ],
        live: "https://reveal-analysis.vercel.app/",
        github: "https://github.com/Ketoransile/Reveal",
        featured: true,
    },
    {
        title: "AI-Powered Resume Analyzer",
        description:
            "An innovative web application that leverages AI (GPT-5) to analyze resumes against job descriptions, providing instant fit scores and actionable feedback to optimize job applications.",
        img: "/projectsPictures/resumeAnalyzer.png",
        tech: [
            { name: "Next.js", icon: "/techIcons/next.svg" },
            { name: "TypeScript", icon: "/techIcons/typescript.svg" },
            { name: "Tailwind", icon: "/techIcons/tailwind.svg" },
            { name: "MongoDB", icon: "/techIcons/mongodb.svg" },
            { name: "Node.js", icon: "/techIcons/node.svg" },
            { name: "OpenAI", icon: "/techIcons/openai.svg" },
        ],
        live: "https://elevatcv.vercel.app/",
        github: "https://github.com/Ketoransile/ResumeAnalyzerFrontend",
        backend: "https://github.com/Ketoransile/ResumeAnalyzerBackend",
        featured: true,
    },
    {
        title: "Ethio Shop Ecommerce",
        description:
            "A sleek and scalable ecommerce app built with modern tools like Next.js and Stripe. Features include product browsing, secure checkout, and responsive performance for a smooth shopping experience.",
        img: "/projectsPictures/ethioShop.png",
        tech: [
            { name: "Next.js", icon: "/techIcons/next.svg" },
            { name: "TypeScript", icon: "/techIcons/typescript.svg" },
            { name: "Tailwind", icon: "/techIcons/tailwind.svg" },
            { name: "Stripe", icon: "/techIcons/stripe.png" },
            { name: "MongoDB", icon: "/techIcons/mongodb.svg" },
        ],
        live: "https://ethio-shop.vercel.app/",
        github: "https://github.com/Ketoransile/EthioShop",
    },
    {
        title: "Drivezy Car Rental",
        description:
            "A comprehensive car-rental platform built with Vite, React, and TypeScript. Users can browse the fleet, filter cars by make, model, price, or features, and place bookings through a fast, responsive interface backed by a secure Node/Express API and MongoDB database.",
        img: "/projectsPictures/drivezyCarRental.png",
        tech: [
            { name: "React", icon: "/techIcons/react.svg" },
            { name: "TypeScript", icon: "/techIcons/typescript.svg" },
            { name: "Tailwind", icon: "/techIcons/tailwind.svg" },
            { name: "MongoDB", icon: "/techIcons/mongodb.svg" },
            { name: "Node.js", icon: "/techIcons/node.svg" },
            { name: "Express", icon: "/techIcons/express-js.svg" },
        ],
        live: "https://drivezy-car-rental.vercel.app/",
        github: "https://github.com/Ketoransile/CarRental",
    },
    {
        title: "NextJobs",
        description:
            "A modern job application platform built with Next.js and a Node.js/Express backend. Users can browse job listings, filter by category or location, and apply directly with an intuitive and responsive interface.",
        img: "/projectsPictures/nextJobs.png",
        tech: [
            { name: "Next.js", icon: "/techIcons/next.svg" },
            { name: "TypeScript", icon: "/techIcons/typescript.svg" },
            { name: "Tailwind", icon: "/techIcons/tailwind.svg" },
            { name: "Node.js", icon: "/techIcons/node.svg" },
            { name: "Express", icon: "/techIcons/express-js.svg" },
            { name: "MongoDB", icon: "/techIcons/mongodb.svg" },
        ],
        live: "https://job-portal-omega-flame.vercel.app/",
        github: "https://github.com/Ketoransile/JobPortal",
    },
    {
        title: "Bet Real Estate Platform",
        description:
            "A dynamic real estate platform built with the MERN stack. Enables users to explore properties, connect with agents, and manage listings through a clean, responsive interface and robust backend.",
        img: "/projectsPictures/betRealEstate.png",
        tech: [
            { name: "React", icon: "/techIcons/react.svg" },
            { name: "Tailwind", icon: "/techIcons/tailwind.svg" },
            { name: "Node.js", icon: "/techIcons/node.svg" },
            { name: "Express", icon: "/techIcons/express-js.svg" },
            { name: "MongoDB", icon: "/techIcons/mongodb.svg" },
        ],
        live: "https://bet-real-estate.vercel.app/",
        github: "https://github.com/Ketoransile/Bet-Real-EstateProject",
    },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
    return (
        <div className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} bg-surface border border-border hover:border-accent/30 transition-colors duration-500 rounded-3xl overflow-hidden shine-effect`}>
            {/* Image Section - Alternating sides on Desktop */}
            <div className={`relative w-full lg:w-2/5 aspect-[4/3] lg:aspect-auto border-b lg:border-b-0 ${index % 2 !== 0 ? 'lg:border-l' : 'lg:border-r'} border-border/50`}>
                <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover"
                />

                {project.featured && (
                    <div className="absolute top-4 left-4 z-10">
                        <Badge variant="secondary" className="bg-accent text-white font-semibold shadow-sm px-3 py-1 text-xs border border-white/10 backdrop-blur-md">
                            ★ Featured
                        </Badge>
                    </div>
                )}
            </div>

            {/* Content Section - Right side on Desktop */}
            <div className="flex flex-col flex-1 p-6 sm:p-8 lg:p-10 justify-between">
                <div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                        {project.title}
                    </h3>
                    <p className="text-[15px] sm:text-base text-muted-foreground leading-relaxed mb-6 lg:mb-8">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map((t) => (
                            <Badge key={t.name} variant="outline" className="bg-surface-hover/50 dark:bg-background/50 border-border text-foreground/80 dark:text-muted-foreground/90 font-medium py-1.5 px-3 gap-2 flex items-center rounded-lg">
                                <Image
                                    src={t.icon}
                                    alt={t.name}
                                    width={16}
                                    height={16}
                                    className="opacity-80"
                                />
                                {t.name}
                            </Badge>
                        ))}
                    </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-border/50">
                    {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-sm font-semibold rounded-xl hover:bg-accent-dark transition-colors border border-transparent">
                            <FiExternalLink />
                            Live Demo
                        </a>
                    )}
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface-hover text-foreground text-sm font-semibold rounded-xl hover:bg-accent/10 hover:text-accent transition-colors border border-border">
                            <FiGithub />
                            Code
                        </a>
                    )}
                    {project.backend && (
                        <a href={project.backend} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface-hover text-foreground text-sm font-semibold rounded-xl hover:bg-accent/10 hover:text-accent transition-colors border border-border">
                            <FiGithub />
                            Backend API
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="relative py-24 sm:py-32">
            <div className="w-full">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center sm:text-left"
                >
                    <div className="flex items-center gap-3 mb-4 justify-center sm:justify-start">
                        <div className="h-px w-8 bg-accent" />
                        <span className="text-accent font-mono text-sm font-medium tracking-wider uppercase">
                            Portfolio
                        </span>
                        <div className="h-px w-8 bg-accent" />
                    </div>
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Featured{" "}
                        <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto sm:mx-0">
                        A collection of real-world applications I&apos;ve built — from AI-powered
                        SaaS platforms to full-stack web solutions.
                    </p>
                </motion.div>

                {/* Project grid - Clean layout */}
                <div className="flex flex-col gap-12 sm:gap-16">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.title} project={project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
