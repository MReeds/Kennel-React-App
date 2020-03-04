import React, { useState, useEffect } from "react";
import LocationManager from "../../modules/LocationManager";
import EmployeeCard from "../employee/EmployeeCard";
import EmployeeManager from "../../modules/EmployeeManager";

const LocationsWithEmployees = props => {
    const [locationObject, setLocationObject] = useState({});
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        LocationManager.getWithEmployees(props.match.params.locationObjectId)
        .then(APIResult => {
            setLocationObject(APIResult);
            setEmployees(APIResult.employees);
        });
    }, []);

    const deleteEmployee = id => {
        EmployeeManager.delete(id)
        .then(() => EmployeeManager.getAll().then(setEmployees));
    }

    return (
        <div className="card">
            <h2>Location: {locationObject.address} {locationObject.city}, {locationObject.state}</h2>
            {employees.map(employee =>
                <EmployeeCard
                key={employee.id}
                employee={employee}
                deleteEmployee={deleteEmployee}
                {...props}/>
                )}
        </div>
    );
};

export default LocationsWithEmployees