import React from "react";
import MainLayout from "../layout/MainLayout";
import PlaceholderSection from "../components/PlaceholderSection";

import bunutanImage from "../assets/places/bunutan.jpg";

import { Link } from "react-router-dom";

function Marketing() {
  return (
    <MainLayout>
      <section className="relative">
        <img
          src={bunutanImage}
          alt="Bunutan"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white px-4 py-2">
            Marketing and Branding Strategy
          </h1>
        </div>
      </section>
      <PlaceholderSection />
      <div className="text-center mt-8">
        <Link to="/partnership">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow-md transition duration-300">
            Go to Partnership Program
          </button>
        </Link>
      </div>
    </MainLayout>
  );
}

export default Marketing;
