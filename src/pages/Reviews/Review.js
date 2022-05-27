import React from "react";

const Review = ({ review }) => {
  const { ratings, profile, user, comment } = review;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-7">
      <div class="card w-96 h-min bg-base-100 shadow-xl hover:opacity-50 transition duration-300 ease-in-out">
        <figure class="px-8 pt-8">
          <img src={profile} alt="Shoes" class="rounded-full w-20 h-20 " />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{user}</h2>
          <p className="">{comment.slice(0, 50)}</p>
          <p className="text-2xl font-bold text-yellow-400">{ratings}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
