import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Booking() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submit = () => {
    const inputs = document.querySelectorAll("input[type='text']");
    for (let i of inputs) {
      if (!i.value) {
        setError("Mumbai");
        return;
      }
    }
    navigate("/confirmation");
  };

  return (
    <div>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Phone" />

      <ul>
        {error && <li>{error}</li>}
      </ul>

      <button onClick={submit}>Confirm</button>
    </div>
  );
}
