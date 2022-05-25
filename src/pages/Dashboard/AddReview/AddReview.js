import React from "react";

const AddReview = () => {
  return (
    <div className="px-12">
      <h2 className="text-3xl text-indigo-400 my-2">Add Your Review</h2>
      <div>
        <input
          type="text"
          placeholder="Your Name"
          class="input input-bordered w-full max-w-lg"
        />
        <textarea
          class="textarea textarea-bordered w-full max-w-lg mt-3"
          placeholder="Your Comment"
        ></textarea>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-lg">
        <input
          type="text"
          name="email"
          placeholder="Your Email"
          class="block input input-bordered w-full max-w-sm"
        />
        <input
          type="text"
          placeholder="your ratings not more than 5 "
          class="block input input-bordered w-full max-w-sm"
        />
        <input
          type="text"
          placeholder="Your Job"
          class="block input input-bordered max-w-sm"
        />
        <input
          type="file"
          name="image"
          id=""
          class="block input input-bordered max-w-sm"
        />
      </div>
      <button className="btn btn-primary my-2 w-full max-w-lg mx-auto">
        Submit
      </button>
    </div>
  );
};

export default AddReview;
