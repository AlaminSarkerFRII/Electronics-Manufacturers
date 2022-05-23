import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const Tool = () => {
  const { id } = useParams();
  const [tool, setTool] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/tool/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTool(data);
      });
  }, [id]);

  console.log(tool);

  // const navigate = useNavigate();

  return (
    <div className="px-20">
      <h2 className="text-3xl text-center text-warning"> Place To Orders </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 my-6 gap-0 min-h-md bg-base-200 mx-auto  shadow-2xl rounded-xl">
        <div class="card max-w-sm max-h-md mx-auto my-6 ">
          <figure>
            <img
              className="rounded-full w-56 h-56"
              src={tool.img}
              alt="images"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">
              {tool.name}
              <div class="badge badge-secondary">NEW</div>
            </h2>
            <p className="text-orange-400 font-bold">
              Minimum Order Quantity : {tool.minOrderQuantity}
            </p>
            <p className="text-orange-400 font-bold">
              Available Quantity : {tool.inStock}
            </p>
            <p className="max-w-md">
              {tool.desc} <span>....</span>
            </p>
            {/* <div class="card-actions justify-end">
            <button onClick={() => handlePurchase(tool)} class="btn  btn-xs">
              Purchase
            </button>
            <button class="btn btn-xs">Add Tools</button>
          </div> */}
          </div>
        </div>
        <div class="card-body">
          <h2 className="text-center">
            Order For :
            <span className="text-info font-bold text-2xl"> {tool.name}</span>
          </h2>
          <div class="form-control">
            <input
              type="email"
              name="email"
              placeholder="email"
              class="input input-bordered"
              required
            />
          </div>
          <div class="form-control">
            <input
              type="number"
              name="number"
              placeholder="Orders"
              class="input input-bordered"
              required
            />
          </div>
          <div class="form-control">
            <input
              type="number"
              name="phone"
              placeholder="Enter Phone Number"
              class="input input-bordered"
              required
            />
          </div>
          <div class="form-control">
            <input
              type="text"
              name="address"
              placeholder="Enter Your Address"
              class="input input-bordered"
              required
            />
          </div>
          <div class="form-control mt-2">
            <button class="btn btn-primary">Confirm Orders</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tool;
