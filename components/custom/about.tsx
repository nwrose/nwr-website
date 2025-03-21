import SlideIn from '@/components/custom/SlideIn'

export default function About(){

    const skillsList:Array<string> = [
        "JavaScript", "TypeScript", "HTML",
        "CSS", "SQL", "Databases" ,"Python", "Machine Learning", "C++", "Multithreading", "Cloud Services" ,
        "REST APIs", "Bash", "Git"
    ]

    return(
        <> 
        <div className="flex flex-col items-center justify-start md:justify-start text-sm md:text-base lg:text-lg">
            <div className="flex w-[100%] h-[100px]"></div>
            <div className="flex flex-col md:flex-row justify-around items-center md:items-start w-[100%] md:w-[90%] space-y-4 z-10 bg-transparent">
                <div></div>
                <div className="flex flex-col justify-arond items-center w-[80%] md:w-[55%]">
                    <div className="flex flex-col items-center text-xl md:text-4xl font-semibold text-shadow-subtleViolet">
                        <SlideIn from="left">
                            <h2>About Me</h2>
                        </SlideIn>
                        <div className="rounded border-2 border-violet-600 mt-4 md:mb-2 w-[40%]"/>

                    </div>
                    <div className="px-4 pt-8 space-y-4 text-shadow-subtleViolet">
                        <SlideIn from="left">
                            <p className="">
                                I&#39;m a Software Engineer and recent graduate of 
                                the University of Michigan with a B.S. in Computer Science. I&#39;m 
                                passionate about technology, and enjoy allowing my curiosity to 
                                pull me in exciting new directions. 
                            </p>
                        </SlideIn>
                        <SlideIn from="left">
                            <p className="">
                                I&#39;ve done a mix of back-end and front-end work, primarily focusing on 
                                React JS & TS for front-end, and Python Flask, SQL (RDBMS), and AWS for 
                                back-end. Additionally, I&#39;ve done a lot of classroom project work with C/C++
                                and am comfortable in a multi-threaded environment, having designed and built
                                a few fundamental operating system components.
                            </p>
                        </SlideIn>  
                        <SlideIn from="left">
                            <p>
                                In 2023 I interned for CVS Health where I gained exposure to 
                                corporate-scale development. I had the opportunity to contribute to 
                                ETL data pipelines and cloud infrastructure, expanding my back-end 
                                development capabilities. After graduating, I spent some time volunteering 
                                as a Front-End Engineer for a University of Michigan organization working to develop air
                                pollution visualization tools geared towards public use.
                            </p>
                        </SlideIn>
                        <SlideIn from="left">
                            <p className=""> 
                                I enjoy finding creative solutions to challenging problems, and seek out opportunities
                                that allow me to learn and grow as a developer. I&#39;ve included my email at the bottom of the page. 
                                Feel free to reach out to me if you&#39;d like to talk about an opportunity, collaborate on a project, 
                                or just chat about anything tech related.
                            </p>
                        </SlideIn>
                    </div>
                </div>
                <div className="flex flex-col justify-around items-center  w-[80%] sm:w-[60%] md:w-[35%] pt-10 md:pt-0">
                    <div className="flex flex-col items-center text-xl md:text-4xl font-semibold text-shadow-subtleViolet">
                        <SlideIn from="right">
                            <h2>Skills</h2>
                        </SlideIn>
                        <div className="rounded border-2 border-violet-600 mt-4 md:mb-2 w-[40%]"/>
                    </div>
                    <div className="flex flex-wrap h-[80%] font-semibold text-sm md:text-lg justify-center space-y-2 md:space-y-4 space-x-2 md:space-x-4 py-4">
                        <div></div>
                        {
                            skillsList.map((skill) => (
                                <SlideIn from="right" key={skill}><div className="flex justify-around items-center bg-violetMode z-10 h-[30px] px-4 rounded">{skill}</div></SlideIn>
                            ))
                        }
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