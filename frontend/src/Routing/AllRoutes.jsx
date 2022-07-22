import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default AllRoutes;
