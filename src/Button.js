import React from "react";
import "./Button.css";
function Button(props) {
  return (
    <div>
      <button onClick={props.onClick}>{props.label}</button>
    </div>
  );
}

export default Button;
