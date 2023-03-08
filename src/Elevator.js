import React from "react";
import image from "./images/icons8-elevator.svg";
import "./Elevator.css";

export default function Elevator() {
  return (
    <div>
      <img className="elevator-img" src={image} alt="pic" />
    </div>
  );
}
