import React from "react";

const EmployeeCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./dog.svg")} alt="My Dog" />
        </picture>
        <h3>
          Name: <span className="card-Employeename">Mr. Guy</span>
        </h3>
        <p>Dog Handling Engineer</p>
      </div>
    </div>
  );
};

export default EmployeeCard;