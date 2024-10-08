import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import { Separator } from '@radix-ui/react-separator';

const REFRESH_TIME = 40000 // refresh after 40s since last refresh


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
        setReloadKey(reloadKey+1);
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
        <div className='h-screen w-[100%] fontsize-20 text-4xl flex bg-secondary'>
            <div className="max-w-[5%] w-[5%] h-[100%] flex flex-col justify-around items-center -z-10 md:z-10">
                <div className="space-y-1 shadow-md rounded cursor-hover-pixel bg-gray-100">
                    <div/>
                    <div className='hover:bg-violet-300 rounded m-2'>
                        <a href="https://www.linkedin.com/in/nathan-rosenberg-a6a151259/">
                            <Image src="linkedin-dark.svg" alt="linkedin" width={75} height={75}/>
                        </a>
                    </div>
                    <Separator/>
                    <div className='hover:bg-violet-300 rounded m-2'>
                        <a href="https://www.github.com/nwrose/">
                            <Image src="github-dark.svg" alt="github" width={75} height={75}/>
                        </a>
                    </div>
                    <div/>
                </div>
            </div>
            <div className='h-screen w-[90%] flex items-center flex-col justify-between p-4 '>
                <div className='flex flex-col h-[80%] justify-around items-center w-full md:w-[60%] p-5 mb-4'>
                    <div className='flex text-4xl md:text-6xl text-primary font-bold'>
                        <p className=''> Hello, World!</p>
                        <span className="wave">👋</span>
                    </div>
                    <div key={reloadKey} className='relative w-[80%] min-w-[475px] h-[50%] bg-green-950 cursor-pixel border-t-4 border-l-4 border-b-4 border-r-4 border-gray-500 border-t-gray-300 border-l-gray-300 border-b-gray-600 border-r-gray-600 shadow-md'>
                        <button id="refresh-button" className="absolute right-1 bottom-1 lg:top-1 lg:bottom-auto text-2xl p-1 rounded cursor-hover-pixel" onClick={handleRefresh}>🔄</button>
                        <p className='typewriter'> I'm Nathan Rosenberg.</p>
                        <p className='typewriter-2'>Full-Stack Developer.</p>
                        <p className='typewriter-3'>Recent Graduate of the</p>
                        <p className='typewriter-4'>University of Michigan.</p>
                        <p className='typewriter-5'>Lover of Vintage Stuff.</p>
                        <p className='typewriter-6'>Scroll for More Info :)</p>
                    </div>
                </div>
            </div>
        </div>
    );
}