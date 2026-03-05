import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
];

export default function Footer() {
    return (
        <footer className="relative border-t border-border bg-surface pt-16 pb-8 overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-32 bg-accent/5 blur-3xl -z-10" />

            <div className="w-full max-w-[90rem] mx-auto px-4 sm:px-8 lg:px-16 xl:px-24">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="md:col-span-2 space-y-4">
                        <Link href="#home" className="flex items-center gap-2 group w-max">
                            <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                                <span className="text-accent font-display font-bold text-sm">
                                    A
                                </span>
                            </div>
                            <span className="font-display font-semibold text-foreground text-xl">
                                Abdi<span className="text-accent">.</span>
                            </span>
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                            A passionate Software Engineer dedicated to crafting scalable, beautiful,
                            and user-centric digital experiences using modern web technologies.
                        </p>
                        <div className="flex items-center gap-4 pt-2">
                            <Link
                                href="https://github.com/Ketoransile"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-accent hover:bg-accent/10 transition-all duration-300"
                                aria-label="GitHub"
                            >
                                <FiGithub size={18} />
                            </Link>
                            <Link
                                href="https://linkedin.com/in/abdi-sileshi-56710a2a6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-accent hover:bg-accent/10 transition-all duration-300"
                                aria-label="LinkedIn"
                            >
                                <FiLinkedin size={18} />
                            </Link>
                            <Link
                                href="mailto:abdisileshi123@gmail.com"
                                className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-accent hover:bg-accent/10 transition-all duration-300"
                                aria-label="Email"
                            >
                                <FiMail size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="font-display font-semibold text-foreground">Quick Links</h4>
                        <ul className="space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-accent transition-colors block py-1"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Info */}
                    <div className="space-y-4">
                        <h4 className="font-display font-semibold text-foreground">Contact</h4>
                        <ul className="space-y-3">
                            <li className="text-sm text-muted-foreground flex items-start gap-3">
                                <span className="font-medium text-muted-foreground/70 mt-0.5">Location:</span>
                                Addis Ababa, Ethiopia
                            </li>
                            <li className="text-sm text-muted-foreground flex items-start gap-3">
                                <span className="font-medium text-muted-foreground/70 mt-0.5">Timezone:</span>
                                EAT (UTC+3)
                            </li>
                        </ul>
                        <Link
                            href="#contact"
                            className="inline-block mt-4 text-sm font-medium text-accent hover:text-accent-light transition-colors underline-offset-4 hover:underline"
                        >
                            Start a conversation &rarr;
                        </Link>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-muted-foreground font-mono">
                        &copy; {new Date().getFullYear()} Abdi Sileshi Worku. All rights reserved.
                    </p>

                    <Link
                        href="#home"
                        className="group flex items-center gap-2 text-xs font-medium text-muted-foreground/70 hover:text-foreground transition-colors"
                    >
                        Back to top
                        <div className="w-8 h-8 rounded-full bg-surface dark:bg-surface-hover border border-border flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent/30 group-hover:text-accent transition-all duration-300">
                            <FiArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
