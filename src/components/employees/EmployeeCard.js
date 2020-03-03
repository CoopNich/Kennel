import React from "react";

import "./Employee.css"

const EmployeeCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./employee.svg")} alt="My Dog" />
        </picture>
        <h3>
          <span className="card-Employeename">{props.employee.name}</span>
        </h3>
        <p> Job: {props.employee.job}</p>
        <button type="button"
        onClick={() => { props.history.push(`/employee/${props.employee.id}/details`) }}>Details</button>
        <button type="button"
          onClick={() => props.history.push(`/employee/${props.employee.id}/edit`)}>
          Edit
      </button>
        <button type="button" onClick={() => props.deleteEmployee(props.employee.id)}>Fire</button>
      </div>
    </div>
  );
};

export default EmployeeCard;