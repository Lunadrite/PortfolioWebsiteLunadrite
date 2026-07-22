import { Blog } from "../../components/blog/Blog"
import {Blogs} from "../../components/blog/Blogposts"

export default function RecentBlogposts() {
    return(
        <>
    <div className="pt-4">
        <div className="border-3 px-12 py-4 flex rounded-3xl flex-col border-[#880808] text-center ">
            Check out my blogposts!
            <div className="">
                    {Blogs.map((blog) => (
                        <Blog.Blogpost
                        caption={blog.title}
                        src={blog.image}
                        href={blog.href}
                        />
                    ))}
            </div>
        </div>
        </div>
        </>
    )
}