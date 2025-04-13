import { CheckCheck } from "lucide-react";
import React from "react";

const PricingFeatures = ({ feature }) => {
  return (
    <p className="mt-2 flex gap-2">
      <CheckCheck></CheckCheck> {feature}
    </p>
  );
};

export default PricingFeatures;
