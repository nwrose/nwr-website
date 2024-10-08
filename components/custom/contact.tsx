const Contact:React.FC = () => {
    return(
    <>
    <div className="relative">
        <div className="h-[100px] w-[100%] flex justify-start items-end space-x-10 text-sm z-20">
            <div></div>
            <div><a href="https://www.github.com/nwrose/"  className="hover:bg-violetMode m-2 p-2 rounded ease-in-out duration-300">
                GitHub
            </a></div>
            <div><a href="https://www.linkedin.com/in/nathan-rosenberg-a6a151259/" className="hover:bg-violetMode m-2 p-2 rounded ease-in-out duration-300 opacity-100">
                LinkedIn
            </a></div>
            <div><a href="mailto:nwrose@umich.edu" className="hover:bg-violetMode m-2 p-2 rounded ease-in-out duration-300">
                Email
            </a></div>
        </div>
        <div className="flex items-center justify-center text-xs w-[100%] py-2 z-20">
            <p>© 2024 Nathan Rosenberg. All rights reserved.</p>
        </div>
        <div className="bg-gradient-to-b from-secondary to-violet-800 opacity-20 h-[100px] w-[100%] absolute bottom-0 z-10 pointer-events-none">
        </div>
    </div>
    </>
    )
}


export default Contact;