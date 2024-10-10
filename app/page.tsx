"use client"

import Frontpage from "@/components/custom/frontpage"
import About from "@/components/custom/about"
import Projects from "@/components/custom/projects"
import Contact from "@/components/custom/contact"


export default function Home() {
  return (
    <>
    <div className="relative h-screen">
      <div id="home">
        <Frontpage/>
      </div>
      <div id="about">
        <About/>
      </div>
      <div id="experience">
        <Projects/>
      </div>
      <div id="contact">
        <Contact/>
      </div>
    </div>
    </>
  );
}