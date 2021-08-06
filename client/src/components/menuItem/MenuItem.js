import React from "react";
import "./menuItem.css";

function MenuItem({ element }) {
  return (
    <div className="menu-item">
      <img className="menu-item-icon" src={element.icon} alt={element.label} />
      <span className="menu-item-label">{element.label}</span>
    </div>
  );
}

export default MenuItem;
