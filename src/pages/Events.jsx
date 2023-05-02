import React from "react";
import MainLayout from "../layout/MainLayout";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import cebuImage from "../assets/places/cebu-event.jpg";
import frontImage from "../assets/calendar/frontpage.png";
import calendar1 from "../assets/calendar/1.png";
import calendar2 from "../assets/calendar/2.png";
import calendar3 from "../assets/calendar/3.png";
import calendar4 from "../assets/calendar/4.png";
import calendar5 from "../assets/calendar/5.png";
import calendar6 from "../assets/calendar/6.png";
import calendar7 from "../assets/calendar/7.png";
import calendar8 from "../assets/calendar/8.png";
import eventsImage from "../assets/calendar/events.png";

function Events() {
  const calendarImages = [
    { img: frontImage, month: "Front Image" },
    { img: calendar1, month: "May" },
    { img: calendar2, month: "June" },
    { img: calendar3, month: "July" },
    { img: calendar4, month: "August" },
    { img: calendar5, month: "September" },
    { img: calendar6, month: "October" },
    { img: calendar7, month: "November" },
    { img: calendar8, month: "December" },
  ];

  return (
    <MainLayout>
      <section className="relative">
        <img
          src={cebuImage}
          alt="Cebu City, Central Visayas, Philippines"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white px-4 py-2">
            Cultural Events and Initiatives
          </h1>
        </div>
      </section>
      <section className="container mx-auto px-4 py-12">
        <p className="text-lg text-center mb-8">
          A series of cultural events and initiatives designed to showcase the
          unique offerings of Philippine cities and {"towns'"} cultural
          institutions. This vibrant celebration of arts and heritage will
          feature a diverse range of exhibitions, performances, and workshops
          that reflect the rich tapestry of Philippine culture.
        </p>
        <Carousel
          infiniteLoop
          showThumbs={true}
          showStatus={false}
          showIndicators={false}
          interval={3000}
          transitionTime={500}
          swipeable
          className="h-full"
        >
          {calendarImages.map((image, index) => (
            <div key={index}>
              <img
                src={image.img}
                alt={image.month}
                className="object-cover object-center w-full h-auto cursor-pointer"
              />
            </div>
          ))}
        </Carousel>
        <div>
          <img
            src={eventsImage}
            alt="Calendar for Cultural Events"
            className="object-cover object-center w-full h-auto cursor-pointer"
          />
        </div>
      </section>
    </MainLayout>
  );
}

export default Events;
