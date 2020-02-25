import React from "react";

const OwnerCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./dog.svg")} alt="My Dog" />
        </picture>
        <h3>
        <span className="card-ownerName">{props.owner.name}</span>
        </h3>
        <p>{props.owner.phone}</p>
      </div>
    </div>
  );
};

export default OwnerCard;