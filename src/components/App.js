import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";
import Booking from "./Booking";
import Confirmation from "./Confirmation";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/flight-search" element={<Search />} />
      <Route path="/flight-booking" element={<Booking />} />
      <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
  );
}
