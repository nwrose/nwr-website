import Image from "next/image";
import SlideIn from "@/components/custom/SlideIn"

const Projects: React.FC = () => {
    return(
        <>
        <div className="flex flex-col justify-start items-center bg-transparent min-h-screen text-lg">
            <div className="w-full h-[50px] md:h-[220px]">
            </div>
            <div className="flex flex-col items-center text-xl md:text-4xl font-semibold text-shadow-subtleViolet">
                <SlideIn from="top"><h2 className="z-10 bg-transparent">Personal Projects</h2></SlideIn>
                <div className="rounded border-2 border-violet-600 mt-4 md:mb-2 w-[40%]"/>
            </div>
            <div className="flex flex-col md:flex-row md:flex-wrap items-center md:items-start justify-center w-[90%]">
                <SlideIn from="bottom"><div className="w-[80vw] sm:w-[45vw] md:w-[40vw] lg:w-[35vw] min-h-80 m-5 md:m-10">
                    <a href="/" className="flex flex-col justify-start items-center transition-transform ease-in-out duration-300 transform hover:scale-105 shadow-2xl dark:shadow-sm dark:shadow-violet-600 z-10 bg-popover">
                        <div className="flex items-center justify-center m-2 border-b-2">
                            <Image alt="Personal Website" src="/pngs/nwr-website-sc-dark.png" width={900} height={900} className="dark:hidden"/>
                            <Image alt="Personal Website" src="/pngs/nwr-website-sc.png" width={900} height={900} className="hidden dark:block"/>
                        </div>
                        <div className="flex justify-center w-[100%] text-xl sm:text-2xl font-semibold py-4 ">
                            nate-rosenberg.com
                        </div>
                        <div className="w-[90%] mb-4 text-base sm:text-lg">
                            <p>
                                I designed and constructed this website to showcase 
                                my capabilities as a web developer  and create a space 
                                to share other projects I&#39;m working on.  The website is 
                                a Next.JS React project written in TypeScript and HTML. I used 
                                a combination of Tailwind and traditional CSS for styling 
                                and animations, and deployed the project using Docker and fly.io.
                            </p>
                        </div>                    
                    </a>
                </div></SlideIn>
                <SlideIn from="bottom"><div className="w-[80vw] sm:w-[45vw] md:w-[40vw] lg:w-[35vw] min-h-80 m-5 md:m-10">
                    <a href="https://nwr-social-media.fly.dev" className="flex flex-col justify-start items-center transition-transform ease-in-out duration-300 transform hover:scale-105 shadow-2xl dark:shadow-sm dark:shadow-violet-600 z-10 bg-popover">
                        <div className="flex items-center justify-center m-2 border-b-2">
                            <Image alt="Personal Website" src="/pngs/Social-Media-Feed.png" width={900} height={900} className="dark:hidden"/>
                            <Image alt="Personal Website" src="/pngs/Social-Media-Feed.png" width={900} height={900} className="hidden dark:block"/>
                        </div>
                        <div className="flex justify-center w-[100%] text-xl sm:text-2xl font-semibold py-4 ">
                            Intra-Fam Social Media App
                        </div>
                        <div className="w-[90%] mb-4 text-base sm:text-lg">
                            <p>
                            I developed this application to provide a private space for close friends and family to share life updates and thoughts. 
                            It&#39;s built with Next.js, a React TypeScript frontend, and utilizes a Supabase backend. 
                            The project leverages the Supabase API for database interactions and authentication, 
                            with a custom PostgreSQL schema, queries, and functions handling database operations. 
                            Images are uploaded and served via the Cloudinary API, while the user interface is styled primarily with Tailwind CSS. 
                            The application is deployed using Docker and hosted on Fly.io for efficiency and scalability.
                            </p>
                        </div>                    
                    </a>
                </div></SlideIn>
            </div>
        </div>
        </>
    )
}

export default Projects;