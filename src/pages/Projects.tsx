import lunadesignes from "../assets/projects/lunadesignes.png";



export default function Projects() {
  return (
    <>
      <p className="pt-4 mb-4 mx-auto text-center">
        Welcome to my Projects heres what im working on.
      </p>
      <div className="grid 3xl:grid-cols-4 2xl:grid-cols-3 gap-8 lg:grid-cols-2 grid-cols-1 mx-auto ">
        <div className="flex gap-4 flex-col items-start">
          <div className="">
            <img src={lunadesignes}  className=" w-full  max-w-sm md:min-w-lg xl:min-w-1xl 2xl:min-w-2xl border p-4 rounded-lg object-cover "></img>
          </div>
          <div className="projectComment w-full max-w-sm md:min-w-lg xl:min-w-1xl 2xl:min-w-2xl break-words">
            This is the website you are currently on! Luna designes was a project of mine what i have wanted to finish 
            for a long time but it turns our i love just working on it
          </div>
        </div>
      </div>
    </>
  );
}
