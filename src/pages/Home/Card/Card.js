import React from "react";
import clock from "../../../assests/icons/clock.svg";
import marker from "../../../assests/icons/marker.svg";
import phone from "../../../assests/icons/phone.svg";
import InfoCard from "../InfoCard/InfoCard";

const Card = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center gap-4">
      <InfoCard
        cardTitle="Free Shipping"
        cardBody="On all orders over $75.00"
        img={clock}
      ></InfoCard>
      <InfoCard
        cardTitle="100% Payment Secure"
        cardBody="Your payment are safe with us."
        img={marker}
        bgColor="bg-info"
      ></InfoCard>
      <InfoCard
        cardTitle="Support 24/7"
        cardBody="Contact us 24 hours a day"
        img={phone}
      ></InfoCard>
    </div>
  );
};

export default Card;
