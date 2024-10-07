import { Separator } from "@radix-ui/react-separator"


export default function About(){
    return(
        <>
        <div className="min-h-screen flex flex-col items-center justify-start md:justify-around space-y-4 bg-secondary text-sm md:text-base lg:text-lg">
            <div className="flex flex-col justify-around items-center w-[80%]">
                <div className="flex flex-col items-center font-bold text-3xl md:text-4xl pt-[12%] md:pt-[8%]">
                    <h1>ABOUT ME</h1>
                    <div className="rounded border-2 border-violet-600 mt-4 mb-6 w-[40%]"/>
                </div>
                <div className="h-[90%]">
                    <p>Here you will find more information about me along with my current programming and technology skillset</p>
                </div>
            </div>
            <div className="flex justify-around items-start w-[95%] md:w-[80%] h-[50%] space-y-4 md:pt-4">
                <div></div>
                <div className="flex flex-col justify-arond items-center w[47.5%] md:w-[45%]">
                    <div className="flex flex-col items-center text-xl md:text-3xl font-semibold">
                        <h2>Intro to Nate</h2>
                        <div className="rounded border-2 border-violet-600 mt-4 md:mb-6 w-[40%]"/>
                    </div>
                    <div className="px-4 pt-8 space-y-4">
                        <p className="">
                            Hey I'm Nathan (Nate) Rosenberg, software-engineer and recent graduate of 
                            the University of Michigan. I'm passionate about technology, and enjoy
                            allowing my curiosity to pull me in new directions. 
                        </p>
                        <p className="">
                            I've done a good mix of back-end and front-end work, mostly focusing on 
                            React JS & TS for front-end, and Python Flask, SQL (RDBMS), and AWS for backend.
                            I also have significant experience with lower-level C++ programming, mostly in the form of school projects.
                            I've done work in the classroom, worked on a team in a corporate environment, and 
                            pursued personal projects that align with my interests.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-around items-center w[47.5%] md:w-[45%]">
                    <div className="flex flex-col items-center text-xl md:text-3xl font-semibold">
                        <h2>Skills</h2>
                        <div className="rounded border-2 border-violet-600 mt-4 md:mb-6 w-[40%]"/>
                    </div>
                    <div className="flex flex-wrap h-[80%] font-semibold text-sm md:text-lg justify-center space-y-2 md:space-y-4 space-x-2 md:space-x-4 py-4">
                        <div></div>
                        <div className="flex justify-around items-center bg-violetMode h-[30px] px-4 mx-2 rounded">C++</div>
                        <div className="flex justify-around items-center bg-violetMode h-[30px] px-4 mx-2 rounded">Python</div>
                        <div className="flex justify-around items-center bg-violetMode h-[30px] px-4 mx-2 rounded">JavaScript</div>
                        <div className="flex justify-around items-center bg-violetMode h-[30px] px-4 mx-2 rounded">TypeScript</div>
                        <div className="flex justify-around items-center bg-violetMode h-[30px] px-4 mx-2 rounded">HTML</div>
                        <div className="flex justify-around items-center bg-violetMode h-[30px] px-4 mx-2 rounded">CSS</div>
                        <div className="flex justify-around items-center bg-violetMode h-[30px] px-4 mx-2 rounded">SQL</div>
                        <div className="flex justify-around items-center bg-violetMode h-[30px] px-4 mx-2 rounded">Multithreading</div>
                        <div className="flex justify-around items-center bg-violetMode h-[30px] px-4 mx-2 rounded">REST APIs</div>
                        <div className="flex justify-around items-center bg-violetMode h-[30px] px-4 mx-2 rounded">Bash</div>
                        <div className="flex justify-around items-center bg-violetMode h-[30px] px-4 mx-2 rounded">WSL</div>
                        <div className="flex justify-around items-center bg-violetMode h-[30px] px-4 mx-2 rounded">GitHub</div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
        </>
    );
}