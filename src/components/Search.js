import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const [trip, setTrip] = useState("");
  const [searched, setSearched] = useState(false);
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
      />{" "}
      One Way

      <input
        type="radio"
        name="trip"
        onChange={() => setTrip("round")}
      />{" "}
      Round Trip

      <input type="text" placeholder="Source" />
      <input type="text" placeholder="Destination" />

      <button className="book-flight" onClick={search}>
        Search Flights
      </button>

      {searched && (
        <ul>
          {trip === "round" && (
            <>
              <li onClick={() => navigate("/flight-booking")}>
                Flight A
              </li>
              <li onClick={() => navigate("/flight-booking")}>
                Flight B
              </li>
            </>
          )}
        </ul>
      )}
    </div>
  );
}
