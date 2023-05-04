import React from "react";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Angat Sining</h3>
            <ul className="mt-4 text-gray-400">
              <li>Nicole Angela Aledro</li>
              <li>Coby Emmanuel Anupol</li>
              <li>Jhon Glenn Caranay</li>
              <li>Joel Doctor</li>
              <li>Christienne Paula Guidote</li>
              <li>Virna Marie Guzman</li>
              <li>Laurize Labarda</li>
              <li>Ethan Raphael Ona</li>
              <li>Vincent Paul Pangilinan</li>
              <li>Alison Noreen Rabe</li>
              <li>Cristina Villafuerte</li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="mt-4" role="list">
              <li>
                <Link to={`/`} className="text-gray-400 hover:text-gray-100">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={`/feasibility`}
                  className="text-gray-400 hover:text-gray-100"
                >
                  Feasibility Study
                </Link>
              </li>
              <li>
                <Link
                  to={`/marketing`}
                  className="text-gray-400 hover:text-gray-100"
                >
                  Marketing and Branding Strategy
                </Link>
              </li>
              <li>
                <Link
                  to={`/partnership`}
                  className="text-gray-400 hover:text-gray-100"
                >
                  Partnership Program
                </Link>
              </li>
              <li>
                <Link
                  to={`/events`}
                  className="text-gray-400 hover:text-gray-100"
                >
                  Cultural Events and Initiatives
                </Link>
              </li>
              <li>
                <Link
                  to={`/resources`}
                  className="text-gray-400 hover:text-gray-100"
                >
                  Resources
                </Link>
              </li>
              <li>
                <br />
                <a
                  href="https://www.pexels.com/"
                  className="text-gray-400 hover:text-gray-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Images from Pexels.com
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400">
              UP Open University <br />
              Los Baños, Laguna <br />
              Philippines, 4031 <br />
            </p>
          </div>
        </div>
        <hr className="border-gray-600 my-6" />
        <div className="text-center text-sm">
          &copy; {new Date().getFullYear()} Angat Sining. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
