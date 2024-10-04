import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./features/home/Home";
import NotFound from "./pages/NotFound";
import Login from "./features/login/Login";
import Register from "./features/register/Register";
import Navbar from "./components/Navbar";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Define your routes using element instead of component */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
        {/* You can add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
