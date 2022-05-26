import React from "react";

const Review = ({ review }) => {
  const { ratings, profile, user, comment } = review;
  return (
    <div className="review px-2 rounded-md">
      <div className="flex">
        <img src={profile} alt="review logo" className="profile" />
        <div className="ml-1">
          <h2 className="text-lg font-semibold">{user}</h2>
          {ratings === 5 ? (
            <p>
              <i className="fas fa-star text-lg font-semibold text-yellow-500"></i>
              <i className="fas fa-star text-lg font-semibold text-yellow-500"></i>
              <i className="fas fa-star text-lg font-semibold text-yellow-500"></i>
              <i className="fas fa-star text-lg font-semibold text-yellow-500"></i>
              <i className="fas fa-star text-lg font-semibold text-yellow-500"></i>
              <span className="text-green-900 text-lg ml-1 font-bold">
                {ratings}
              </span>
            </p>
          ) : ratings >= 4 && ratings < 5 ? (
            <p>
              <i className="fas fa-star text-lg font-semibold text-yellow-500"></i>
              <i className="fas fa-star text-lg font-semibold text-yellow-500"></i>
              <i className="fas fa-star text-lg font-semibold text-yellow-500"></i>
              <i className="fas fa-star text-lg font-semibold text-yellow-500"></i>
              <i className="fas fa-star-half-alt text-lg font-semibold text-yellow-500"></i>
              <span className="text-green-900 text-lg ml-1 font-bold">
                {ratings}
              </span>
            </p>
          ) : ratings >= 3 && ratings < 4 ? (
            <p>
              <i className="fas fa-star text-lg font-semibold text-yellow-500"></i>
              <i className="fas fa-star text-lg font-semibold text-yellow-500"></i>
              <i className="fas fa-star text-lg font-semibold text-yellow-500"></i>
              <i className="fas fa-star-half-alt text-lg font-semibold text-yellow-500"></i>
              <span className="text-green-900 text-lg ml-1 font-bold">
                {ratings}
              </span>
            </p>
          ) : (
            <p>
              <i className="fas fa-star text-lg font-semibold text-yellow-500"></i>
              <i className="fas fa-star text-lg font-semibold text-yellow-500"></i>
              <i className="fas fa-star-half-alt text-lg font-semibold text-yellow-500"></i>
              <span className="text-green-900 text-lg ml-1 font-bold">
                {ratings}
              </span>
            </p>
          )}
        </div>
      </div>
      <p className="text-justify px-1">{comment}</p>
    </div>
  );
};

export default Review;
