import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddReview = () => {

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    const dataForm = {
      name: data.name,
      price: data.price,
      inStock: data.inStock,
      minOrderQuantity: data.minOrderQuantity,
      desc: data.desc,
      img: data.img,
    };

    // const url =;
    fetch("http://localhost:5000/tool", {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(dataForm),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success("Tool added successfully");
        reset();
      });
  };

  return (
    <div className="w-3/5 mx-auto">
    <form onSubmit={handleSubmit(onSubmit)}>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body bg-accent">
          <h1 className="text-2xl text center">Add Reviews</h1>

          <input
            className="mb-2 input input-ghost w-full max-w-xs bg-white"
            placeholder="Product Name"
            type="text"
            {...register("name")}
          />

          <input
            className="mb-2 input input-ghost w-full max-w-xs bg-white"
            placeholder="Available Quantity"
            type="number"
            {...register("inStock")}
          />

          <input
            className="mb-2 input input-ghost w-full max-w-xs bg-white"
            placeholder=" Minimum Order quantity"
            type="number"
            {...register("minOrderQuantity")}
          />

          <input
            className="mb-2 input input-ghost w-full max-w-xs bg-white"
            placeholder="Price"
            type="number"
            {...register("price")}
          />

          <textarea
            className="mb-2 input input-ghost w-full max-w-xs bg-white"
            placeholder="Description"
            type="text"
            {...register("desc")}
          />

          <input
            className="mb-2 input input-ghost w-full max-w-xs bg-white"
            placeholder="Photo URL"
            {...register("img")}
          />

          <div class="card-actions justify-end">
            <input
              className="btn-primary input input-ghost w-full max-w-xs font-bold"
              type="submit"
              value="Add Tool"
            />
          </div>
        </div>
      </div>
    </form>
  </div>
  );
};

export default AddReview;
