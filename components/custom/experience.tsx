

export default function Experience(){
    return(
        <>
        <div className="h-screen flex flex-col items-center justify-around bg-slate-500">
            <div>
                <h1>Skills</h1>
                <ul>
                    <li>skill 1</li>
                    <li>technology y</li>
                    <li>concept x</li>
                </ul>
            </div>
            <div>
                <span>SELECT A SKILL TO JUMP TO / HIGHLIGHT RELEVANT PROJECTS</span>
            </div>
            <div>
                <h1>Projects & Professional Experience</h1>
                <div>
                    <h3>Project X</h3>
                    <div>
                        <p>
                            Worked with xxx in order to accomplish xxx, used jjj to do qqq
                        </p>
                        <div>
                            <ul>
                                <span>Core Concepts & Technologies:</span>
                                <li>concept x</li>
                                <li>technology y</li>
                            </ul>
                            <ul>
                                <span>Additional Concepts & Technologies</span>
                                <li>concept i</li>
                                <li>technology j</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <h3>Project Y</h3>
                    <div>
                        <p>
                            Constructed all sorts of things, used a bunch of tools to do all the stuff I wanted to do for the people
                        </p>
                        <div>
                            <ul>
                                <span>Core Concepts & Technologies:</span>
                                <li>the main concept</li>
                                <li>the main technology</li>
                                <li>a second essential technology</li>
                            </ul>
                            <ul>
                                <span>Additional Concepts & Technologies</span>
                                <li>GitHub</li>
                                <li>Ubuntu Linux Terminal</li>
                                <li>Bash scripting for automated testing</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}