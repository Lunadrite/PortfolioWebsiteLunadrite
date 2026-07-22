import HeroCard from "../components/home/HeroCard";
import InfoCard from "../components/home/InfoCard"
import RecentBlogposts from "../components/home/RecentBlogposts"

export default function Home() {
  return (
    <main className="grid gap-x-5 lg:grid-cols-4 grid-cols-1">
      <HeroCard /> {/*My info card :) */}
      <div className="col-span-2">
        <InfoCard />
      </div>
      <RecentBlogposts />
   
    </main>
  );
}
