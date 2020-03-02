import React from "react";

const OwnerCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./owner.svg")} alt="My Dog" />
        </picture>
        <h3>
          <span className="card-ownerName">{props.owner.name}</span>
        </h3>
        <p>{props.owner.phone}</p>
        <button type="button"
          onClick={() => props.history.push(`/owner/${props.owner.id}/edit`)}>
          Edit
        </button>

        <button type="button" onClick={() => props.deleteOwner(props.owner.id)}>Remove</button>
      </div>
    </div>
  );
};

export default OwnerCard;