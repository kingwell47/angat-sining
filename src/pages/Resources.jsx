import React from "react";
import MainLayout from "../layout/MainLayout";

const resourcesList = [
  {
    title: "Department of Tourism Philippines (DOT)",
    description:
      "The official website of the Philippines' Department of Tourism provides information on various cultural attractions, events, and destinations.",
    link: "https://www.tourism.gov.ph/",
  },
  {
    title: "National Commission for Culture and the Arts (NCCA)",
    description:
      "The NCCA is the Philippines' primary government agency for arts and culture, and their website offers information on various cultural events, festivals, and programs.",
    link: "https://www.ncca.gov.ph/",
  },
  {
    title: "Cultural Center of the Philippines (CCP)",
    description:
      "The CCP is a premier institution for the performing arts and offers a wide variety of cultural shows, events, and workshops throughout the year.",
    link: "http://culturalcenter.gov.ph/",
  },
  {
    title: "UNESCO World Heritage Sites in the Philippines",
    description:
      "There are several UNESCO World Heritage Sites in the country, which are must-visit destinations for cultural tourists. Learn more about them here.",
    link: "https://whc.unesco.org/en/statesparties/ph",
  },
  {
    title: "Philippine Cultural Heritage Map",
    description:
      "This interactive map is a comprehensive database of the country's cultural and historical sites.",
    link: "https://www.philippineheritagemap.org/",
  },
  {
    title: "Local Tourism Offices",
    description:
      "When visiting specific regions or cities in the Philippines, it's helpful to connect with the local tourism offices for region-specific cultural attractions and events.",
    link: "https://www.tourism.gov.ph/regional_offices.aspx",
  },
];

function Resources() {
  return (
    <MainLayout>
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-center mb-8">Resources</h2>
        <ul className="space-y-4 text-lg">
          {resourcesList.map((res, index) => (
            <li key={index}>
              <a
                href={res.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-blue-600 hover:text-blue-800"
              >
                {res.title}
              </a>{" "}
              - {res.description}
            </li>
          ))}
        </ul>
      </section>
    </MainLayout>
  );
}

export default Resources;
