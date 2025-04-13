import React from "react";
import PricingFeatures from "./PricingFeatures";

const PricingCard = ({ pricing }) => {
  console.log(pricing);
  const { title, price, features } = pricing;
  return (
    <div className="bg-red-300 border rounded-xl p-2">
      {/* card header */}
      <div>
        <h2 className="text-4xl ">{title}</h2>
        <h4>$ {price} per month</h4>
      </div>

      {/* card body */}
      <div className="bg-red-200 p-2 mt-4 rounded-xl">
        {features.map((feature, index) => (
          <PricingFeatures key={index} feature={feature}></PricingFeatures>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
