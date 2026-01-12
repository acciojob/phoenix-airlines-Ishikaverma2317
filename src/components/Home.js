import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Phoenix Airlines</h1>
      <button onClick={() => navigate("/flight-search")}>Search Flights</button>
    </div>
  );
}
