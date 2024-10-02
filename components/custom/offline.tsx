import Contact from "@/components/custom/contact"

const Offline: React.FC = () => {
    return(
        <>
        <div className="h-screen flex flex-col justify-between items-center bg-slate-600 ">
            <div className="h-[80%] flex flex-col justify-around itens-center">
                Here are the things I do offline (my personality or whatever, maybe some pictures)
            </div>
            <Contact/>
        </div>
        </>
    )
}

export default Offline;