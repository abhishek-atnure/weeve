import React from "react";
import "./service.css";
import rocket from "./rocket-icon.svg";
import del from "./delete-icon.svg";
import pen from "./menu-designer.svg";
import menu from "./menu-icon.svg";

function Service({ element, setAlert }) {
  const update = async (name) => {
    let modified = new Date().toLocaleString().substring(0, 8);
    console.log(modified);
    const body = { name, modified };
    const data = await fetch(`/services/${element.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const response = await data.json();
    console.log(response);
  };

  const handleChange = () => {
    let value = prompt("Enter service name...");
    if (!value) return;
    update(value);
    alert("value updated");
    setAlert(value);
  };

  const handleDelete = async () => {
    const data = await fetch(`/services/${element.id}`, {
      method: "DELETE",
    });
    const response = await data.json();
    console.log(response);
    setAlert(element.id);
  };

  return (
    <div className="service">
      <div className="service-name">
        <h4>{element.name.toUpperCase()}</h4>
      </div>

      <div className="service-created">
        <h5>{element.created.substring(0, 10)}</h5>
      </div>

      <div className="service-modified">
        <h5>
          {element.modified === null ? "-" : element.modified.substring(0, 10)}
        </h5>
      </div>

      <div className="service-createdBy">
        <h5>{element.created_by}</h5>
      </div>

      <div className="actions-div">
        <img id="actions-items" src={rocket} alt="deploy" />
        <img id="actions-items" onClick={handleDelete} src={del} alt="delete" />
        <img id="actions-items" onClick={handleChange} src={pen} alt="edit" />
        <img id="actions-items" src={menu} alt="menu" />
      </div>
    </div>
  );
}

export default Service;
