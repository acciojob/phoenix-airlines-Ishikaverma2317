import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Booking() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function submit() {
    if (!name || !email || !phone) {
      alert("All fields required");
      return;
    }

    dispatch({ type: "BOOK", payload: { name, email, phone } });
    navigate("/confirmation");
  }

  return (
    <div>
      <input type="text" placeholder="Name" onChange={e => setName(e.target.value)} />
      <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="text" placeholder="Phone" onChange={e => setPhone(e.target.value)} />

      <button onClick={submit}>Confirm Booking</button>
    </div>
  );
}
