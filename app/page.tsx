"use client"

import Frontpage from "@/components/custom/frontpage";
import About from "@/components/custom/about";
import Projects from "@/components/custom/projects";
import Contact from "@/components/custom/contact";
import { useState, useEffect } from "react";


export default function Home() {
  const [position, setPosition] = useState({x: 0, y: 0});

  // load in the custom cursor effect on page load
  useEffect(() => {
    // handle mouse moving around screen
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({x: event.clientX, y: event.clientY});
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
    <div className="relative">
      <div className="custom-cursor-inner hidden sm:block bg-violet-700" style={{transform: `translate(${position.x - 3}px, ${position.y - 3}px)`}}></div>
      <div className="custom-cursor-outer hidden sm:block border-violet-700" style={{transform: `translate(${position.x - 17}px, ${position.y - 17}px)`}}></div>
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