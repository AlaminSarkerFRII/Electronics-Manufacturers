import React from "react";

const GetInTOuch = () => {
  return (
    <div className="my-20">
      <div
        class="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/brmscnN/back.jpg)",
        }}
      >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content flex">
          <div class="max-w-md ">
            <div className="flex flex-col item-center justify-between">
              <div className="flex-1">
                <h2>OUR FACILITY</h2>
                <h2>Explore our facility. Book a tour today.</h2>
              </div>
              <div className="flex-1 items-center justify-center">
                <input className="mb-3 px-9" type="email" name="" id="" />
                <input className="mb-3 px-9" type="email" name="" id="" />
                <input className="mb-3 px-9" type="email" name="" id="" />
                <input className="mb-3 px-9" type="email" name="" id="" />
              </div>
            </div>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTOuch;
