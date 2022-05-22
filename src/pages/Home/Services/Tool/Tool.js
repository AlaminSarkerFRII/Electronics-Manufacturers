import React from "react";

const Tool = ({ tool }) => {
  const { _id, name, desc, img, minOrderQuantity, inStock } = tool;
  return (
    <div>
      <div class="card w-96 max-h-md bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="images" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">
            {name}
            <div class="badge badge-secondary">NEW</div>
          </h2>
          <p className="max-w-md">
            {desc?.slice(0, 100)} <span>....</span>
          </p>
          <div class="card-actions justify-end">
            <button class="btn  btn-xs">Purchase</button>
            <button class="btn btn-xs">Add Tools</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tool;
