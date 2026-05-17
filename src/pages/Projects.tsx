import lunadesignes from "../assets/projects/lunadesignes.png";
import Github from "../assets/home/github-mark-white.png";
import Securechat from "../assets/projects/SecureChat.png";


export default function Projects() {
  return (
    <>
    <p className="pt-4 mb-4 mx-auto text-center">
      Welcome to my Projects heres what im working on.
    </p>

    <div className="grid 3xl:grid-cols-2 2xl:grid-cols-2 lg:grid-cols-2 gap-100 grid-cols-1 mx-auto ">
      <div className="flex gap-4 flex-col items-start">
        <div className="">
          <img src={lunadesignes}  className=" hover:border-pink-400 transition-colors w-full  max-w-sm md:min-w-lg xl:min-w-1xl 2xl:min-w-1xl border p-4 rounded-lg object-cover "></img>
        </div>
        <div className="projectComment w-full max-w-sm md:min-w-lg xl:min-w-1xl 2xl:min-w-1xl break-words text-center">
          This is the website you are currently on! Luna designes was a project of mine what i have wanted to finish 
          for a long time but it turns our i love just working on it <br></br><a className="text-blue-600 flex justify-center" href="https://github.com/Lunadrite/PortfolioWebsiteLunadrite">Github Repo<img src={Github} className="w-[24px] bg-black rounded-4xl "></img></a>
        </div>
      </div>

      <div className="flex gap-4 flex-col items-end">
        <div className="">
          <img src={Securechat}  className=" hover:border-pink-400 transition-colors w-full  max-w-sm md:min-w-lg xl:min-w-1xl 2xl:min-w-1xl border p-4 rounded-lg object-cover "></img>
        </div>
        <div className="projectComment max-w-sm md:min-w-lg xl:min-w-1xl 2xl:min-w-1xl break-words text-center">
          This is my first every project! It was a really simple website with only the home page and the default router before i made my own since i didnt need to go to infinite pages and just a few. This was just a test to get into website development and where i fell in love with it.<br></br><a className="text-blue-600 flex justify-center" href="https://github.com/Lunadrite/SecureChat">Github Repo<img src={Github} className="w-[24px] bg-black rounded-4xl "></img></a>
        </div>
      </div>

    </div>

  </>
  );
}
