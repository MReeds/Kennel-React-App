import React from "react";

const LocationCard = props => {
    return (
            <div>
        <h2>
            Address: {props.location.address}
        </h2>
        <h2>
            City: {props.location.city}
        </h2>
        <h2>
            State: {props.location.state}
        </h2>
        </div>
    );
};

export default LocationCard