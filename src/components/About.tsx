"use client";

import { motion } from "framer-motion";
import { FiCode, FiGlobe, FiServer, FiZap } from "react-icons/fi";

const highlights = [
    {
        icon: <FiGlobe className="w-5 h-5" />,
        title: "Frontend Mastery",
        desc: "React, Next.js, Tailwind CSS — creating pixel-perfect, responsive interfaces.",
    },
    {
        icon: <FiServer className="w-5 h-5" />,
        title: "Backend Architecture",
        desc: "Node.js, Express, MongoDB, PostgreSQL — building robust, scalable APIs.",
    },
    {
        icon: <FiCode className="w-5 h-5" />,
        title: "Full-Stack Delivery",
        desc: "End-to-end development from concept to deployment on Vercel & cloud platforms.",
    },
    {
        icon: <FiZap className="w-5 h-5" />,
        title: "Modern Tooling",
        desc: "TypeScript, Stripe, Supabase, OpenAI — integrating cutting-edge technologies.",
    },
];

export default function About() {
    return (
        <section id="about" className="relative py-24 sm:py-32">
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
                            About Me
                        </span>
                    </div>
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
                        Passionate about building
                        <br />
                        <span className="gradient-text">impactful digital products</span>
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Bio text */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <p className="text-lg text-muted-foreground/70 leading-relaxed">
                            I am a dedicated{" "}
                            <span className="text-foreground font-medium">
                                Software Engineer
                            </span>{" "}
                            with a passion for building full-stack web applications using
                            modern technologies like Next.js, React, and Tailwind CSS.
                        </p>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            My journey in tech began with a curiosity for solving real-world
                            problems through innovative solutions, which evolved into a love
                            for crafting user-centric digital experiences. I specialize in
                            backend development using{" "}
                            <span className="text-foreground font-medium">
                                Node.js, Express, and MongoDB
                            </span>
                            , ensuring robust performance and server-side logic.
                        </p>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            Having earned my B.Sc. in Software Engineering from Adama Science
                            and Technology University, I&apos;ve spent over 3 years turning complex
                            requirements into seamless, scalable web applications. I thrive in collaborative
                            environments, effectively utilizing over 15+ modern technologies to tackle
                            challenging problems with creative, user-focused solutions.
                        </p>

                        {/* Quick stats */}
                        <div className="grid grid-cols-3 gap-4 pt-4">
                            {[
                                { value: "15+", label: "Projects Built" },
                                { value: "3+", label: "Years Exp." },
                                { value: "15+", label: "Technologies" },
                            ].map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + i * 0.1 }}
                                    className="text-center p-4 rounded-xl bg-surface border border-border"
                                >
                                    <div className="text-2xl font-display font-bold gradient-text">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs text-muted-foreground mt-1 font-medium">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Highlight cards */}
                    <div className="grid sm:grid-cols-2 gap-4">
                        {highlights.map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                                className="group p-5 rounded-2xl bg-surface border border-border hover:border-accent/30 transition-all duration-400 shine-effect glow-card cursor-default"
                            >
                                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-4 group-hover:bg-accent/20 transition-colors">
                                    {item.icon}
                                </div>
                                <h3 className="font-display font-semibold text-foreground mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
