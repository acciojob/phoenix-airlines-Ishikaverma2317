import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function book() {
    dispatch({ type: "SEARCH", payload: { from, to, date } });
    navigate("/flight-booking");
  }

  return (
    <div>
      <input placeholder="From" value={from} onChange={e => setFrom(e.target.value)} />
      <input placeholder="To" value={to} onChange={e => setTo(e.target.value)} />
      <input type="date" value={date} onChange={e => setDate(e.target.value)} />

      <button className="book-flight" onClick={book}>Book Flight</button>
    </div>
  );
}
