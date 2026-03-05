"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import { ModeToggle } from "@/components/ModeToggle";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Determine active section
            const sections = navLinks.map((l) => l.href.replace("#", ""));
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 100) {
                        setActiveSection(sections[i]);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${scrolled
                    ? "w-[92%] max-w-3xl"
                    : "w-[95%] max-w-4xl"
                    }`}
            >
                <div
                    className={`bg-white/60 dark:bg-black/60 backdrop-blur-2xl rounded-3xl px-6 py-3 flex items-center justify-between transition-all duration-500 ${scrolled ? "shadow-lg shadow-accent/5 dark:shadow-accent/0" : ""
                        }`}
                >
                    {/* Logo */}
                    <Link
                        href="#home"
                        className="flex items-center gap-2 group"
                    >
                        <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-all duration-300">
                            <span className="text-accent font-display font-bold text-sm">
                                A
                            </span>
                        </div>
                        <span className="font-display font-semibold text-foreground hidden sm:block">
                            Abdi<span className="text-accent">.</span>
                        </span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`relative px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-300 ${activeSection === link.href.replace("#", "")
                                    ? "text-accent-dark dark:text-foreground"
                                    : "text-muted-foreground hover:text-foreground"
                                    }`}
                            >
                                {activeSection === link.href.replace("#", "") && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="absolute inset-0 bg-accent/10 dark:bg-accent/20 border border-accent/20 rounded-lg"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10">{link.name}</span>
                            </Link>
                        ))}
                    </div>

                    {/* CTA + Mobile toggle */}
                    <div className="flex items-center gap-3">
                        <ModeToggle />
                        <Link
                            href="#contact"
                            className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-accent text-white rounded-lg hover:bg-accent-dark transition-all duration-300 shadow-lg shadow-accent/20"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse-dot" />
                            Hire Me
                        </Link>

                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="glass rounded-2xl mt-2 p-4"
                        >
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${activeSection === link.href.replace("#", "")
                                            ? "text-accent bg-accent/10 dark:bg-accent/20"
                                            : "text-muted-foreground hover:text-foreground hover:bg-surface"
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <Link
                                href="#contact"
                                onClick={() => setMobileOpen(false)}
                                className="block mt-3 px-4 py-3 text-sm font-medium bg-accent text-white rounded-lg text-center"
                            >
                                Hire Me
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </>
    );
}
