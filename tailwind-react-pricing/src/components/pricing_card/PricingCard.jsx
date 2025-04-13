import React from "react";
import PricingFeatures from "./PricingFeatures";

const PricingCard = ({ pricing }) => {
  console.log(pricing);
  const { title, price, features } = pricing;
  return (
    <div className="bg-red-300 border rounded-xl flex flex-col p-2">
      {/* card header */}
      <div>
        <h2 className="text-4xl ">{title}</h2>
        <h4>$ {price} per month</h4>
      </div>

      {/* card body */}
      <div className="bg-red-200 p-2 mt-4 flex-1 rounded-xl">
        {features.map((feature, index) => (
          <PricingFeatures key={index} feature={feature}></PricingFeatures>
        ))}
      </div>
      <button className="btn w-full mt-4 hover:bg-blue-300">Subscribe</button>
    </div>
  );
};

export default PricingCard;
