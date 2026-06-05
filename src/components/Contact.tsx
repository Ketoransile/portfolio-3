"use client";

import { useState } from "react";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const contactDetails = {
  email: "abdisileshi123@gmail.com",
  phone: "+251 988 734 632",
  location: "Addis Ababa, Ethiopia",
  github: "https://github.com/Ketoransile",
  linkedin: "https://linkedin.com/in/abdi-sileshi-56710a2a6",
};

const contactLinks = [
  {
    label: "Email",
    value: contactDetails.email,
    href: `mailto:${contactDetails.email}`,
    icon: <FiMail className="h-5 w-5" />,
  },
  {
    label: "Phone",
    value: contactDetails.phone,
    href: `tel:${contactDetails.phone}`,
    icon: <FiPhone className="h-5 w-5" />,
  },
  {
    label: "GitHub",
    value: "github.com/Ketoransile",
    href: contactDetails.github,
    icon: <FiGithub className="h-5 w-5" />,
  },
  {
    label: "LinkedIn",
    value: "abdi-sileshi",
    href: contactDetails.linkedin,
    icon: <FiLinkedin className="h-5 w-5" />,
  },
];

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
        body: formDataToSubmit,
      });

      const data = await response.json();
      if (data.success) {
        toast.success("Message sent successfully.");
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        toast.error("Failed to send message. Please try again later.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-16 sm:py-20">
      <div className="w-full">
        <div className="mb-10 text-center sm:text-left">
          <div className="mb-4 flex items-center justify-center gap-3 sm:justify-start">
            <div className="h-px w-8 bg-accent" />
            <span className="font-mono text-sm font-medium uppercase tracking-wider text-accent">
              Contact
            </span>
            <div className="h-px w-8 bg-accent" />
          </div>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Let&apos;s <span className="gradient-text">connect</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I am open to software engineering opportunities, internships, and
            collaborations around full-stack and AI-enabled products.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <h3 className="font-display text-xl font-bold text-foreground">
              Contact Details
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              The fastest way to reach me is by email. I am based in Ethiopia
              and work in EAT time.
            </p>

            <div className="mt-6 grid gap-3">
              {contactLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 rounded-xl border border-border bg-background p-4 transition-colors hover:border-accent/40 hover:text-accent"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    {item.icon}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {item.label}
                    </span>
                    <span className="block truncate text-sm font-semibold text-foreground">
                      {item.value}
                    </span>
                  </span>
                </Link>
              ))}

              <div className="flex items-center gap-3 rounded-xl border border-border bg-background p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <FiMapPin className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Location
                  </span>
                  <span className="block text-sm font-semibold text-foreground">
                    {contactDetails.location}
                  </span>
                </span>
              </div>
            </div>
          </aside>

          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <h3 className="font-display text-xl font-bold text-foreground">
              Send a Message
            </h3>

            {submitted ? (
              <div className="mt-6 flex min-h-64 flex-col items-center justify-center rounded-2xl border border-success/30 bg-success/10 p-6 text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-success/20 text-success">
                  <FiSend className="h-6 w-6" />
                </div>
                <h4 className="text-xl font-bold text-success">Message Sent</h4>
                <p className="mt-2 text-muted-foreground">
                  Thanks for reaching out. I will get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-muted-foreground">
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-12 rounded-xl border-border bg-background px-4 text-foreground focus-visible:ring-accent"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-muted-foreground">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-12 rounded-xl border-border bg-background px-4 text-foreground focus-visible:ring-accent"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-muted-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="resize-none rounded-xl border-border bg-background px-4 py-4 text-foreground focus-visible:ring-accent"
                    placeholder="Hi Abdi, I would like to talk about..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-12 rounded-xl bg-accent px-8 font-bold text-white hover:bg-accent-dark"
                >
                  {isSubmitting ? (
                    <span className="h-5 w-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                  ) : (
                    <>
                      Send Message
                      <FiSend className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
