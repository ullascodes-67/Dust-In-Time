import Hero from "../comp/package/Hero";
import PriceCard from "../comp/package/PriceCard";
import HomeSelector from "../comp/package/HomeSelector";
import IncludedServices from "../comp/package/IncludedServices";
import ServiceDetails from "../comp/package/ServiceDetails";
import WhyChoose from "../comp/package/WhyChoose";
import StickyFooter from "../comp/package/StickyFooter";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function PackageDetails() {
  const { type } = useParams();

  const isGold = type === "gold";

  const price = isGold ? 6999 : 5599;

  const homes = isGold
    ? [
        { bhk: "1 BHK", area: "Up to 600 sq.ft", price: 6999 },
        { bhk: "2 BHK", area: "600 - 1000 sq.ft", price: 7999 },
        { bhk: "3 BHK", area: "1000 - 1500 sq.ft", price: 8999 },
      ]
    : [
        { bhk: "1 BHK", area: "Up to 600 sq.ft", price: 5599 },
        { bhk: "2 BHK", area: "600 - 1000 sq.ft", price: 6599 },
        { bhk: "3 BHK", area: "1000 - 1500 sq.ft", price: 7599 },
      ];

  const [selected, setSelected] = useState(0);

  return (
    <div className="min-h-screen bg-[#F8F6F1] pb-32">
      <Hero isGold={isGold} />

      <PriceCard price={price} />

      <HomeSelector
        homes={homes}
        selected={selected}
        setSelected={setSelected}
      />

      <IncludedServices isGold={isGold} />

      <ServiceDetails />

      <WhyChoose />

      <StickyFooter home={homes[selected]} packageType={type} />
    </div>
  );
}
