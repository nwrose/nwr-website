import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import { Separator } from '@radix-ui/react-separator';
import { motion } from "framer-motion";

const REFRESH_TIME = 43000 // refresh after 45s since last refresh


export default function Frontpage() {
    const [reloadKey, setReloadKey] = useState(0);
    const intervalRef = useRef<number | null>(null);

    const startInterval = () => {
        if(intervalRef.current){
            clearInterval(intervalRef.current)
        }

        intervalRef.current = window.setInterval(() => {
            setReloadKey(reloadKey+1);
        }, REFRESH_TIME)
    }

    const handleRefresh = () => {
        setReloadKey(prev => prev + 1);
        startInterval();
    }

    useEffect(() => {
        startInterval();
        return () => {
            if(intervalRef.current){
                clearInterval(intervalRef.current);
            }
        }
    }, [reloadKey]);

    return(
        <div className='sm:h-screen w-full fontsize-20 text-4xl flex '>
            <div className="max-w-[5%] w-0 sm:w-[5%] h-[100%] flex flex-col justify-around items-center -z-10 md:z-10 ">
                <div className="space-y-1 shadow-md rounded cursor-hover-pixel bg-popover">
                    <div/>
                    <div className='hover:bg-violet-300 ease-in-out duration-300 rounded m-1'>
                        <a href="https://www.linkedin.com/in/nathan-rosenberg-a6a151259/">
                            <Image src="/pngs/linkedin-light.png" alt="linkedin" width={75} height={75} className='hidden dark:block'/>
                            <Image src="/linkedin-dark.svg" alt="linkedin" width={75} height={75} className='dark:hidden'/>
                        </a>
                    </div>
                    <Separator/>
                    <div className='hover:bg-violet-300 ease-in-out duration-300 rounded m-1'>
                        <a href="https://www.github.com/nwrose/">
                            <Image src="/pngs/github-light.png" alt="github" width={75} height={75} className='hidden dark:block'/>
                            <Image src="/github-dark.svg" alt="github" width={75} height={75} className='dark:hidden'/>
                        </a>
                    </div>
                    <div/>
                </div>
            </div>
            <div className='h-[30vh] sm:h-screen w-[100%] sm:w-[90%] flex flex-col items-center justify-between pt-24 sm:pt-4 md:pt-8 z-40'>
                <div className='flex flex-col h-[80%] justify-around items-center w-[100%] md:w-[60%] py-5 mb-4'>
                    <div className='flex text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary font-bold pb-2 scroll-in'>
                        <motion.p className='' initial={{ opacity: 0, y: -20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 1, ease: "easeOut" }}>
                            <span className='text-shadow-subtleViolet sm:text-shadow-violet'>
                                Hello, World!
                            </span>
                        </motion.p>
                    </div>
                    <motion.div 
                        className='relative text-xs min-h-[100px] sm:text-lg w-[95vw] sm:w-[475px] md:w-[600px] h-[50%] bg-green-950 cursor-pixel border-4 border-gray-500 border-t-gray-300 border-l-gray-300 border-b-gray-600 border-r-gray-600 dark:shadow-sm dark:shadow-violet-600'
                        initial={{ opacity: 0, y: 0, scale: 0.85 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <div key={reloadKey}>
                            <button id="refresh-button" className="absolute right-1 bottom-0 lg:top-0 lg:bottom-auto text-lg sm:text-2xl p-1 rounded cursor-hover-pixel typewriter-refresh hover:font-extrabold" onClick={handleRefresh}>↻</button>
                            <p className='typewriter typewriter-1'>Hi, I&#39;m Nate Rosenberg.</p>
                            <p className='typewriter typewriter-2'>Full-Stack Developer :D</p>
                            <p className='typewriter typewriter-3'>Recent Graduate of the</p>
                            <p className='typewriter typewriter-4'>University of Michigan.</p>
                            <p className='typewriter typewriter-5'>Lover of Vintage Stuff.</p>
                            <p className='typewriter typewriter-6'>Scroll for More Info :)</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}