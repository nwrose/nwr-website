import Image from "next/image";

const Projects: React.FC = () => {
    return(
        <>
        <div className="flex flex-col justify-start items-center bg-secondary min-h-screen text-lg">
            <div className="w-[100%] h-[50px] md:h-[220px]">
            </div>
            <div className="flex flex-col items-center text-xl md:text-4xl font-semibold">
                <h2>Personal Projects</h2>
                <div className="rounded border-2 border-violet-600 mt-4 md:mb-2 w-[40%]"/>
            </div>
            <div className="flex flex-col md:flex-row md:flex-wrap items-start justify-center pt-10 w-[90%]">
                <div className="w-[80%] md:w-[35%] min-h-80 m-10 ">
                    <a href="/" className="flex flex-col justify-start items-center transition-transform ease-in-out duration-300 transform hover:scale-105 shadow-lg dark:shadow-sm dark:shadow-violet-600">
                        <div className="flex items-center justify-center m-2 border-b-2">
                            <Image alt="Personal Website" src="/pngs/nwr-website-10-8-24.png" width={900} height={900}/>
                        </div>
                        <div className="flex justify-center w-[100%] text-2xl font-semibold p-4 ">
                            nathan-rosenberg.dev
                        </div>
                        <div className="w-[90%] mb-4">
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