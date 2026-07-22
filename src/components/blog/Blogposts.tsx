import pointersexplained from "../../assets/Blogposts/PointersExplained.png";

interface Blog {
    title: string;
    image: string;
    href: string
}

export const Blogs: Blog[] = [
  {
    title: "Pointers Explained!",
    image: pointersexplained,
    href: "./pointerblogpost"
  },

];