import { useState } from "react";

import { Link } from "react-router-dom";
import angatLogo from "../assets/angat.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to={`/`} className="flex items-center space-x-2">
            <img src={angatLogo} alt="Logo" className="w-8 h-8" />{" "}
            {/* Add your logo */}
            <span className="text-xl font-semibold text-gray-700">
              Angat Sining
            </span>
          </Link>
          <div className="lg:hidden">
            <button
              className="navbar-burger flex items-center py-2 px-3 text-gray-500 rounded hover:text-gray-700 hover:border-gray-500"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <svg
                  className="fill-current h-4 w-4"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="fill-current h-4 w-4"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M0 3a1 1 0 011-1h18a1 1 0 110 2H1a1 1 0 01-1-1zm0 6a1 1 0 011-1h18a1 1 0 110 2H1a1 1 0 01-1-1zm1 5a1 1 0 100 2h18a1 1 0 100-2H1z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } lg:block lg:flex lg:items-center w-full lg:w-auto`}
          >
            <ul className="mt-4 lg:mt-0 lg:flex lg:space-x-12" role="list">
              <li>
                <Link
                  to={`/feasibility`}
                  className="block text-gray-600 py-1 px-1 transition duration-300 hover:text-black hover:bg-gradient-to-r from-blue-300 via-purple-300 to-red-300 rounded"
                >
                  Feasibility Study
                </Link>
              </li>
              <li>
                <Link
                  to={`/marketing`}
                  className="block text-gray-600 py-1 px-1 transition duration-300 hover:text-black hover:bg-gradient-to-r from-blue-300 via-purple-300 to-red-300 rounded"
                >
                  Marketing and Branding Strategy
                </Link>
              </li>
              <li>
                <Link
                  to={`/partnership`}
                  className="block text-gray-600 py-1 px-1 transition duration-300 hover:text-black hover:bg-gradient-to-r from-blue-300 via-purple-300 to-red-300 rounded"
                >
                  Partnership Program
                </Link>
              </li>
              <li>
                <Link
                  to={`/events`}
                  className="block text-gray-600 py-1 px-1 transition duration-300 hover:text-black hover:bg-gradient-to-r from-blue-300 via-purple-300 to-red-300 rounded"
                >
                  Cultural Events and Initiatives
                </Link>
              </li>
              <li>
                <Link
                  to={`/resources`}
                  className="block text-gray-600 hover:text-gray-900 py-1 px-1 transition duration-300 hover:text-black hover:bg-gradient-to-r from-blue-300 via-purple-300 to-red-300 rounded"
                >
                  Resources
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
