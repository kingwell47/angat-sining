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
          className="h-full border-4 mb-4"
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

        <div className="container mx-auto mt-6">
          <h2 className="text-2xl font-bold mb-6">
            Upcoming Events in the Philippines
          </h2>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-3">
              Filipiniana, Baro’t Saya, and Barong pop-up in Intramuros (March
              2023)
            </h3>
            <a
              href="https://www.tripzilla.ph/intramuros-filipiniana/40329/"
              className="text-blue-600"
            >
              https://www.tripzilla.ph/intramuros-filipiniana/40329/
            </a>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-3">
              15th Philippine Food Expo 2023 (April 28-30)
            </h3>
            <a
              href="https://www.philippinefoodexpo.ph/photo-gallery.html"
              className="text-blue-600"
            >
              https://www.philippinefoodexpo.ph/photo-gallery.html
            </a>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-3">Festivals</h3>
            <ul className="list-disc list-inside">
              <li>Ati-Atihan - 01/15, Kalibo, Aklan, Panay</li>
              <li>Sinulog - 01/15, Cebu City</li>
              <li>Kaamulan - 03/23 to 04/23, Malaybalay City, Bukidnon</li>
              <li>Moriones - 04/02 to 04/08, Island of Marinduque</li>
              <li>Panagbenga - 04, Baguio City</li>
              <li>Giant Lantern - 12, San Fernando City</li>
              <li>Dinagyang - 01/13 to 01/22, Iloilo City</li>
              <li>Pahiyas - 05/15, Lucban, Quezon</li>
              <li>Kadayawan - 08/14 to 08/20, Davao City</li>
              <li>Masskara - 10/22, Bacolod City</li>
              <li>Higantes - 11/22 and 11/23, Angono, Rizal</li>
              <li>Pintados - 06/27, Tacloban City</li>
            </ul>
            <p className="mt-2">
              Additional:{" "}
              <a
                href="https://www.tpb.gov.ph/tpb-calendar-of-promotions-and-marketing-activities/calendar-of-philippine-festivals-and-monthly-observances-theme/"
                className="text-blue-600"
              >
                https://www.tpb.gov.ph/tpb-calendar-of-promotions-and-marketing-activities/calendar-of-philippine-festivals-and-monthly-observances-theme/
              </a>
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-3">Weaving Workshops</h3>
            <ul className="list-disc list-inside">
              <li>May 7, Robinsons Galleria</li>
              <li>May 13, Risque Designs, Marikina</li>
              <li>May 14, Lula Cafe, Tagaytay</li>
              <li>May 20, Habitat570, Pasig</li>
            </ul>
            <p className="mt-2">
              Source:{" "}
              <a
                href="https://theartofyarn.com/collections/workshops"
                className="text-blue-600"
              >
                https://theartofyarn.com/collections/workshops
              </a>
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-3">Theatrical Productions</h3>
            <ul className="list-disc list-inside">
              <li>
                Walang Aray - 02/17 to 05/14, PETA Theater Center, New Manila,
                Quezon City
              </li>
              <li>Ang Pag-uusig - 02/17 to 03/12, CCP Black Box Theater</li>
              <li>Nekropolis - 04/14 to 04/30, CCP Black Box Theater</li>
              <li>
                The Virgin Labfest - 06/07 to 06/25, CCP Black Box Theater
              </li>
              <li>Uncle Jane - 02/24 to 02/26, The Mirror Studios</li>
              <li>
                Ang Huling El Bimbo - 04 to 05, Newport Performing Arts Theater
              </li>
              <li>Snow White and the Prince - mid-Sept to Dec</li>
              <li>Zsa Zsa Zaturnnah, Ateneo BlueREP</li>
              <li>Kung Paano Nanalo sa Karera si Rosang Taba, Dulaang UP</li>
            </ul>
            <p className="mt-2">
              Source:{" "}
              <a
                href="http://theaterfansmanila.com/state-of-the-stage-2023-manilas-upcoming-theater-scene/"
                className="text-blue-600"
              >
                http://theaterfansmanila.com/state-of-the-stage-2023-manilas-upcoming-theater-scene/
              </a>
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-3">Dance Performances</h3>
            <ul className="list-disc list-inside">
              <li>Romeo and Juliet - 02/18-19, Aliw Theater</li>
              <li>Don Quixote - 05/27-28, Aliw Theater</li>
              <li>Ibong Adarna - 08/19-20, Aliw Theater</li>
              <li>Diyosa - 04/14-16</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-3">Cultural Observances</h3>
            <ul className="list-disc list-inside">
              <li>Bankaton - Aug 20</li>
              <li>KUMBIRA Culinary show and live competitions - aug 19-21</li>
              <li>Paskuhan sa barangay</li>
              <li>Hanging of the green</li>
              <li>Philippine International Lantern Parade</li>
            </ul>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default Events;
