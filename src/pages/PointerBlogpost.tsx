import pointersexplained from "../assets/Blogposts/PointersExplained.png";
import pointer from "../assets/Blogposts/pointer.jpg"
import Pageicon from "../components/icons/Blogpost/PointerExampleUI.tsx"
import { Blog } from "../components/blog/Blog.tsx"
import pointershortcut from "../assets/Blogposts/pointershortcut.png"

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
    <br/>
    <Blog.Text>If you still don't get it, here's another personal favorite metaphore i love:</Blog.Text>
    <Blog.Text>"A pointer is very much like a shortcut on a desktop."</Blog.Text>
    <Blog.Image src={pointershortcut} width='w-100'></Blog.Image>
    <Blog.Text>So now that you know that Pointers point to a specific address in memory, let’s talk more about them!</Blog.Text>
    <br/>
    <Blog.Text>The size of the pointer depends on the architecture chosen, e.g., 32 Bits = 4 bytes, 64 Bits = 8 bytes.</Blog.Text>
    <Blog.Text>The reason why this is the case is that the size is dependenton the size</Blog.Text>
    <Blog.Callout>NOT the size of the variable space, but the maximum addressable space.</Blog.Callout>
    <Blog.Text>We can also point to a place where we want to allocate memory, which is called dynamic memory allocation. We will discuss the uses of pointers later in this article! </Blog.Text>
    <Blog.Text>When declaring a pointer, you always want to set it to a Null pointer. A null pointer simply doesn't point to anywhere. We can represent that in a lot of ways!</Blog.Text>
    <Blog.Code language="cpp">{`int main(){
	int* Pointer1 = nullptr; // #1 nullptr == 0
	int* Pointer2 = NULL; // #2 NULL == 0
	int* Pointer3 = 0; // #3
	
	return 0;
          }`
}</Blog.Code>

    <Blog.Text>These all mean the same thing and you can interchange them, But I highly suggest using the first option, nullptr, Which is a lot easier to read and if you ever work with people on a project they will love you a lot more for using it, We want to declare the pointers before use for the same reason! It’s conventional, and we want to stick to this for easier-to-read code!</Blog.Text>
    <Blog.Callout>De-referencing a null pointer can lead to undefined actions. Avoid it due to it possibly leading to application crashes.</Blog.Callout>
    <Blog.SubHeading>Pointer Declaration/De-referencing</Blog.SubHeading>
    <Blog.Text>As you saw in the previous example, I used something that u may not have seen if you’re a beginner, and that is int*. The important thing is the ‘ * ’, </Blog.Text>
    <Blog.Text>In that example we where declaring a pointer which is holding a de-referenced value of int, Then we gave the pointer a name in our example i used “Pointer1”, “Pointer2” and “Pointer3”, Then gave it where the pointer points too, In that case we declared it so gave it a NULL path. </Blog.Text>
    
    <Blog.Code 
    caption="The ‘&’ Basically just means address, so reading this, it would be the Address of the variable. ">
      &variablename
    </Blog.Code>

        <Blog.Code 
    caption="Creating an int* like we talked about in the previous part!">
      int* pointerName
    </Blog.Code>

        <Blog.Code 
    caption="This syntax is for dereferencing a pointer. De-referencing just means accessing the value at the memory address.">
      *pointerName
    </Blog.Code>

    
    </div>
  </>
  );
}
