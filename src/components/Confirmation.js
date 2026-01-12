import React from "react";
import { useNavigate } from "react-router-dom";

export default function Confirmation() {
  const navigate = useNavigate();
  return (
    <div>
      Booking Confirmed
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
}
