import React from "react";
import ban1 from "../../../assests/Banner/ban-1.jpg";
import ban2 from "../../../assests/Banner/ban-2.jpg";
import ban3 from "../../../assests/Banner/ban-3.jpg";

const Banner = () => {
  return (
    <div class="carousel h-96 ">
      <div id="slide1" class="carousel-item relative w-full">
        <img src={ban1} class="w-full h-96" alt="" />
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" class="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" class="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" class="carousel-item relative w-full">
        <img src={ban2} class="w-full" alt="" />
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" class="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" class="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" class="carousel-item relative w-full">
        <img src={ban3} class="w-full" alt="" />
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" class="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" class="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
