import React, { useState, useEffect } from "react";
import EmployeeCard from "./EmployeeCard";
import EmployeeManager from "../../modules/EmployeeManager";

const EmployeeList = (props) => {
    const [employees, setEmployee] = useState([]);

    const getEmployees = () => {
        return EmployeeManager.getAll().then(employeesFromAPI => {
            setEmployee(employeesFromAPI)
        });
    };

    const deleteEmployee = id => {
        EmployeeManager.delete(id)
        .then(() => EmployeeManager.getAll().then(setEmployee));
    };

    useEffect(() => {
        getEmployees();
    }, []);

    return (
        <>
        <section className="section-content">
            <button type="button"
            className="btn"
            onClick={() => {props.history.push("/employee/new")}}>
                Add New Employee
            </button>
        </section>
        <div className="container-cards">
            {employees.map(employee => 
            <EmployeeCard 
            key={employee.id} 
            employee={employee}
            deleteEmployee={deleteEmployee} 
            { ...props } />)}
        </div>
        </>
    );
};


export default EmployeeList
