import React from "react";

const LocationCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./dog.svg")} alt="My Dog" />
        </picture>
        <h3>
          Place: <span className="card-locationName">Kennel Bois</span>
        </h3>
        <p>Location: 500 Puppy Way</p>
      </div>
    </div>
  );
};

export default LocationCard;