import Card from "../components/home/Card";
import InfoCard from "../components/home/InfoCard"
import RecentBlogposts from "../components/home/RecentBlogposts"

export default function Home() {
  return (
    <main className="grid 3xl:grid-cols-3 2xl:grid-cols-3 gap-x-10 lg:grid-cols-3 grid-cols-1">
      <Card></Card> {/*My info card :) */}
      <InfoCard></InfoCard>
      <RecentBlogposts></RecentBlogposts>
   
    </main>
  );
}
