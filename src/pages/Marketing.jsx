import React, { useState } from "react";
import MainLayout from "../layout/MainLayout";

import bunutanImage from "../assets/places/bunutan.jpg";

import { Link } from "react-router-dom";

import artdayImage from "../assets/marketing/artdayph.png";
import mabuhayImage from "../assets/marketing/mabuhay.png";
import luzonFestival from "../assets/marketing/luzon-festival.png";
import visayasFestival from "../assets/marketing/visayas-festival.png";
import mindanaoFestival from "../assets/marketing/mindanao-festival.png";
import theatherDance from "../assets/marketing/theater-dance.png";

function Marketing() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      img: luzonFestival,
      text: "Panagbenga Festival Poster",
    },
    {
      img: visayasFestival,
      text: "Masskara Festival Poster",
    },
    {
      img: mindanaoFestival,
      text: "Kadayawan Festival Poster",
    },
    {
      img: mabuhayImage,
      text: "Mabuhay Food Fair Poster",
    },
    {
      img: theatherDance,
      text: "Angat Sining Poster",
    },
    {
      img: artdayImage,
      text: "Philippine Art Day",
    },
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

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
      <section className="container mx-auto px-4 py-12">
        <p className="text-lg mb-8">
          A marketing and branding strategy that leverages digital and offline
          channels to promote cultural tourism in Philippine cities and towns,
          including social media campaigns, influencer partnerships, and
          targeted advertising.
        </p>
        <h3 className="text-2xl font-semibold mb-4">Objectives</h3>
        <ul className="list-disc list-inside pl-5 mb-8">
          <li>
            Establish brand awareness through social media campaigns, local
            business sponsorships, influencer partnerships, and targeted
            advertising.
          </li>
          <li>
            Boost website traffic through social media engagement, ad campaigns,
            content marketing such as pubmats or infographics, and Search Engine
            Optimization (SEO).
          </li>
        </ul>
        <h3 className="text-2xl font-semibold mb-4">People</h3>
        <p className="text-lg mb-8">
          The target audience is men and women between the ages of 25 to 35
          years old who live in urban areas where most art galleries, museums,
          and cultural institutions are located. These people may have an
          interest in traveling, arts, local craftsmanship and traditions,
          exhibits, cultural events, and other similar activities.
        </p>
        <h3 className="text-2xl font-semibold mb-4">Place</h3>
        <p className="text-lg mb-8">Social media</p>
        <h3 className="text-2xl font-semibold mb-4">Promotion</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="cursor-pointer"
              onClick={() => openModal(image.img)}
            >
              <img
                src={image.img}
                alt={image.text}
                className="object-cover object-center w-full h-auto"
              />
              <p className="mt-2 text-center">{image.text}</p>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed z-10 inset-0 overflow-y-auto"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div
                className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                aria-hidden="true"
                onClick={closeModal}
              ></div>
              <span
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <img
                  src={selectedImage}
                  alt="Modal Image"
                  className="object-cover object-center w-full h-auto"
                />
                <button
                  className="absolute top-0 right-0 p-2 text-gray-900 hover:text-gray-600"
                  onClick={closeModal}
                >
                  &#10005;
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
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
