import React from "react";
import { Link } from "react-router-dom";

const LocationCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h2>Address: {props.locationObject.address}</h2>
        <h2>City: {props.locationObject.city}</h2>
        <h2>State: {props.locationObject.state}</h2>
        <Link to={`/location/${props.locationObject.id}`}>
          <button>Details</button>
        </Link>
        <button type="button"
        onClick={() => { props.history.push(`/locations/${props.locationObject.id}/details`) }}>Employee Details</button>
        <button
          type="button"
          onClick={() =>
            props.history.push(`/location/${props.locationObject.id}/edit`)
          }
        >
          Edit
        </button>
        <button
          type="button"
          onClick={() => props.deleteLocation(props.locationObject.id)}
        >
          Close Location
        </button>
      </div>
    </div>
  );
};

export default LocationCard;
