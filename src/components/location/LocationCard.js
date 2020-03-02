import React from "react";
import { Link } from "react-router-dom";

const LocationCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./school-building.svg")} alt="My Dog" />
        </picture>
        <h3>
          <span className="card-locationName">{props.kennelLocation.name}</span>
        </h3>
        <p>{props.kennelLocation.address}</p>
        <Link to={`/location/${props.kennelLocation.id}`}><button>Details</button></Link>
        <button type="button"
          onClick={() => props.history.push(`/location/${props.kennelLocation.id}/edit`)}>
          Edit
        </button>
        <button type="button" onClick={() => props.deleteLocation(props.location.id)}>Close Location</button>
      </div>
    </div>
  );
};

export default LocationCard;