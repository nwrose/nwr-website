"use client"

import Navbar from "@/components/custom/navbar-top"
import {Separator} from "@/components/ui/separator"
import About from "@/components/custom/about-me" 
import Experience from "@/components/custom/experience"
import Offline from "@/components/custom/offline"

export default function Home() {
  return (
    <>
    <div className="relative h-screen snap-y snap-mandatory overflow-y-scroll">
      <div className="snap-start">
        <About/>
      </div>  
      <div className="snap-start">
        <Experience/>
      </div>
      <div className="snap-start">
        <Offline/>
      </div>
    </div>
    </>
  );
}