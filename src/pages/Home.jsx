import React from "react";
import Hero from "../components/Hero";
import PlaceholderSection from "../components/PlaceholderSection";

function Home() {
  return (
    <>
      <Hero />
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8">Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Overview Card */}
            <div className="bg-white p-6 rounded shadow-md">
              <h3 className="text-xl font-semibold mb-4">Feature 1</h3>
              <p>
                Our initiative aims to leverage the rich cultural heritage of
                Philippine cities and towns to drive economic growth and create
                new opportunities for revenue and job creation.
              </p>
            </div>
            {/* Overview Card */}
            <div className="bg-white p-6 rounded shadow-md">
              <h3 className="text-xl font-semibold mb-4">Feature 2</h3>
              <p>
                By promoting cultural institutions like museums, galleries, and
                performance venues, we believe that Philippine cities and towns
                can attract visitors from around the world and build a
                sustainable future for their residents.
              </p>
            </div>
            {/* Overview Card */}
            <div className="bg-white p-6 rounded shadow-md">
              <h3 className="text-xl font-semibold mb-4">Feature 3</h3>
              <p>
                Our project consists of a feasibility study, marketing and
                branding strategy, partnership program, cultural events and
                initiatives, and training program.
              </p>
            </div>
          </div>
        </div>
      </section>
      <PlaceholderSection />
    </>
  );
}

export default Home;
