import NavBar from "../comp/NavBar";
import LandingHero from "../comp/LandingHero";
import SubscriptionSection from "../comp/SubscriptionSection";
import IndividualServiceCard from "../comp/package/IndividualServiceCard";

export default function Home() {
  return (
    <>
      <div className="pb-25 bg-[#F8F6F1]">
        <NavBar />

        <SubscriptionSection />
        <IndividualServiceCard />
      </div>
    </>
  );
}
