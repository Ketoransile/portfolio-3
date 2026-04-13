"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiExternalLink, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const roles = [
    "Full-Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Problem Solver"
];

export default function Hero() {
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
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 lg:pt-16 pb-20"
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

                        {/* Title - Emphasizing Software Engineer */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.7 }}
                            className="font-display text-2xl sm:text-3xl lg:text-4xl text-foreground font-semibold mb-2"
                        >
                            Software Engineer
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.7 }}
                            className="text-base sm:text-lg text-accent-light font-medium mb-6 h-6 flex items-center justify-center lg:justify-start"
                        >
                            <span className="mr-2 text-muted-foreground/50">✦</span>
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={currentRoleIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-muted-foreground whitespace-nowrap"
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
                                robust and beautiful digital experiences
                            </span>.{" "}
                            As a passionate software professional, I focus on turning complex,
                            real-world problems into elegant, scalable solutions that make an impact.
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
                                className="group flex items-center gap-3 px-7 py-3.5 bg-accent text-white font-semibold rounded-xl hover:bg-accent-dark transition-all duration-300 shadow-lg shadow-accent/25 dark:shadow-none dark:md:shadow-lg dark:md:shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 dark:hover:shadow-none dark:md:hover:shadow-xl hover:-translate-y-0.5"
                            >
                                View My Work
                                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="https://drive.google.com/file/d/1bqmJFrNjhmys262Ear6ZuCF3cAIsuHzm/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-3 px-7 py-3.5 border border-border text-muted-foreground/70 font-semibold rounded-xl hover:border-accent/40 hover:text-foreground hover:bg-accent/5 transition-all duration-300 hover:-translate-y-0.5"
                            >
                                <FiExternalLink className="group-hover:scale-110 transition-transform" />
                                View Resume
                            </Link>
                        </motion.div>

                        {/* Social links */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9 }}
                            className="flex items-center gap-4 justify-center lg:justify-start"
                        >
                            <Link
                                href="https://github.com/Ketoransile"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-xl border border-border text-muted-foreground hover:text-foreground hover:border-accent/40 hover:bg-accent/5 transition-all duration-300"
                                aria-label="GitHub"
                            >
                                <FiGithub size={20} />
                            </Link>
                            <Link
                                href="https://linkedin.com/in/abdi-sileshi-56710a2a6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-xl border border-border text-muted-foreground hover:text-foreground hover:border-accent/40 hover:bg-accent/5 transition-all duration-300"
                                aria-label="LinkedIn"
                            >
                                <FiLinkedin size={20} />
                            </Link>
                            <Link
                                href="mailto:abdisileshi123@gmail.com"
                                className="p-3 rounded-xl border border-border text-muted-foreground hover:text-foreground hover:border-accent/40 hover:bg-accent/5 transition-all duration-300"
                                aria-label="Email"
                            >
                                <FiMail size={20} />
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Profile image */}
                    <motion.div
                        className="order-1 lg:order-2 flex-shrink-0"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="relative mx-auto lg:mx-0 w-[17rem] h-[20rem] sm:w-[21rem] sm:h-[25rem] lg:w-[24rem] lg:h-[30rem] mb-4 lg:mb-0">
                            <div className="absolute -inset-4 rounded-[2.75rem] bg-gradient-to-br from-accent/20 via-accent/5 to-transparent blur-3xl" />
                            <div className="absolute inset-0 -rotate-6 rounded-[2.75rem] border border-accent/15 bg-accent/5" />
                            <div className="absolute inset-0 rotate-3 rounded-[2.75rem] border border-border/60 bg-background/50 backdrop-blur-sm" />

                            <div className="relative h-full overflow-hidden rounded-[2.75rem] border border-border/70 bg-white/70 dark:bg-[#0a0a0a]/70 shadow-[0_20px_60px_rgba(17,24,39,0.18)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                                <div className="absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-accent/20 to-transparent" />
                                <Image
                                    src="/hero-profile.png"
                                    alt="Abdi Sileshi Worku"
                                    fill
                                    priority
                                    className="object-cover object-top scale-[1.03]"
                                />

                                {/* Gradient fade at the bottom for badge readability */}
                                <div className="absolute inset-x-0 bottom-0 z-[5] h-32 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />

                                <div className="absolute inset-x-0 bottom-0 z-10 p-3 sm:p-4">
                                    <div className="rounded-2xl border border-white/15 bg-black/40 px-3 py-2.5 sm:px-4 sm:py-3 text-white backdrop-blur-md">
                                        <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-white/70">
                                            Software Engineer
                                        </p>
                                        <p className="mt-0.5 text-xs sm:text-sm font-medium">
                                            Building clean interfaces & scalable products
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating badge — outside the image so it doesn't cover the head */}
                            <div className="absolute -right-4 -top-3 z-20 rounded-2xl border border-border/70 bg-background/90 px-4 py-2.5 shadow-xl backdrop-blur-md">
                                <div className="flex items-center gap-2">
                                    <span className="text-base">🤖</span>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Focus</p>
                                        <p className="text-sm font-semibold text-foreground">AI + Full-Stack</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
