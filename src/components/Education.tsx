"use client";

import { motion } from "framer-motion";

const education = {
    degree: "B.Eng. Software Engineering",
    school: "Adama Science and Technology University (ASTU)",
    year: "Expected July 2026",
    location: "Adama, Ethiopia",
};

const courseCategories = [
    {
        category: "Software Engineering",
        courses: [
            "Fundamentals of Software Engineering",
            "Software Requirements Engineering",
            "Software Architecture & Design",
            "Software Process & Project Management",
            "Software Testing & Quality Assurance",
            "Software Evolution & Maintenance"
        ]
    },
    {
        category: "Core Computer Science",
        courses: [
            "Data Structures & Algorithms",
            "Discrete Mathematics for CS",
            "Computer Architecture & Organization",
            "Operating Systems"
        ]
    },
    {
        category: "Programming & Dev",
        courses: [
            "Fundamentals of Programming",
            "Object-Oriented Programming",
            "Advanced Programming",
            "Unix/Linux Programming"
        ]
    },
    {
        category: "Data & Systems",
        courses: [
            "Database Systems",
            "Data Communication & Networks",
            "Distributed Software Systems"
        ]
    },
    {
        category: "Web & App Dev",
        courses: [
            "Engineering Web Based Systems",
            "Mobile App Design & Development"
        ]
    },
    {
        category: "AI & Modern Tech",
        courses: [
            "Introduction to Artificial Intelligence",
            "Introduction to Machine Learning",
            "Intro to Natural Language Processing",
            "Blockchain & Cryptocurrency"
        ]
    }
];

export default function Education() {
    return (
        <section id="education" className="relative py-24 sm:py-32">
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
                            Academia
                        </span>
                        <div className="h-px w-8 bg-accent" />
                    </div>
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                        My <span className="gradient-text">Education</span>
                    </h2>
                    <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
                        My academic journey forms the foundation of my technical knowledge, enabling me to solve complex problems with structured approaches.
                    </p>
                </motion.div>

                <div className="w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5 }}
                        className="p-8 sm:p-10 rounded-3xl bg-surface border border-border hover:border-accent/30 transition-all duration-300 shadow-xl shadow-accent/5 dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1 relative overflow-hidden group w-full"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10" />

                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-8 pb-8 border-b border-border/50">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                                <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-3xl flex-shrink-0 shadow-inner">
                                    🎓
                                </div>
                                <div>
                                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-2 group-hover:text-accent-light transition-colors">
                                        {education.degree}
                                    </h3>
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground">
                                        <p className="text-lg text-accent font-medium">{education.school}</p>
                                        <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-border" />
                                        <div className="flex items-center gap-1.5 text-sm">
                                            <span>📍</span>
                                            <span>{education.location}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 bg-surface-hover border border-border/50 px-4 py-2 rounded-xl self-start sm:self-auto">
                                <span className="text-muted-foreground/70">📅</span>
                                <span className="font-mono text-sm font-medium text-foreground">{education.year}</span>
                            </div>
                        </div>

                        <div className="space-y-8 mt-4">
                            <div>
                                <h4 className="text-sm font-semibold text-foreground mb-6 uppercase tracking-wider text-muted-foreground/80 flex items-center gap-3">
                                    Relevant Coursework
                                    <span className="h-px bg-border flex-1" />
                                </h4>
                                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-y-8 gap-x-6">
                                    {courseCategories.map((cat, i) => (
                                        <div key={i} className="group/cat">
                                            <h5 className="text-accent text-sm font-semibold mb-3 tracking-wide">{cat.category}</h5>
                                            <ul className="space-y-2">
                                                {cat.courses.map((course, j) => (
                                                    <li key={j} className="text-sm text-muted-foreground flex items-start gap-2 group-hover/cat:text-foreground/80 transition-colors">
                                                        <span className="text-accent/50 mt-[3px] text-xs">▹</span>
                                                        <span className="leading-tight">{course}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="p-6 rounded-2xl bg-accent/5 border border-accent/10 relative flex items-start gap-4">
                                <div className="text-4xl text-accent/20 flex-shrink-0 mt-[-8px]">"</div>
                                <p className="text-base text-accent-light italic relative z-10 leading-relaxed">
                                    Consistently pursuing academic excellence and gaining hands-on technical experience in full-stack software engineering.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
