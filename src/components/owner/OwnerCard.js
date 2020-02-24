import React from "react";

const OwnerCard = props => {
    return (
        <div>
        <h2>Name: {props.owner.name}</h2>
    <h2>Phone Number: {props.owner.phoneNumber}</h2>
        </div>
    );
};

export default OwnerCard
