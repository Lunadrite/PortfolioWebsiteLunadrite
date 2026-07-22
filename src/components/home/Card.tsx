import ImageofMe from "../../assets/home/IMG_0742.jpg";
import Github from "../../assets/home/github-mark-white.png";
import Linkedin from "../../assets/home/InBug-White.png";



export default function Card() {
    return(
        <>
    <div className="flex pt-4 flex-col md:flex-row  ">
        <div className="border-3 px-12 py-4 flex rounded-3xl flex-col  border-[#880808] ">
        <img src={ImageofMe} className="w-70 rounded-xl"></img>
        <div className="rounded-md text-center font-bold text-2xl underline underline-offset-4 ">
            Luna
        </div>
        <div className="items-center text-center">Creative assistant</div>
        <div className="flex items-center text-center justify-center gap-4 pt-2">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Lunadrite">
            <img src={Github} className="w-[24px]"></img>
            </a>

            <div className="flex items-center text-center justify-center">
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/luna-tattersall-87a908369/">
                <img src={Linkedin}  className="w-[24px]"></img>
            </a>
            </div>
     
        </div>
        </div>
        </div>
        </>
    )
}