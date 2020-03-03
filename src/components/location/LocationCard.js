import React from "react";
import { Link } from "react-router-dom";

const LocationCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h2>Address: {props.locaTion.address}</h2>
        <h2>City: {props.locaTion.city}</h2>
        <h2>State: {props.locaTion.state}</h2>
        <Link to={`/location/${props.locaTion.id}`}>
          <button>Details</button>
        </Link>
        <button type="button"
        onClick={() => { props.history.push(`/locations/${props.locaTion.id}/details`) }}>Employee Details</button>
        <button
          type="button"
          onClick={() =>
            props.history.push(`/location/${props.locaTion.id}/edit`)
          }
        >
          Edit
        </button>
        <button
          type="button"
          onClick={() => props.deleteLocation(props.locaTion.id)}
        >
          Close Location
        </button>
      </div>
    </div>
  );
};

export default LocationCard;
