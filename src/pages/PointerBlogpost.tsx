import pointersexplained from "../assets/Blogposts/PointersExplained.png";
import pointer from "../assets/Blogposts/pointer.jpg"
import Pageicon from "../components/icons/Blogpost/PointerExampleUI.tsx"
import { Blog } from "../components/blog/Blog.tsx"
export default function Blogposts() {
  return (
    <>
    <div className="mx-[10%]">
    <Blog.Heading>Understanding Pointers in C++</Blog.Heading>
    <Blog.ThumbnailImage src={pointersexplained} />
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
    <Blog.Text>Value = The date stored at the Address</Blog.Text>
    <Blog.Text>Address = Where the data "lives" in the memory</Blog.Text>
    <br/>
    <Blog.Text>You may be wondering why the Addresses all begin with 0x, and it’s simple to indicate that it is following a Value written in Hexadecimal, aka Base 16. If you want to learn more about this, I will be making an article teaching Hex along with binary, so look out for that!</Blog.Text>
    <Blog.Text>So, as we see in the diagram in the Address of <Blog.ImportantInfo>0x100000</Blog.ImportantInfo>, we have the value of 1,</Blog.Text>
    <Blog.Text>In the Address of <Blog.ImportantInfo>0x1007F8</Blog.ImportantInfo>, we have the Value of <Blog.ImportantInfo>0x100000</Blog.ImportantInfo>, which has the value of 1.</Blog.Text>
    <Blog.Text>Address <Blog.ImportantInfo>0x1007F8</Blog.ImportantInfo> is known as a Pointer Because it holds the value of an Address.</Blog.Text>
    <br/>
    <Blog.Text>It’s as simple as that! 😜</Blog.Text>
    </div>
  </>
  );
}
