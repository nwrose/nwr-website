

export default function About(){
    return(
        <>
        <div className="h-screen flex flex-col items-center justify-start md:justify-around space-y-4 bg-slate-600 text-orange-100 text-sm md:text-base lg:text-lg">
            <div className="flex flex-col justify-around items-center w-[80%]">
                <div className="flex flex-col items-center text-3xl md:text-4xl pt-[12%] md:pt-[8%]">
                    <h1>ABOUT ME</h1>
                    <div className="rounded border-2 border-orange-400 mt-4 mb-6 w-[40%]"/>
                </div>
                <div className="h-[90%]">
                    <p>Here you will find more information about me along with my current programming and technology skillset</p>
                </div>
            </div>
            <div className="flex justify-around items-start w-[95%] md:w-[80%] h-[50%] space-y-4 md:pt-4">
                <div></div>
                <div className="flex flex-col justify-arond items-center w[47.5%] md:w-[45%]">
                    <div className="flex flex-col items-center text-xl md:text-3xl">
                        <h2>Intro to Nate</h2>
                        <div className="rounded border-2 border-orange-400 mt-4 md:mb-6 w-[40%]"/>
                    </div>
                    <div className="px-4 pt-8 space-y-4">
                        <p className="bg-black">
                            Hey y'all, I'm Nathan (Nate) Rosenberg. I'm just writing words 
                            so that I know what it will look like when I have a whole 
                            little paragraph here and not just a few words.
                        </p>
                        <p className="bg-black">
                            I do all sorts of stuff where I work on the thing. Like right now
                            where I'm working on the thing to display all of the things that
                            I have had the pleasure of working on.
                            I hope you enjoy my website, and feel free to reach out or whatever idk.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-around items-center w[47.5%] md:w-[45%]">
                    <div className="flex flex-col items-center text-xl md:text-3xl">
                        <h2>Skills</h2>
                        <div className="rounded border-2 border-orange-400 mt-4 md:mb-6 w-[40%]"/>
                    </div>
                    <div className="flex flex-wrap h-[80%] font-semibold text-sm md:text-lg text-slate-800 justify-start space-y-2 md:space-y-4 space-x-2 md:space-x-4 py-4">
                        <div></div>
                        <div className="flex justify-around items-center bg-orange-200 h-[30px] px-4 mx-2 rounded">C++</div>
                        <div className="flex justify-around items-center bg-orange-200 h-[30px] px-4 mx-2 rounded">Python</div>
                        <div className="flex justify-around items-center bg-orange-200 h-[30px] px-4 mx-2 rounded">JavaScript</div>
                        <div className="flex justify-around items-center bg-orange-200 h-[30px] px-4 mx-2 rounded">TypeScript</div>
                        <div className="flex justify-around items-center bg-orange-200 h-[30px] px-4 mx-2 rounded">HTML</div>
                        <div className="flex justify-around items-center bg-orange-200 h-[30px] px-4 mx-2 rounded">CSS</div>
                        <div className="flex justify-around items-center bg-orange-200 h-[30px] px-4 mx-2 rounded">SQL</div>
                        <div className="flex justify-around items-center bg-orange-200 h-[30px] px-4 mx-2 rounded">Bash</div>
                        <div className="flex justify-around items-center bg-orange-200 h-[30px] px-4 mx-2 rounded">WSL</div>
                        <div className="flex justify-around items-center bg-orange-200 h-[30px] px-4 mx-2 rounded">GitHub</div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
        </>
    );
}