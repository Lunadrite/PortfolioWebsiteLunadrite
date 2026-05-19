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
    <Blog.List items={[
      "Table of contents",
      "So, what is a pointer?", 
      "Pointer Declaratiom/De-referencing",
      "So, how does this look inside the memory?",
      "Why do we even use pointers?",
      "How do we manage memory?",
      "Don't be scared of smart pointers!",
      "Conclusion"]}/>
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
