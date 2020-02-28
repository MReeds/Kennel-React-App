import React from "react";
import { Link } from "react-router-dom";
import "../animal/Animal.css";

const OwnerCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h2>Name: {props.owner.name}</h2>
        <h2>Contact: {props.owner.phoneNumber}</h2>
        <Link to={`/owner/${props.owner.id}`}>
          <button>Details</button>
        </Link>
        <button
          type="button"
          onClick={() => props.history.push(`/owner/${props.owner.id}/edit`)}
        >
          Edit
        </button>
        <button type="button" onClick={() => props.deleteOwner(props.owner.id)}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default OwnerCard;
