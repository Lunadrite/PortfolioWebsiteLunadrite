import { Blog } from "../components/blog/Blog"
import {Blogs} from "../components/blog/Blogposts"

export default function Blogposts() {
  return (
    <>
    <p className="pt-4 mb-4 mx-auto text-center">
      Here are my blogposts, they update regularly so make sure to coem back!
    </p>

    <div className="flex justify-center">
    <div className="grid 3xl:grid-cols-3 gap-x-30 lg:grid-cols-2 grid-cols-1 content-center ">
        {Blogs.map((blog) => (
        <Blog.Blogpost
          caption={blog.title}
          src={blog.image}
          href={blog.href}
          type={blog.type}
        />
          ))}
  
    
    
    </div>
    </div>

    
    </>
  );
}
