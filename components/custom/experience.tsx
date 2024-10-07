import Contact from "@/components/custom/contact"

const Experience: React.FC = () => {
    return(
        <>
        <div className="h-screen flex flex-col justify-between items-center bg-secondary">
            <div className="flex items-center justify-around pt-10 w-[90%] h-[90%]">
                <div className="flex">
                    <p>beep bloop project 1</p>
                </div>
                <div className="flex ">
                    <p>beep bloop project 2</p>
                </div>
            </div>
            <Contact/>
        </div>
        </>
    )
}

export default Experience;