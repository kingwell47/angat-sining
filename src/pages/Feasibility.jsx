import React from "react";
import MainLayout from "../layout/MainLayout";

import sanfelipeImage from "../assets/sanfelipe.jpg";
import graphImage from "../assets/Graph.png";

const pageData = [
  {
    title: "Market Analysis",
    content: `The Philippines has one of the most diversified and dynamic cultural scenes in the world. According to the Department of Tourism, in 2019, the Philippines recorded a Total of 8.2 million international tourist arrivals, with a 15.24% increase from the previous year. Cultural tourism is a vital component of the Philippine tourism sector, visitors want to experience the country's distinct culture, which includes music, dancing, cuisine, arts & crafts, and festivals.`,
    source:
      "https://beta.tourism.gov.ph/news_and_updates/2019-international-arrivals-exceed-target-with-8-26-million-visitors-to-the-philippines/",
  },
  {
    title: "Visitor Demographics",
    content: `Neighboring countries in Southeast Asia, such as South Korea, China, Taiwan, and Japan accounts for the majority of the visitors to the Philippines. However, Western countries, particularly the United States, Australia, and some European countries, are showing increasing interest as their percentages grow.`,
    source:
      "https://www.bsp.gov.ph/Media_And_Research/Publications/EN22-02.pdf",
  },
  {
    title: "Market Trends",
    content: `The Philippines' cultural tourism business is still in its early phases of growth. Many cultural institutions, such as museums, galleries, and performance venues, are concentrated in urban areas, leaving rural communities with untapped potential for cultural tourism. Tourists are becoming more interested in visiting off-the-beaten-path sites that provide unique cultural experiences.
    `,
    source:
      "https://www.mordorintelligence.com/industry-reports/market-entry-tourism-and-hotel-industry-in-philippines",
  },
  {
    title: "Potential Revenue Streams",
    content: `Cultural tourism has the ability to create cash for local communities while also helping the cultural sector thrive. Entrance fees for museums and galleries, sales of traditional crafts and products, and money from cultural events and festivals could all provide revenue. Cultural tourism can also provide possibilities for local businesses to provide services such as food and lodging.`,
    source:
      "http://research.lpubatangas.edu.ph/wp-content/uploads/2017/06/APJEAS-2017.4.2.02.pdf",
  },
];

function Feasibility() {
  return (
    <MainLayout>
      <section className="relative">
        <img
          src={sanfelipeImage}
          alt="San Felipe, Northern Luzon"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white px-4 py-2">
            Feasibility Study
          </h1>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1 mb-8">
              <img
                src={graphImage}
                alt="Graph placeholder"
                className="object-cover object-center w-full h-auto"
              />
              <p className="text-center text-sm text-gray-600 mt-2">
                Inbound Visitor Arrivals, 2015-2019
              </p>
            </div>
            <ol className="lg:col-span-3 list-decimal list-outside pl-8">
              {pageData.map((data, index) => (
                <li className="mb-4" key={index}>
                  <strong>{data.title}:</strong> {data.content}
                  <br />
                  <a
                    href={data.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Source
                  </a>
                </li>
              ))}
            </ol>
          </div>
          <div className="text-center mt-8">
            <a
              href="https://drive.google.com/file/d/1xZqydhT5TZ7NbFdZ0leUMDezqySZQ1IA/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow-md transition duration-300"
            >
              Download PDF Report
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default Feasibility;
