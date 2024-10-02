import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';

const REFRESH_TIME = 35250 // refresh after 35.25s since last refresh


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
        <>
        <div className='h-screen w-[100%] flex items-center flex-col justify-between p-4 fontsize-20 text-4xl text-orange-100 bg-gray-800'>
            <div className='flex flex-col h-[80%] justify-around items-center w-full md:w-[60%] bg-gray-800 p-5 mb-4'>
                <p className='text-4xl md:text-6xl lg:text-8xl'> Hello, World!<span className="wave">👋</span> </p>
                <div key={reloadKey} className='relative w-[80%] min-w-[475px] h-[50%] bg-black border-2 border-zinc-500 cursor-pixel'>
                    <button id="refresh-button" className="absolute top-2 right-2 text-xl p-1 rounded cursor-hover-pixel" onClick={handleRefresh}>🔄</button>
                    <p className='typewriter'> I'm Nathan Rosenberg.</p>
                    <p className='typewriter-2'>Full-Stack Developer.</p>
                    <p className='typewriter-3'>Recent Graduate of the</p>
                    <p className='typewriter-4'>University of Michigan.</p>
                    <p className='typewriter-5'>Scroll for More Info :)</p>
                </div> 
            </div>
        </div>
        </>
    );
}