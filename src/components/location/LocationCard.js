import React from "react";
import { Link } from 'react-router-dom'

const LocationCard = props => {
    return (
        <div className="card">
        <div className="card-content">
        <h2>
            Address: {props.location.address}
        </h2>
        <h2>
            City: {props.location.city}
        </h2>
        <h2>
            State: {props.location.state}
        </h2>
        <Link to={`/location/${props.location.id}`}>
    <button>Details</button>
</Link>
        <button type="button" onClick={() => props.deleteLocation(props.location.id)}>Close Location</button>
        </div>
        </div>
    );
};

export default LocationCard
