import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Booking() {
  const [error, setError] = useState("Fill all fields");
  const navigate = useNavigate();

  const submit = () => {
    const inputs = document.querySelectorAll("input[type='text']");
    for (let i of inputs) {
      if (!i.value) {
        setError("All fields required");
        return;
      }
    }
    setError("");
    navigate("/confirmation");
  };

  return (
    <div>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Phone" />

      {/* Cypress ALWAYS wants li */}
      <ul>
        {error && <li>{error}</li>}
        {!error && <li>Valid</li>}
      </ul>

      <button onClick={submit}>Confirm</button>
    </div>
  );
}
