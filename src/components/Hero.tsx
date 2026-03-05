"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin } from "react-icons/fi";

export default function Hero() {
    const roles = [
        "Software Engineer",
        "Full-Stack Developer",
        "Frontend Developer",
        "Backend Developer"
    ];

    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20"
        >
            <div className="relative z-10 w-full">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
                    {/* Text content */}
                    <motion.div
                        className="flex-1 text-center lg:text-left order-2 lg:order-1"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* Status badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 mb-6"
                        >
                            <span className="w-2 h-2 rounded-full bg-success animate-pulse-dot" />
                            <span className="text-sm text-muted-foreground/70 font-medium">
                                Available for freelance work
                            </span>
                        </motion.div>

                        {/* Name */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.7 }}
                            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4"
                        >
                            <span className="text-foreground">Hi, I&apos;m</span>
                            <br />
                            <span className="gradient-text">Abdi Sileshi</span>
                        </motion.h1>

                        {/* Role */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.7 }}
                            className="text-xl sm:text-2xl text-muted-foreground/70 font-medium mb-6 h-8 flex items-center justify-center lg:justify-start overflow-hidden relative"
                        >
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={currentRoleIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute"
                                >
                                    {roles[currentRoleIndex]}
                                </motion.span>
                            </AnimatePresence>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.7 }}
                            className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
                        >
                            I craft{" "}
                            <span className="text-foreground font-medium">
                                scalable, beautiful web applications
                            </span>{" "}
                            using Next.js, React, Node.js & modern tools. Turning complex
                            problems into elegant digital solutions.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.7 }}
                            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-8"
                        >
                            <Link
                                href="#projects"
                                className="group flex items-center gap-3 px-7 py-3.5 bg-accent text-white font-semibold rounded-xl hover:bg-accent-dark transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5"
                            >
                                View My Work
                                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="https://drive.google.com/file/d/1L9sYzYjDeH14Hqpj6eYLIQ-i6v7V-0ro/view?usp=drive_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-3 px-7 py-3.5 border border-border text-muted-foreground/70 font-semibold rounded-xl hover:border-accent/40 hover:text-foreground hover:bg-accent/5 transition-all duration-300 hover:-translate-y-0.5"
                            >
                                <FiDownload className="group-hover:-translate-y-0.5 transition-transform" />
                                Download Resume
                            </Link>
                        </motion.div>

                        {/* Social links */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9 }}
                            className="flex items-center gap-4 justify-center lg:justify-start"
                        >
                            <a
                                href="https://github.com/Ketoransile"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-xl border border-border text-muted-foreground hover:text-foreground hover:border-accent/40 hover:bg-accent/5 transition-all duration-300"
                                aria-label="GitHub"
                            >
                                <FiGithub size={20} />
                            </a>
                            <a
                                href="https://linkedin.com/in/abdi-sileshi-56710a2a6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-xl border border-border text-muted-foreground hover:text-foreground hover:border-accent/40 hover:bg-accent/5 transition-all duration-300"
                                aria-label="LinkedIn"
                            >
                                <FiLinkedin size={20} />
                            </a>
                            <span className="h-6 w-px bg-border" />
                            <a
                                href="mailto:abdisileshi123@gmail.com"
                                className="text-sm text-muted-foreground hover:text-accent transition-colors font-mono"
                            >
                                abdisileshi123@gmail.com
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Profile image */}
                    <motion.div
                        className="order-1 lg:order-2 flex-shrink-0"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="relative">
                            {/* Image container */}
                            <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-[22rem] lg:h-[22rem] rounded-full overflow-hidden border-4 border-accent/20 dark:border-accent/40 shadow-2xl shine-effect">
                                <Image
                                    src="/myFinalImage.png"
                                    alt="Abdi Sileshi Worku"
                                    fill
                                    className="object-cover scale-105 hover:scale-100 transition-transform duration-700"
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
