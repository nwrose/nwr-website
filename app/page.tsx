"use client"

import Frontpage from "@/components/custom/frontpage"
import About from "@/components/custom/about"
import Experience from "@/components/custom/experience"
import Contact from "@/components/custom/contact"


export default function Home() {
  return (
    <>
    <div className="relative h-screen snap-y snap-mandatory overflow-y-scroll">
      <div className="snap-start">
        <section id="home">
          <Frontpage/>
        </section>
      </div>  
      <div className="snap-start">
        <section id="about" >
          <About/>
        </section>
        <section id="experience">
          <Experience/>
        </section>
        <section id="contact">
          <Contact/>
        </section>
      </div>
    </div>
    </>
  );
}