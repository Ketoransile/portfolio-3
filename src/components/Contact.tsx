"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FiSend, FiMail, FiMapPin, FiPhone, FiGithub, FiLinkedin } from "react-icons/fi";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const contactDetails = {
    name: "Abdi Sileshi Worku",
    email: "abdisileshi123@gmail.com",
    phone: "+251 988 734 632",
    location: "Addis Ababa, Ethiopia",
    github: "https://github.com/Ketoransile",
    linkedin: "https://linkedin.com/in/abdi-sileshi-56710a2a6",
};

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const formDataToSubmit = new FormData();
            formDataToSubmit.append("access_key", "ae571f37-8e03-4b62-a37a-c558f552db2e");
            formDataToSubmit.append("name", formData.name);
            formDataToSubmit.append("email", formData.email);
            formDataToSubmit.append("message", formData.message);

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formDataToSubmit
            });

            const data = await response.json();
            if (data.success) {
                toast.success("Message Sent Successfully!");
                setSubmitted(true);
                setFormData({ name: "", email: "", message: "" });

                // Reset success message after 5 seconds
                setTimeout(() => setSubmitted(false), 5000);
            } else {
                toast.error("Failed to send message. Please try again later.");
            }
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="relative py-24 sm:py-32">
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
                            Get In Touch
                        </span>
                        <div className="h-px w-8 bg-accent" />
                    </div>
                    <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4">
                        Let's build something{" "}
                        <span className="text-accent">together</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Whether you have a question, a project proposal, or just want to say hi,
                        I'll try my best to get back to you!
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-12 items-stretch">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2 h-full"
                    >
                        <Card className="h-full rounded-3xl bg-surface border-border shine-effect glow-card border pb-2 overflow-hidden flex flex-col">
                            <CardContent className="p-8 sm:p-10 flex flex-col h-full">
                                <h3 className="text-2xl font-display font-bold text-foreground mb-6">
                                    Contact Information
                                </h3>

                                <div className="space-y-6 lg:space-y-8 flex-1">
                                    <div className="flex items-start gap-4 group">
                                        <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 flex-shrink-0">
                                            <FiMail className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground/70 font-medium mb-1">Email Me At</p>
                                            <a href={`mailto:${contactDetails.email}`} className="text-foreground hover:text-accent font-medium transition-colors break-all">
                                                {contactDetails.email}
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 group">
                                        <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 flex-shrink-0">
                                            <FiPhone className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground/70 font-medium mb-1">Call Me At</p>
                                            <a href={`tel:${contactDetails.phone}`} className="text-foreground hover:text-accent font-medium transition-colors">
                                                {contactDetails.phone}
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 group">
                                        <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 flex-shrink-0">
                                            <FiMapPin className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground/70 font-medium mb-1">Location</p>
                                            <p className="text-foreground font-medium">
                                                {contactDetails.location}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-3 h-full"
                    >
                        <div className="h-full flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-surface to-surface-hover border border-border shadow-2xl shadow-accent/5 dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)] relative overflow-hidden">
                            {/* Decorative gradient */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10" />

                            <h3 className="text-2xl font-display font-bold text-foreground mb-6">
                                Send a Message
                            </h3>

                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="p-6 rounded-2xl bg-success/10 border border-success/30 flex flex-col items-center justify-center text-center h-64"
                                >
                                    <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center text-success mb-4">
                                        <FiSend size={24} />
                                    </div>
                                    <h4 className="text-xl font-bold text-success mb-2">Message Sent!</h4>
                                    <p className="text-muted-foreground/70">
                                        Thanks for reaching out. I'll get back to you as soon as possible.
                                    </p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-medium text-muted-foreground/70">
                                                Your Name <span className="text-accent">*</span>
                                            </label>
                                            <Input
                                                id="name"
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full bg-surface border-border text-foreground focus-visible:ring-accent h-12 rounded-xl px-5"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium text-muted-foreground/70">
                                                Your Email <span className="text-accent">*</span>
                                            </label>
                                            <Input
                                                id="email"
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full bg-surface border-border text-foreground focus-visible:ring-accent h-12 rounded-xl px-5"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium text-muted-foreground/70">
                                            Your Message <span className="text-accent">*</span>
                                        </label>
                                        <Textarea
                                            id="message"
                                            required
                                            rows={5}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full bg-surface border-border text-foreground focus-visible:ring-accent resize-none rounded-xl px-5 py-4"
                                            placeholder="Hi Abdi, I'd like to talk about..."
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full sm:w-auto h-12 px-8 bg-accent text-white hover:bg-accent-dark font-bold rounded-xl shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all duration-300 gap-3"
                                    >
                                        {isSubmitting ? (
                                            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        ) : (
                                            <>
                                                Send Message
                                                <FiSend />
                                            </>
                                        )}
                                    </Button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
