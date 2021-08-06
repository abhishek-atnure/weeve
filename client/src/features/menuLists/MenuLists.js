import React from "react";
import "./menuLists.css";
import icon from "./weeve-icon.png";
import overview from "./icons/menu-overview.svg";
import services from "./icons/menu-services.svg";
import designer from "./icons/menu-designer.svg";
import library from "./icons/menu-library.svg";
import nodes from "./icons/menu-nodes.svg";
import insights from "./icons/menu-insights.svg";
import MenuItem from "../../components/menuItem/MenuItem";
import logout from "./icons/menu-logout.svg";

function MenuLists() {
  const items = [
    {
      icon: overview,
      label: "OVERVIEW",
    },
    {
      icon: services,
      label: "DATA SERVICES",
    },
    {
      icon: designer,
      label: "DESIGNER",
    },
    {
      icon: library,
      label: "MODULE LIBRARY",
    },
    {
      icon: nodes,
      label: "NODES",
    },
    {
      icon: insights,
      label: "DATA INSIGHTS",
    },
  ];
  return (
    <div className="menu-lists">
      <div className="menu-lists-logo">
        <img id="icon" src={icon} alt="weeve icon" />
      </div>

      <div className="menu-item-list">
        {items.map((element, index) => (
          <MenuItem element={element} key={index} />
        ))}
      </div>

      <div className="menu-item-logout">
        <img id="logout-icon" src={logout} alt="logout" />
        <span id="logout">LOGOUT</span>
      </div>
    </div>
  );
}

export default MenuLists;
