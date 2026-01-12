import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const [trip, setTrip] = useState("one");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const search = () => {
    if (trip === "one") dispatch({ type: "SET_FLIGHTS", payload: false });
    else dispatch({ type: "SET_FLIGHTS", payload: true });

    navigate("/flight-booking");
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
        Search
      </button>
    </div>
  );
}
