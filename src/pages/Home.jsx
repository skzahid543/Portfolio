import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Counters from "../components/Counters";
import About from "../components/About";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Certificates from "../components/Certificates";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      <Navbar />
      <Hero />
      <Counters />
      <About />
      <Services />
      <Skills />
      <Experience />
      <Projects />
      <Certificates />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}