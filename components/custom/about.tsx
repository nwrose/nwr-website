export default function About(){
    return(
        <>
        <div className="flex flex-col items-center justify-start md:justify-start bg-secondary text-sm md:text-base lg:text-lg">
            <div className="flex w-[100%] h-[100px]"></div>
            <div className="flex flex-col md:flex-row justify-around items-center md:items-start w-[100%] md:w-[90%] space-y-4">
                <div></div>
                <div className="flex flex-col justify-arond items-center w-[80%] md:w-[55%]">
                    <div className="flex flex-col items-center text-xl md:text-4xl font-semibold">
                        <h2>About Me</h2>
                        <div className="rounded border-2 border-violet-600 mt-4 md:mb-2 w-[40%]"/>
                    </div>
                    <div className="px-4 pt-8 space-y-4">
                        <p className="">
                            Hi, I&#39;m Nathan Rosenberg, software-engineer and recent graduate of 
                            the University of Michigan with a B.S. in Computer Science. I&#39;m 
                            passionate about technology, and enjoy allowing my curiosity to 
                            pull me in exciting new directions. 
                        </p>
                        <p className="">
                            I&#39;ve done a mix of back-end and front-end work, primarily focusing on 
                            React JS & TS for front-end, and Python Flask, SQL (RDBMS), and AWS for 
                            backend. Additionally, I&#39;ve done a lot of classroom project work with C/C++
                            and am comfortable in a multi-threaded environment, having designed and built
                            a few fundamental operating system components.
                        </p>    
                        <p>
                            In 2023 I interned for CVS Health where I gained exposure to 
                            corporate-scale development. I had the opportunity to contribute to 
                            ETL data pipelines and cloud infastructure, expanding my back-end 
                            development capabilities.
                        </p>
                        <p className="hidden">
                            Something more personal and like good closing maybe? idk ill get some feedback
                            for this last paragraph
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-around items-center  w-[80%] sm:w-[60%] md:w-[35%]">
                    <div className="flex flex-col items-center text-xl md:text-4xl font-semibold">
                        <h2>Core Skills</h2>
                        <div className="rounded border-2 border-violet-600 mt-4 md:mb-2 w-[40%]"/>
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
            <div/>
            <div/>
        </div>
        </>
    );
}