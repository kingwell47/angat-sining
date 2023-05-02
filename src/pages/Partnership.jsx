import React from "react";
import MainLayout from "../layout/MainLayout";

import iloiloImage from "../assets/places/iloilo-church.jpg";
import cagayanImage from "../assets/places/cagayan-de-oro.jpg";

import { Link } from "react-router-dom";

function Partnership() {
  const partnersData = [
    {
      category: "National Costumes",
      organizations: [
        {
          name: "The Metropolitan Museum of Art",
          url: "https://www.metmuseum.org/press/news/2023/ad-campaign",
        },
      ],
    },
    {
      category: "Art Fair",
      organizations: [
        {
          name: "ManilArt Fair",
          url: "https://www.manilartfair.com.ph/",
        },
      ],
    },
    {
      category: "Food Expo",
      organizations: [
        {
          name: "Philippine Food Processors and Exporters Organization (Philfoodex)",
          url: "https://www.philfoodex.org.ph/",
        },
        {
          name: "Department of Agriculture",
          url: "https://www.da.gov.ph/gallery/philippine-food-festival-april-2-2023/",
        },
        {
          name: "Salcedo Saturday Market (Makati)",
          url: "https://www.tripadvisor.com.ph/Attraction_Review-g298450-d1869046-Reviews-Salcedo_Saturday_Market-Makati_Metro_Manila_Luzon.html",
        },
      ],
    },
    {
      category: "Festivals",
      organizations: [
        {
          name: "Kalibo Sto. Nino Ati-Atihan Foundation Inc.",
          url: "https://kaliboaklan.gov.ph/kalibo-ati-atihan-festival/",
        },
        {
          name: "Sinulog Foundation Inc.",
          url: "https://sinulogfoundationinc.com/",
        },
      ],
    },
    {
      category: "Weaving Workshops",
      organizations: [
        {
          name: "Philippine Textile Research Institute under DOST",
          url: "https://www.foi.gov.ph/requests?agency=PTRI",
        },
        {
          name: "National Museum of the Phils.",
          url: "https://www.nationalmuseum.gov.ph/our-collections/ethnology/textiles-and-weaving/",
        },
        {
          name: "MaArte Fair",
          url: "https://museumfoundationph.org/project-category/maarte-fair/",
        },
        {
          name: "HABI: The Philippine Textile Council",
          url: "https://www.habiphilippinetextilecouncil.com/",
        },
        {
          name: "Likhang HABI Market Fair",
          url: "https://www.tatlerasia.com/lifestyle/arts/likhang-habi-market-fair-returns-this-2022",
        },
      ],
    },
    {
      category: "Theatrical / Film Productions",
      organizations: [
        {
          name: "Philippine Educational Theater Association (PETA)",
          url: "https://petatheater.com/",
        },
        {
          name: "Cultural Center of the Philippines (CCP)",
          url: "https://culturalcenter.gov.ph/events/",
        },
        {
          name: "Newport Performing Arts Theatre",
          url: "https://www.newportworldresorts.com/venue/newport-performing-arts-theater",
        },
        {
          name: "Artistang Artlets",
          url: "https://artistangartlets.wordpress.com/about/",
        },
        {
          name: "Pista ng Pelikulang Pilipino",
          url: "https://www.fdcp.ph/programs/PPP",
        },
      ],
    },
    {
      category: "Dance Performances",
      organizations: [
        {
          name: "Aliw Theatre",
          url: "https://aliwtheater.com.ph/",
        },
      ],
    },
    {
      category: "Lifestyle Expo",
      organizations: [
        {
          name: "Manila FAME",
          url: "https://fameplus.com/about_us",
        },
        {
          name: "National Book Development Board Book Fair",
          url: "https://books.gov.ph/",
        },
      ],
    },
  ];

  return (
    <MainLayout>
      <section className="relative">
        <img
          src={iloiloImage}
          alt="Iloilo City, Western Visayas"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white px-4 py-2">
            Partnership Program
          </h1>
        </div>
      </section>
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-lg mb-8">
                This partnership program will leverage the strengths of each
                participating organization to develop joint marketing campaigns,
                package deals, and cross-promotions, ultimately enhancing the
                cultural experience for both local and international visitors.
              </p>
              <p className="text-lg mb-8">
                Through strategic collaborations, this Partnership Program aims
                to maximize the potential of cultural institutions and the
                tourism industry in generating economic growth, while preserving
                and promoting the rich cultural heritage of the Philippines.
              </p>
              <p className="text-lg mb-8">
                Participating Organizations and Events:
              </p>
            </div>

            <ul>
              {partnersData.map((partner, index) => (
                <li key={index} className="mb-6">
                  <h3 className="font-semibold text-xl mb-2">
                    {partner.category}
                  </h3>
                  <ul className="list-disc list-inside pl-5">
                    {partner.organizations.map((organization, orgIndex) => (
                      <li key={orgIndex} className="mb-1">
                        <a
                          href={organization.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:text-blue-700"
                        >
                          {organization.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            <div className="text-center mt-8">
              <Link to="/events">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow-md transition duration-300">
                  Go to Cultural Events and Initiatives
                </button>
              </Link>
            </div>
          </div>
          <div className="h-full relative">
            <img
              src={cagayanImage}
              alt="Cagayan De Oro, Northern Mindanao"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute bottom-0 left-0 bg-black text-white w-full bg-opacity-70 text-sm py-2 px-4">
              Cagayan De Oro, Northern Mindanao
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default Partnership;
