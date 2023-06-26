import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Shelf from "@/components/Shelf";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="h-screen bg-white snap-y overflow-scroll overflow-x-hidden snap-mandatory z-0 scrollbar-thin scrollbar-track-gray-400/40 scrollbar-thumb-[#f7ab0a] scrollbar-corner-neutral-600">
      <title>Manaswi Hegde</title>

      <Header />

      <section id="hero" className=" snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center ">
        <About />
      </section>

      <section id="shelf" className="snap-center ">
        <Shelf />
      </section>

      <section id="projects" className="snap-center ">
        <Projects />
      </section>

      <section id="skills" className="snap-center ">
        <Skills percentage={0} src={""} skillName={""} />
      </section>

      <section id="contact" className="snap-center">
        <ContactMe />
      </section>

  
    </div>
  );
}
