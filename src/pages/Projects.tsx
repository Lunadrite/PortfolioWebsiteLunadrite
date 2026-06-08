import lunadesignes from "../assets/projects/lunadesignes.png";
import Securechat from "../assets/projects/SecureChat.png";
import glfw from "../assets/projects/glfw.png"
import cliProject from "../assets/projects/cliProject.png"
import { Blog } from "../components/blog/Blog"

export default function Projects() {
  return (
    <>
    <p className="pt-4 mb-4 mx-auto text-center">
      Welcome to my Projects heres what im working on.
    </p>

    <div className="flex justify-center">
    <div className="grid 3xl:grid-cols-2 2xl:grid-cols-2 gap-x-70 lg:grid-cols-1 grid-cols-1 content-center ">
      
      <Blog.Projects 
       src={lunadesignes}
       caption="This is the website you are currently on! Luna designes was a project of mine what i have wanted to finish for a long time but it turns our i love just working on it"
       href="https://github.com/Lunadrite/PortfolioWebsiteLunadrite"
       ></Blog.Projects>

      <Blog.Projects 
       src={Securechat}
       caption="This is my first every project! It was a really simple website with only the home page and the default router before i made my own since i didnt need to go to infinite pages and just a few. This was just a test to get into website development and where i fell in love with it."
       href="https://github.com/Lunadrite/SecureChat"
       ></Blog.Projects>

      <Blog.Projects 
       src={glfw}
       caption="A beginner OpenGL project built in C++ using GLFW and GLAD, focused on learning the fundamentals of computer graphics, rendering pipelines, shaders, and window management. The project explores concepts such as buffers, vertex and fragment shaders, and rendering basic shapes like triangles while documenting the learning process throughout development."
       href="https://github.com/Lunadrite/OpenGL-Attempt"
       ></Blog.Projects>

      <Blog.Projects 
       src={cliProject}
       caption="This is my CLI project on a react platform! My aim was to recreate a linux terminal feel since i swapped to linux recently and had alot of fun learning and experimenting while making this project please enjoy!"
       href="https://github.com/Lunadrite/CLI-Terminal"
       ></Blog.Projects>

    </div>
    </div>

  </>
  );
}
