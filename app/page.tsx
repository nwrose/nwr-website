"use client"

import Frontpage from "@/components/custom/frontpage"
import About from "@/components/custom/about"
import Projects from "@/components/custom/projects"
import Contact from "@/components/custom/contact"


export default function Home() {
  return (
    <>
    <div className="relative h-screen sm:snap-y sm:snap-mandatory overflow-y-scroll">
      <div className="sm:snap-start">
        <section id="home">
          <Frontpage/>
        </section>
      </div>
      <div className="sm:snap-start">
        <section id="about" >
          <About/>
        </section>
        <section id="experience">
          <Projects/>
        </section>
        <section id="contact">
          <Contact/>
        </section>
      </div>
    </div>
    </>
  );
}