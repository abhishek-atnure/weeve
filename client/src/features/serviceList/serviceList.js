import React from "react";
import "./serviceList.css";
import Service from "../../components/service/Service";

function ServiceList({ services, alert, setAlert }) {
  return (
    <div className="service-list">
      {services.length !== 0 ? (
        services.map((element) => (
          <Service
            element={element}
            alert={alert}
            key={element.id}
            setAlert={setAlert}
          />
        ))
      ) : (
        <span id="error">No match found, reload page</span>
      )}
    </div>
  );
}

export default ServiceList;
