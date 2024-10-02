import Image from 'next/image';
import { Separator } from '@/components/ui/separator'

const Socials:React.FC = () => {
    return(
        <>
        <div className="fixed max-w-[5%] w-[5%] h-[100%] flex flex-col justify-around items-center z-10">
            <div className="bg-orange-100 space-y-1 shadow shadow-orange-100 rounded cursor-hover-pixel">
                <a href="https://www.linkedin.com/in/nathan-rosenberg-a6a151259/">
                    <Image src="linkedin-dark.svg" alt="linkedin" width={75} height={75}/>
                </a>
                <Separator/>
                <a href="https://www.github.com/nwrose/">
                    <Image src="github-dark.svg" alt="github" width={75} height={75}/>
                </a>
            </div>
        </div>
        </>
    )
}


export default Socials;