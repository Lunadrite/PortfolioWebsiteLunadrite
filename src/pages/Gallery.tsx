import railroad from "../assets/gallery/railroad.jpg";
import rails from "../assets/gallery/rails.jpg";
import railstation from "../assets/gallery/railstation.jpg";
import time from "../assets/gallery/time.jpg";
import tunnel from "../assets/gallery/tunnel.jpg";
import crossroads from "../assets/gallery/crossroads.jpg";
import castle from "../assets/gallery/castle.jpg";
import Karambit from "../assets/gallery/Karambit.jpg"

// import { Blog } from "../components/blog/Blog"
import { Gallery } from "../components/gallery/Gallery";


export default function Gallerys() {
  return (
    <>
      <p className="pt-4 mb-4 mx-auto text-center">
        Welcome to my gallery hope you enjoy my pictures :)
      </p>
      
      <div className="grid 3xl:grid-cols-4 2xl:grid-cols-3 gap-8 lg:grid-cols-2 grid-cols-1 mx-auto ">
      
      <Gallery.Picture src={Karambit}>🖤🖤</Gallery.Picture>
      <Gallery.Picture src={railroad}>🖤🖤</Gallery.Picture>
      <Gallery.Picture src={railstation}>🏴🖤</Gallery.Picture>
      <Gallery.Picture src={time}>🎩🕰</Gallery.Picture>
      <Gallery.Picture src={tunnel}>⬛◼◾▪</Gallery.Picture>
      <Gallery.Picture src={rails}>🖤🖤</Gallery.Picture>
      <Gallery.Picture src={crossroads}>🖤🖤</Gallery.Picture>
      <Gallery.Picture src={castle}>🖤🖤</Gallery.Picture>

      </div>
    </>
  );
}
