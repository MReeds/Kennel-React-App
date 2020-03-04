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
  const [locaTions, setLocaTion] = useState([]);
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
      locaTionId: parseInt(employee.locaTionId)
    };

    EmployeeManager.update(editedEmployee).then(() =>
      props.history.push("/employees")
    );
  };

  useEffect(() => {
    EmployeeManager.get(props.match.params.employeeId).then(employee => {
      LocationManager.getAll().then(locaTions => {
        setLocaTion(locaTions);
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
              id="locaTionId"
              value={employee.locaTionId}
              onChange={handleFieldChange}
            >
              {locaTions.map(locaTion => (
                <option key={locaTion.id} value={locaTion.id}>
                  {locaTion.address} {locaTion.city} {locaTion.state}
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
