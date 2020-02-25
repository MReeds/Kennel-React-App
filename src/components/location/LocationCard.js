import React from "react";

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
        <button type="button" onClick={() => props.deleteLocation(props.location.id)}>Close Location</button>
        </div>
        </div>
    );
};

export default LocationCard
