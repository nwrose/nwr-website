"use client"

import Experience from "@/components/custom/experience"
import Frontpage from "@/components/custom/frontpage"
import About from "@/components/custom/about"

export default function Home() {
  return (
    <>
    <div className="relative h-screen snap-y snap-mandatory overflow-y-scroll">
      <div className="snap-start">
        <Frontpage/>
      </div>  
      <div className="snap-start">
        <About/>
        <Experience/>
      </div>
    </div>
    </>
  );
}