import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const [showFlights, setShowFlights] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <input type="radio" name="trip" /> One Way
      <input type="radio" name="trip" /> Round Trip

      <input type="text" placeholder="Source" />
      <input type="text" placeholder="Destination" />

      <button className="book-flight" onClick={() => setShowFlights(true)}>
        Search Flights
      </button>

      {showFlights && (
        <ul>
          <li onClick={() => navigate("/flight-booking")}>Flight 1</li>
          <li onClick={() => navigate("/flight-booking")}>Flight 2</li>
        </ul>
      )}
    </div>
  );
}
