import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Education from "@/components/Education";
import Script from "next/script";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abdi Sileshi Worku",
    alternateName: "Abdi Sileshi",
    url: "https://www.abdisileshi.dev",
    jobTitle: "Full-Stack Software Engineer",
    sameAs: [
      "https://linkedin.com/in/abdi-sileshi-56710a2a6",
      "https://github.com/Ketoransile"
    ],
    worksFor: {
      "@type": "Organization",
      name: "Freelance"
    }
  };

  return (
    <main className="min-h-screen overflow-x-hidden selection:bg-accent/40 selection:text-white">
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* 
        Single-page layout orchestrator.
        Sidebar nav on desktop, top bar on mobile.
        Components handle their own scroll animations. 
      */}
      <Navbar />

      {/* Main content — offset right on desktop to account for sidebar */}
      <div className="lg:ml-[76px]">
        <div className="w-full max-w-[120rem] mx-auto px-4 sm:px-8 lg:px-20 xl:px-32 2xl:px-40">
          <Hero />

          {/* Decorative divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent max-w-[90rem] mx-auto" />

          <About />
          <Projects />
          <Skills />
          <Experience />
          <Education />
          <Contact />
        </div>
        <Footer />
      </div>
    </main>
  );
}
