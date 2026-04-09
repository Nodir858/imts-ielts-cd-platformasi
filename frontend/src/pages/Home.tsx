import Banner from "../components/Banner";
import Features from "../components/Features";
import GamePlan from "../components/GamePlan";

export default function Home() {
  return (
    <div className="font-semibold">
      <Banner></Banner>
      <Features></Features>
      <GamePlan></GamePlan>
    </div>
  )
}
