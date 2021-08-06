import React from "react";
import "./buttonList.css";
import Button from "../../components/button/Button";

function ButtonList() {
  return (
    <div className="button-list">
      <Button label="NAME" />
      <Button label="CREATED" />
      <Button label="MODIFIED" />
      <Button label="CREATED BY" />
    </div>
  );
}

export default ButtonList;
