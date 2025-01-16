import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import About from "./components/About";
import Dashboard from "./components/Dashboard"; // Parent for nested routes
import Profile from "./components/Profile"; // Nested child
import Settings from "./components/Settings"; // Nested child
import Navbar from "./Layout/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />

        {/* Nested Routes under Dashboard */}
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
