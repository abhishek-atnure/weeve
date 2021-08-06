import React from "react";
import "./button.css";
import up from "./arrow-up.svg";
import down from "./arrow-drop.svg";

function Button({ label }) {
  return (
    <div className="button">
      <h3>{label}</h3>
      <div className="arrow-div">
        <img id="down" src={down} alt="down" />
        <img id="up" src={up} alt="up" />
      </div>
    </div>
  );
}

export default Button;
