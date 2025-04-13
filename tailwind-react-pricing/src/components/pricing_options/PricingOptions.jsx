import React, { use } from "react";
import PricingCard from "../pricing_card/PricingCard";

const PricingOptions = ({ pricingPromise }) => {
  const pricingData = use(pricingPromise);
  console.log(pricingData);
  return (
    <div className="p-4 ">
      <h1 className="text-5xl">Get our membership</h1>
      <div className="grid mt-6 md:grid-cols-3 gap-4">
        {pricingData.map((pricing) => (
          <PricingCard key={pricing.id} pricing={pricing}></PricingCard>
        ))}
      </div>
    </div>
  );
};

export default PricingOptions;
