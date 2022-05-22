import React from "react";

const Tool = ({ tool }) => {
  const { _id, name, desc, img, minOrderQuantity, inStock } = tool;
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="images" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">
            {name}
            <div class="badge badge-secondary">NEW</div>
          </h2>
          <p>{desc}</p>
          <div class="card-actions justify-end">
            <button class="btn  btn-xs">Fashion</button>
            <button class="btn btn-xs">Products</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tool;
