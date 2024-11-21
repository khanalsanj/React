import React from "react";
import { BrowserRouter, Route, Router } from "react-router-dom";
import Psidebar from "./Psidebar";
const Navigation = () => {
  return (
    <Router>
      <Psidebar></Psidebar>
      <Route>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/skills" element={<div>Skills</div>} />
        <Route path="/education" element={<div>Education</div>} />
        <Route path="/experiences" element={<div>Experiences</div>} />
        <Route path="/contact" element={<div>Contact</div>} />
      </Route>
    </Router>
  );
};

export default Navigation;
