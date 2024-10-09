import Image from "next/image";

const Projects: React.FC = () => {
    return(
        <>
        <div className="flex flex-col justify-start items-center bg-secondary min-h-screen text-lg">
            <div className="w-full h-[50px] md:h-[220px]">
            </div>
            <div className="flex flex-col items-center text-xl md:text-4xl font-semibold">
                <h2>Personal Projects</h2>
                <div className="rounded border-2 border-violet-600 mt-4 md:mb-2 w-[40%]"/>
            </div>
            <div className="flex flex-col md:flex-row md:flex-wrap items-center md:items-start justify-center w-[90%]">
                <div className="w-[80vw] sm:w-[45vw] md:w-[40vw] lg:w-[35vw] min-h-80 m-5 md:m-10 ">
                    <a href="/" className="flex flex-col justify-start items-center transition-transform ease-in-out duration-300 transform hover:scale-105 shadow-lg dark:shadow-sm dark:shadow-violet-600">
                        <div className="flex items-center justify-center m-2 border-b-2">
                            <Image alt="Personal Website" src="/pngs/nwr-website-10-8-24.png" width={900} height={900}/>
                        </div>
                        <div className="flex justify-center w-[100%] text-xl sm:text-2xl font-semibold py-4 ">
                            nathan-rosenberg.dev
                        </div>
                        <div className="w-[90%] mb-4 text-base sm:text-lg">
                            <p>
                                I designed and constructed this website to showcase 
                                my capabilities as a web developer  and create a space 
                                to share other projects I&#39;m working on.  The website is 
                                a Next.JS project written in TypeScript and HTML. I used 
                                a combination of Tailwind and traditional CSS for styling 
                                and animations, and deployed the project using Docker and fly.io.
                            </p>
                        </div>                    
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Projects;