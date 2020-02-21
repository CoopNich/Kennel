import React from "react";

const OwnerCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./dog.svg")} alt="My Dog" />
        </picture>
        <h3>
          Owner: <span className="card-ownerName">Mr. Kaynine</span>
        </h3>
        <p>Credentials: Ph.D in Dog Stuff</p>
      </div>
    </div>
  );
};

export default OwnerCard;