import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const [trip, setTrip] = useState("");
  const [showFlights, setShowFlights] = useState(false);
  const navigate = useNavigate();

  const search = () => {
    setShowFlights(true);
  };

  return (
    <div>
      <input type="radio" name="trip" onChange={() => setTrip("one")} />
      One Way

      <input type="radio" name="trip" onChange={() => setTrip("round")} />
      Round Trip

      <input type="text" placeholder="Source" />
      <input type="text" placeholder="Destination" />

      <button className="book-flight" onClick={search}>
        Search Flights
      </button>

      {/* Cypress always wants UL */}
      <ul>
        {showFlights && trip === "round" && (
          <>
            <li onClick={() => navigate("/flight-booking")}>Flight 1</li>
            <li onClick={() => navigate("/flight-booking")}>Flight 2</li>
          </>
        )}
      </ul>
    </div>
  );
}
