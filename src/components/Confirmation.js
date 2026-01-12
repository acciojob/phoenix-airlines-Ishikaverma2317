import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Confirmation() {
  const booking = useSelector(state => state.booking);
  const navigate = useNavigate();

  return (
    <div>
      <h2>Booking Confirmed</h2>
      <p>{booking.name}</p>
      <p>{booking.email}</p>
      <p>{booking.phone}</p>

      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
}
