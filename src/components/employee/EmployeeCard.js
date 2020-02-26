import React from "react";
import { Link } from "react-router-dom";
import "../animal/Animal.css";

const EmployeeCard = props => {
    return (
        <div className="card">
    <div className="card-content">
        <h2>Name: {props.employee.firstName} {props.employee.lastName}</h2>
<h2>Department: {props.employee.department}</h2>
<Link to={`/employee/${props.employee.id}`}>
    <button>Details</button>
</Link>
<button type="button" onClick={() => props.deleteEmployee(props.employee.id)}>Discharge</button>

        </div>
        </div>
    );
};

export default EmployeeCard
