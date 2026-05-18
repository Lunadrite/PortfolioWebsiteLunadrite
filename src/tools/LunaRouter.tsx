import { Fragment } from "react/jsx-runtime";
import Header from "../components/Header";
import Home from "../pages/home";
import Hrt from "../pages/hrt";
import Friends from "../pages/friends";
import Gallery from "../pages/gallery";
import "../App.css";
import { Analytics } from "@vercel/analytics/react";
import Footer from "../components/Footer";
import Kitties from "../pages/kitties";
import Aboutme from "../pages/aboutme";
import Japanese from "../pages/japanese"
import Projects from "../pages/projects"
import Blogposts from "../pages/blogposts"

//Blogposts

export default function LunaRouter() {
  const paths = {
    "/": <Home />,
    "/hrt": <Hrt />,
    "/friends": <Friends />,
    "/gallery": <Gallery />,
    "/kitties": <Kitties />,
    "/aboutme": <Aboutme />,
    "/japanese": <Japanese />,
    "/projects": <Projects />,
    "/blogposts":<Blogposts />,
  };

  const PageRouter = () => {
    const currentPath = window.location.pathname;

    if (currentPath in paths) return paths[currentPath as keyof typeof paths];

    window.history.replaceState(null, "", "/");
    return <Home />;
  };

  return (
    <Fragment>
      <div className="min-h-screen flex flex-col justify-between xl:px-[15rem] lg:px-[9rem] md:px-[6rem] px-[1rem]">
        <div className="h-full flex flex-col mb-5">
          <Header path={location.pathname} />
          <PageRouter />
        </div>
        <Footer />
      </div>
      <Analytics />
    </Fragment>
  );
}
