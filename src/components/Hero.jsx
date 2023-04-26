import React from "react";

import flagImage from "../assets/flag.jpg";

function Hero() {
  return (
    <div className="relative">
      <img
        src={flagImage}
        alt="The flag of the Philippines"
        className="w-full h-96 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-white px-4 py-2">
          Celebrating Philippine Culture Through Tourism
        </h1>
      </div>
    </div>
  );
}

export default Hero;
