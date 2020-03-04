import React, { useState, useEffect } from "react";
import EmployeeManager from "../../modules/EmployeeManager";
import LocationManager from "../../modules/LocationManager";
import "../animal/AnimalForm.css";

const EmployeeEditForm = props => {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    department: ""
  });
  const [locations, setLocation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...employee };
    stateToChange[evt.target.id] = evt.target.value;
    setEmployee(stateToChange);
  };

  const updateExistingEmployee = evt => {
    evt.preventDefault();
    setIsLoading(true);

    const editedEmployee = {
      id: props.match.params.employeeId,
      firstName: employee.firstName,
      lastName: employee.lastName,
      department: employee.department,
      locationId: parseInt(employee.locationObjectId)
    };

    EmployeeManager.update(editedEmployee).then(() =>
      props.history.push("/employees")
    );
  };

  useEffect(() => {
    EmployeeManager.get(props.match.params.employeeId).then(employee => {
      LocationManager.getAll().then(locations => {
        setLocation(locations);
        setEmployee(employee);
        setIsLoading(false);
      });
    });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="firstName"
              value={employee.firstName}
            />
            <label htmlFor="firstName">Employee first name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="lastName"
              value={employee.lastName}
            />
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="department"
              value={employee.department}
            />
            <label htmlFor="department">Department</label>
            <select
              className="form-control"
              id="locationObjectId"
              value={employee.locationObjectId}
              onChange={handleFieldChange}
            >
              {locations.map(location => (
                <option key={location.id} value={location.id}>
                  {location.address} {location.city} {location.state}
                </option>
              ))}
            </select>
            <label htmlFor="locationId">Location</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={updateExistingEmployee}
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default EmployeeEditForm;
