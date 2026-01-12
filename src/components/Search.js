import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const [trip, setTrip] = useState("one");
  const [searched, setSearched] = useState(false);
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const navigate = useNavigate();

  const search = () => {
    setSearched(true);
  };

  return (
    <div>
      <input
        type="radio"
        name="trip"
        onChange={() => setTrip("one")}
      /> One Way

      <input
        type="radio"
        name="trip"
        onChange={() => setTrip("round")}
      /> Round Trip

      <input
        type="text"
        placeholder="Source"
        onChange={(e) => setSource(e.target.value)}
      />

      <input
        type="text"
        placeholder="Destination"
        onChange={(e) => setDestination(e.target.value)}
      />

      <button className="book-flight" onClick={search}>
        Search Flights
      </button>

      <ul>
        {!searched && <li>Enter cities</li>}

        {searched && trip === "one" && (
          <li>{source}</li>
        )}

        {searched && trip === "round" && (
          <>
            <li>{destination}</li>
            <li onClick={() => navigate("/flight-booking")}>
              Book Now
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
