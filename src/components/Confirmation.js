import React from "react";
import { useNavigate } from "react-router-dom";

export default function Confirmation() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Booking Confirmed</h2>
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
}
