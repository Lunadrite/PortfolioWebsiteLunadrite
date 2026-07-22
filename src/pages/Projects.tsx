import lunadesignes from "../../assets/projects/lunadesignes.png";
import Securechat from "../../assets/projects/SecureChat.png";
import glfw from "../../assets/projects/glfw.png";
import cliProject from "../../assets/projects/cliProject.png";

import {Projects} from "../components/Projects/Projects"
import { Blog } from "../components/blog/Blog"


export default function ProjectPage() {
  return (
    <>
    <p className="pt-4 mb-4 mx-auto text-center">
      Welcome to my Projects heres what im working on.
    </p>

    <div className="flex justify-center">
    <div className="grid 3xl:grid-cols-2 2xl:grid-cols-2 gap-x-70 lg:grid-cols-1 grid-cols-1 content-center "> 
    {Projects.map((project) => (
    <Blog.Projects
      key={project.id}
      src={project.image}
      caption={project.description}
      href={project.github}
      progress={project.status}
    />
      ))}
    </div>
    </div>
  </>
  );
}
