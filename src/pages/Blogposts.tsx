import pointersexplained from "../assets/Blogposts/PointersExplained.png";
import { Blog } from "../components/blog/Blog"

export default function Blogposts() {
  return (
    <>
    <p className="pt-4 mb-4 mx-auto text-center">
      Welcome to my Projects heres what im working on.
    </p>

    <div className="flex justify-center">
    <div className="grid 3xl:grid-cols-2 2xl:grid-cols-2 gap-x-70 lg:grid-cols-1 grid-cols-1 content-center ">
    <Blog.Blogpost src={pointersexplained} caption="Understanding Pointers in C++" href="./pointerblogpost" />
    <Blog.Blogpost src={pointersexplained} caption="Understanding Pointers in C++" href="./pointerblogpost" />
    
    
    </div>
    </div>

    
    </>
  );
}
