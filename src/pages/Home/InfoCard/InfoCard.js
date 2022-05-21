import React from "react";

const InfoCard = ({ img, cardBody, cardTitle, bgColor }) => {
  return (
    <div class={`card lg:card-side bg-accent shadow-xl my-10 ${bgColor}`}>
      <figure className="pl-5 mt-4">
        <img src={img} alt="Album" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{cardTitle}</h2>
        <p>{cardBody}</p>
      </div>
    </div>
  );
};

export default InfoCard;
