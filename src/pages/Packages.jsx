import React from "react";
import SubscriptionSection from "../comp/SubscriptionSection";
import BuildYourPlan from "../comp/package/BuildYourPlan";
import IndividualServiceCard from "../comp/package/IndividualServiceCard";

const Packages = () => {
  return (
    <div  className="bg-[#F8F6F1]">
      <SubscriptionSection />
      <IndividualServiceCard />
      <BuildYourPlan />
    </div>
  );
};

export default Packages;
