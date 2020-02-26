import React, { useState, useEffect } from "react";
import EmployeeManager from "../../modules/EmployeeManager";
import "../employee/EmployeeDetails.css";

const EmployeeDetail = props => {
    const [employee, setEmployee] = useState({name: "", department: ""});

    useEffect(() => {
        EmployeeManager.get(props.employeeId)
        .then(employee => {
            setEmployee({
                firstName: employee.firstName,
                lastName: employee.lastName,
                department: employee.department
            });
        });
    }, [props.employeeId]);

    return (
        <div className="card">
            <div className="card-content">
    <h3>Name: <span style={{color: 'darkslategrey' }}>{employee.firstName} {employee.lastName}</span></h3>
    <h3>Department: <span style={{color: 'darkslategrey' }}>{employee.department}</span></h3>
            </div>
        </div>
    )
}

export default EmployeeDetail
