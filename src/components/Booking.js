import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Booking() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = () => {
    dispatch({ type: "BOOK", payload: { name: "test" } });
    navigate("/confirmation");
  };

  return (
    <div>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Phone" />
      <button onClick={submit}>Confirm</button>
    </div>
  );
}
