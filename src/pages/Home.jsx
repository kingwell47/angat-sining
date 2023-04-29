import React from "react";
import Hero from "../components/Hero";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import coronImage from "../assets/coron.jpg";
import cebuImage from "../assets/cebu.jpg";
import elnidoImage from "../assets/elnido.jpg";

import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Hero />
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
            <Carousel
              autoPlay
              infiniteLoop
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              interval={3000}
              transitionTime={500}
              swipeable
              className="h-full"
            >
              <div className="h-full">
                <img
                  src={coronImage}
                  alt="Coron, MIMAROPA, Philippines"
                  className="object-cover object-center min-w-full min-h-full"
                />
              </div>
              <div className="h-full">
                <img
                  src={cebuImage}
                  alt="Cebu, Philippines"
                  className="object-cover object-center min-w-full min-h-full"
                />
              </div>
              <div className="h-full">
                <img
                  src={elnidoImage}
                  alt="El Nido, Philippines"
                  className="object-cover object-center min-w-full min-h-full"
                />
              </div>
            </Carousel>
            <div className="md:col-span-3">
              <h2 className="text-3xl font-semibold mb-8">Project Overview</h2>
              <p className="mb-8">
                Our initiative aims to leverage the rich cultural heritage of
                Philippine cities and towns to drive economic growth and create
                new opportunities for revenue and job creation. The Philippines
                is a country with a diverse and vibrant cultural scene, with a
                long history of arts, traditions, and customs that can be
                harnessed to attract international tourists and support local
                communities.
              </p>
              <p className="mb-8">
                By promoting cultural institutions like museums, galleries, and
                performance venues, we believe that Philippine cities and towns
                can attract visitors from around the world and build a
                sustainable future for their residents. In doing so, we aim to
                support the growth of the cultural sector and contribute to the
                development of the Philippine creative economy.
              </p>
              <p className="mb-8">
                Our project consists of a feasibility study, marketing and
                branding strategy, partnership program, cultural events and
                initiatives, and training program. By working closely with local
                stakeholders and partners, we will develop a comprehensive
                approach to cultural tourism that is both sustainable and
                inclusive, ensuring that the benefits are felt by all members of
                the community.
              </p>
              <div className="text-center md:text-left">
                <Link to="/feasibility">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow-md transition duration-300">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
