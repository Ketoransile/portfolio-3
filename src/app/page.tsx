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
      "https://github.com/Ketoransile",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
  };

  return (
    <main className="min-h-screen overflow-x-hidden selection:bg-accent/40 selection:text-white">
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <div className="lg:ml-[76px]">
        <div className="mx-auto w-full max-w-[120rem] px-4 sm:px-8 lg:px-20 xl:px-32 2xl:px-40">
          <Hero />
          <div className="mx-auto h-px w-full max-w-[90rem] bg-gradient-to-r from-transparent via-border to-transparent" />
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
