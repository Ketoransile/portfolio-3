import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Education from "@/components/Education";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden selection:bg-accent/40 selection:text-white">
      {/* 
        Single-page layout orchestrator.
        Components handle their own scroll animations. 
      */}
      <Navbar />
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
    </main>
  );
}
