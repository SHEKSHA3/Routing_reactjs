import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import "./routeconcept/Routeconsept.css";
// import logo from "./Logo.png";

import Home from "./routeconcept/Home";
import About from "./routeconcept/About";
import Contact from "./routeconcept/Contact";
import Tempion from "./routeconcept/Tempion";
import Essention from "./routeconcept/Essention";
import Testcasion from "./routeconcept/Testcasion";
import Sequencion from "./routeconcept/Sequencion";

const routes = [
  { path: "/shoution", name: "Shoution", component: <Home /> },
  { path: "/todosion", name: "Todosion", component: <About /> },
  { path: "/Releasion", name: "Releasion", component: <Contact /> },
  { path: "/Tempion", name: "Tempion", component: <Tempion /> },
  { path: "/Essention", name: "Essention", component: <Essention /> },
  { path: "/Testcasion", name: "Testcasion", component: <Testcasion /> },
  { path: "/Sequencion", name: "Sequencion", component: <Sequencion /> },
];

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item image">
              <img src="/Logo.png" alt="Logo" className="image" />
            </li>
            {routes.map((route) => (
              <li className="nav-item" key={route.path}>
                <Link to={route.path} className="nav-link">
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.component}
            />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
