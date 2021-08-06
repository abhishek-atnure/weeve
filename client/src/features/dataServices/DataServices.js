import React, { useState, useEffect } from "react";
import "./dataServices.css";
import ButtonList from "../button-list/ButtonList";
import ServiceList from "../serviceList/serviceList";
import search from "./serach-icon.svg";
import filter from "./filter-icon.svg";

function DataServices() {
  const [services, setServices] = useState([]);
  const [alert, setAlert] = useState("");

  const fetchServices = async () => {
    try {
      const data = await fetch("/services");
      const response = await data.json();
      setServices(response);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchServices();
  }, [alert]);

  const handleSearch = () => {
    let searchTerm = prompt("Enter search term");
    if (!searchTerm) return;
    let newServices = services.filter((element) => {
      return element.name.toLowerCase().includes(searchTerm);
    });
    console.log(newServices);
    setServices(newServices);
  };

  return (
    <div className="data-services">
      <h1>Your Data Services</h1>
      <p>
        Click on the rocket to deploy the data service you would like to send
        down to your weeve Edge-Nodes
      </p>
      <div className="filter-search-div">
        <abbr title="Search for any service">
          <img id="search" onClick={handleSearch} src={search} alt="search" />
        </abbr>
        <img id="filter" src={filter} alt="filter" />
      </div>
      <div className="btns-div">
        <ButtonList />
      </div>
      <ServiceList services={services} alert={alert} setAlert={setAlert} />
    </div>
  );
}

export default DataServices;
