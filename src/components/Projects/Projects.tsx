import lunadesignes from "../../assets/projects/lunadesignes.png";
import Securechat from "../../assets/projects/SecureChat.png";
import glfw from "../../assets/projects/glfw.png";
import cliProject from "../../assets/projects/cliProject.png";
export type Progress = "finished" | "in-progress";

interface Project {
    id: string;
    title: string;
    image: string;
    description: string;
    github: string;
    status: Progress;
    technologies: string[];
}

export const Projects: Project[] = [
  {
    id: "lunadesignes",
    title: "LunaDesignes",
    image: lunadesignes,
    description:
      "This is the website you are currently on! LunaDesignes was a project I had wanted to finish for a long time, but it turned out to become one of my favourite projects to continually improve and expand.",
    github: "https://github.com/Lunadrite/PortfolioWebsiteLunadrite",
    status: "in-progress",
    technologies: ["React", "TypeScript", "TailwindCSS"],
  },

  {
    id: "securechat",
    title: "SecureChat",
    image: Securechat,
    description:
      "My first ever web development project. It started as a simple website with only a homepage and a custom router before I later developed my own routing system. This project introduced me to frontend development and is where I first discovered how much I enjoyed building websites.",
    github: "https://github.com/Lunadrite/SecureChat",
    status: "finished",
    technologies: ["React", "TypeScript"],
  },

  {
    id: "opengl-attempt",
    title: "OpenGL Attempt",
    image: glfw,
    description:
      "A beginner OpenGL project built in C++ using GLFW and GLAD, focused on learning the fundamentals of computer graphics, rendering pipelines, shaders, buffers, and window management. It documents my journey into graphics programming while rendering basic shapes and experimenting with modern OpenGL.",
    github: "https://github.com/Lunadrite/OpenGL-Attempt",
    status: "finished",
    technologies: ["C++", "OpenGL", "GLFW", "GLAD"],
  },

  {
    id: "cli-terminal",
    title: "CLI Terminal",
    image: cliProject,
    description:
      "A React-based terminal emulator inspired by Linux terminals. I began this project after switching to Linux and wanted to recreate the terminal experience while experimenting with React components, command parsing, and UI interactions.",
    github: "https://github.com/Lunadrite/CLI-Terminal",
    status: "in-progress",
    technologies: ["React", "TypeScript", "CSS"],
  },
];