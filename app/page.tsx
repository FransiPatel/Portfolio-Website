import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-slate-200 selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Footer />
    </main>
  );
}
