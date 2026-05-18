import pointersexplained from "../assets/Blogposts/PointersExplained.png";

export default function Blogposts() {
  return (
    <>
    <p className="pt-4 mb-4 mx-auto text-center">
      Welcome to my Projects heres what im working on.
    </p>

    <div className="grid 3xl:grid-cols-2 2xl:grid-cols-2 lg:grid-cols-2 gap-100 grid-cols-1 mx-auto ">
      <div className="flex gap-4 flex-col items-start">
        <div className="" >
          <a href="./pointerblogpost">
          <img src={pointersexplained} className=" hover:border-pink-400 transition-colors w-full  max-w-sm md:min-w-lg xl:min-w-1xl 2xl:min-w-1xl border p-4 rounded-lg object-cover "></img>
          </a>
        </div>
        <div className="projectComment w-full max-w-sm md:min-w-lg xl:min-w-1xl 2xl:min-w-1xl break-words text-center">
          Understanding Pointers in C++<p className="bg-red-200 rounded-4xl">Click Thumbnail to read</p>
        </div>
      </div>

      <div className="flex gap-4 flex-col items-end">
        <div className="">
          <img src={pointersexplained}  className=" hover:border-pink-400 transition-colors w-full  max-w-sm md:min-w-lg xl:min-w-1xl 2xl:min-w-1xl border p-4 rounded-lg object-cover "></img>
        </div>
        <div className="projectComment max-w-sm md:min-w-lg xl:min-w-1xl 2xl:min-w-1xl break-words text-center">
          Example blogpost 2-
        </div>
      </div>

    </div>
    
  </>
  );
}
