import React from "react";

import "./Employee.css"

const EmployeeCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./dog.svg")} alt="My Dog" />
        </picture>
        <h3>
          Name: <span className="card-Employeename">{props.employee.name}</span>
        </h3>
        <p> Job: {props.employee.job}</p>
      </div>
    </div>
  );
};

export default EmployeeCard;