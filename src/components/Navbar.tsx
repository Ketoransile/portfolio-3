"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiHome, FiUser, FiFolder, FiCpu, FiBriefcase, FiMail, FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import { ModeToggle } from "@/components/ModeToggle";

const navLinks = [
    { name: "Home", href: "#home", icon: <FiHome size={20} /> },
    { name: "About", href: "#about", icon: <FiUser size={20} /> },
    { name: "Projects", href: "#projects", icon: <FiFolder size={20} /> },
    { name: "Skills", href: "#skills", icon: <FiCpu size={20} /> },
    { name: "Experience", href: "#experience", icon: <FiBriefcase size={20} /> },
    { name: "Contact", href: "#contact", icon: <FiMail size={20} /> },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
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

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* ─── Desktop Vertical Sidebar ─── */}
            <motion.nav
                initial={{ x: -80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="hidden lg:flex fixed left-0 top-0 z-50 h-screen w-[76px] flex-col items-center justify-between py-6 bg-white/60 dark:bg-[#0a0a0a]/60 backdrop-blur-xl border-r border-gray-200/80 dark:border-white/10"
            >
                {/* Logo */}
                <Link
                    href="#home"
                    className="group flex items-center justify-center"
                >
                    <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                        <span className="text-accent font-display font-bold text-base">
                            A
                        </span>
                    </div>
                </Link>

                {/* Nav Links */}
                <div className="flex flex-col items-center gap-1">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href.replace("#", "");
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`group relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                                    isActive
                                        ? "text-accent bg-accent/10 dark:bg-accent/15 border border-accent/25"
                                        : "text-muted-foreground hover:text-foreground hover:bg-surface-hover dark:hover:bg-white/5 border border-transparent"
                                }`}
                            >
                                {/* Active indicator bar */}
                                {isActive && (
                                    <motion.div
                                        layoutId="sidebarActive"
                                        className="absolute -left-[13px] top-1/2 -translate-y-1/2 w-[3px] h-5 bg-accent rounded-r-full"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                                    />
                                )}
                                {link.icon}

                                {/* Tooltip */}
                                <div className="absolute left-full ml-3 px-3 py-1.5 bg-foreground text-background text-xs font-medium rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-lg">
                                    {link.name}
                                    <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-foreground" />
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* Bottom Actions */}
                <div className="flex flex-col items-center gap-3">
                    <ModeToggle />
                    <Link
                        href="#contact"
                        className="w-10 h-10 rounded-xl bg-accent text-white flex items-center justify-center hover:bg-accent-dark transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:scale-105"
                        aria-label="Hire Me"
                    >
                        <span className="w-2 h-2 rounded-full bg-white animate-pulse-dot" />
                    </Link>
                </div>
            </motion.nav>

            {/* ─── Mobile Top Bar ─── */}
            <motion.nav
                initial={{ y: -60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="lg:hidden fixed z-50 w-full top-0 left-0"
            >
                <div className="bg-white/60 dark:bg-[#0a0a0a]/60 backdrop-blur-xl border-b border-gray-200/80 dark:border-white/10 px-4 py-3 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="#home" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-all duration-300">
                            <span className="text-accent font-display font-bold text-sm">A</span>
                        </div>
                        <span className="font-display font-semibold text-foreground hidden sm:block">
                            Abdi<span className="text-accent">.</span>
                        </span>
                    </Link>

                    <div className="flex items-center gap-3">
                        <ModeToggle />
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown */}
                <AnimatePresence>
                    {mobileOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-gray-200/80 dark:border-white/10 p-4"
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
                                        className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                                            activeSection === link.href.replace("#", "")
                                                ? "text-accent bg-accent/10 dark:bg-accent/20"
                                                : "text-muted-foreground hover:text-foreground hover:bg-surface dark:hover:bg-accent/10"
                                        }`}
                                    >
                                        {link.icon}
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
