import React from "react";

const LocationCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./dog.svg")} alt="My Dog" />
        </picture>
        <h3>
        <span className="card-locationName">{props.location.name}</span>
        </h3>
        <p>{props.location.address}</p>
      </div>
    </div>
  );
};

export default LocationCard;