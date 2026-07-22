import HeroCard from "../components/home/HeroCard";
import InfoCard from "../components/home/InfoCard"
import RecentBlogposts from "../components/home/RecentBlogposts"

export default function Home() {
  return (
    <main className="grid 3xl:grid-cols-3 2xl:grid-cols-3 gap-x-5 lg:grid-cols-3 grid-cols-1">
      <HeroCard /> {/*My info card :) */}
      <InfoCard />
      <RecentBlogposts />
   
    </main>
  );
}
