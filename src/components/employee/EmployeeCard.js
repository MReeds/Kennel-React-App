import React from "react";

const EmployeeCard = props => {
    return (
        <ol>
            <li><h2>Name: {props.employee.firstName} {props.employee.lastName}</h2></li>
    <li><h2>Department: {props.employee.department}</h2></li>
        </ol>
    );
};

export default EmployeeCard