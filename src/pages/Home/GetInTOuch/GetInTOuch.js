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
          <div class="max-w-lg">
            <div className="flex flex-col item-center justify-between">
              <div className="text-white text-2xl">
                <h2 className="tex-5xl ">
                  Don't Miss Any Update.you can explore with us easily{" "}
                </h2>
                <div class="form-control flex flex-row items-center justify-between ">
                  <span class="label-text text-2xl text-white">
                    Enter your email address
                  </span>
                  <div class="relative my-10">
                    <input
                      type="text"
                      placeholder="username@site.com"
                      class="input input-bordered w-full pr-16"
                    />
                    <button class="btn btn-primary absolute top-0 right-0 rounded-l-none">
                      Subscribe
                    </button>
                  </div>
                </div>
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
