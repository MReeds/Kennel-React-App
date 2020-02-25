import React from "react";
import CSS from "../animal/Animal.css"

const OwnerCard = props => {
    return (
        <div className="card">
    <div className="card-content">
        <h2>Name: {props.owner.name}</h2>
    <h2>Contact: {props.owner.phoneNumber}</h2>
    <button type="button" onClick={() => props.deleteOwner(props.owner.id)}>Remove</button>
        </div>
        </div>
    );
};

export default OwnerCard

