import pointersexplained from "../assets/Blogposts/PointersExplained.png";
import pointer from "../assets/Blogposts/pointer.jpg"
import Pageicon from "../components/icons/Blogpost/PointerExampleUI.tsx"
import { Blog } from "../components/blog/Blog.tsx"

export default function Blogposts() {
  return (
    <>
    <Blog.Heading>Understanding Pointers in C++</Blog.Heading>
    <Blog.ThumbnailImage src={pointersexplained} />
    <div className="text-1xl text-white">
    <Blog.SubHeading> Table of contents:</Blog.SubHeading> 
    <ul className="text-gray-300 pb-10">
      <li>So what is a pointer?</li>
      <li>Pointer Declaration/De-Referencing</li>
      <li>So how does this look inside the memory?</li>
      <li>Why do we even use pointers?</li>
      <li>Don't be scared of Smart Pointers</li>
      <li>Conclusion</li>
    </ul>
     {/* Table of contents over */}
    <Blog.Text>
      In this article we are going to talk about the most over-complicated thing in computing, These are (drum role please) Pointers!
    </Blog.Text>
    <Blog.Image src={pointer} />

    <Blog.SubHeading> So what is a pointer?</Blog.SubHeading> 

    <Blog.Text>
      Pointers can be simply be explained in 10 words "A variable that holds a memory address as a value"
    </Blog.Text>

    <Blog.Text>
    Here's a little diagram to explain it:
    </Blog.Text>
    <Pageicon color={""} />



    </div>

  </>
  );
}
