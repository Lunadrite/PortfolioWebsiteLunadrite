import Card from "../components/home/Card";
import InfoCard from "../components/home/InfoCard"

export default function Home() {
  return (
    <main className="flex flex-row gap-5 h-auto">
      <Card></Card> {/*My info card :) */}
      <InfoCard></InfoCard>
   
    </main>
  );
}
