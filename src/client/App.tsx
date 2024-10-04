import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        {/* Define your routes using element instead of component */}
        <Route path="/" element={<Home />} />
        {/* You can add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
