import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./pages/AboutUs.jsx";
import Feasibility from "./pages/Feasibility.jsx";
import Marketing from "./pages/Marketing.jsx";
import Partnership from "./pages/Partnership.jsx";
import Events from "./pages/Events.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Resources from "./pages/Resources.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "about-us",
    element: <AboutUs />,
  },
  {
    path: "feasibility",
    element: <Feasibility />,
  },
  {
    path: "marketing",
    element: <Marketing />,
  },
  {
    path: "partnership",
    element: <Partnership />,
  },
  {
    path: "events",
    element: <Events />,
  },
  {
    path: "contact-us",
    element: <ContactUs />,
  },
  {
    path: "resources",
    element: <Resources />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
