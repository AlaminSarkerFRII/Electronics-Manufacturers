import React from "react";
import BodBanner from "../../../assests/Banner/Banner.png";

const BodyBanner = () => {
  return (
    <div className="my-20 px-20">
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row gap-20">
          <img
            src={BodBanner}
            className="max-w-sm w-full rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h2 className="text-xl font-bold text-info mb-4">
              PRODUCT LIFECYCLE INTEGRATION
            </h2>
            <h1 className="text-5xl font-bold">
              End-to-end Electronic Manufacturing tools that Compliment the full
              Product Lifecycle.
            </h1>
            <p className="py-6">
              We enable you to accomplish your business goals by supporting your
              entire product development lifecycle. By tailoring our
              manufacturing process to your specific needs, we are equipped to
              support your unique needs. Focused on partnering with you rather
              than just delivering: we are by your side, every step of the way;
              whether its for a single part or your full product lifecycle
              needs.
            </p>
            <div className="flex item-center justify-start">
              <button className="btn hover:btn-primary mr-10">
                Explore Now
              </button>
              <button className="btn hover:btn-error">About Us </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyBanner;
