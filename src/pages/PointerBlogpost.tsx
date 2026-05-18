import pointersexplained from "../assets/Blogposts/PointersExplained.png";
import pointer from "../assets/Blogposts/pointer.jpg"
import Pageicon from "../components/icons/Blogpost/PointerExampleUI.tsx"

export default function Blogposts() {
  return (
    <>
    <header className="text-4xl justify-center flex pt-3">Understanding Pointers in C++</header>
    <div className="justify-center flex">
      <img src={pointersexplained}  className="flex justify-center w-full  max-w-md md:min-w-2xl xl:min-w-3xl 2xl:min-w-3xl p-4 rounded-md object-cover "></img>
    </div>
    <div className="text-1xl text-white">
    <a className="text-2xl flex pb-2"> Table Of Contents:</a>
    <ul className="text-gray-300 pb-10">
      <li>So what is a pointer?</li>
      <li>Pointer Declaration/De-Referencing</li>
      <li>So how does this look inside the memory?</li>
      <li>Why do we even use pointers?</li>
      <li>Don't be scared of Smart Pointers</li>
      <li>Conclusion</li>
    </ul>
     {/* Table of contents over */}
    <a className="flex ">
      In this article we are going to talk about the most over-complicated thing in computing, These are (drum role please) Pointers!
    </a>
    <img src={pointer} className="w-70 rounded-3xl py-3"></img>

     <a className="text-2xl flex pb-2"> So what is a pointer?</a>
     
    <a className="flex ">
      Pointers can be simply be explained in 10 words "A variable that holds a memory address as a value"
    </a>

    <a className="flex pb-2">
    Here's a little diagram to explain it:
    </a>
    <Pageicon color={""} />



    </div>

  </>
  );
}
