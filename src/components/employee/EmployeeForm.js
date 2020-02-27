import React, { useState } from "react";
import EmployeeManager from "../../modules/EmployeeManager";
import "./EmployeeForm.css";

const EmployeeForm = props => {
    const [employee, setEmployee] = useState({firstName: "", lastName: "", department: ""});
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = event => {
        const stateToChange = { ...employee };
        stateToChange[event.target.id] = event.target.value;
        setEmployee(stateToChange);
    };

    const constructNewEmployee = event => {
        event.preventDefault();
        if(employee.firstName === "" || employee.lastName === "" || employee.department ==="") {
            window.alert("Please input employee name and department");
        } else {
            setIsLoading(true);
            EmployeeManager.post(employee).then(() => props.history.push("/employee"));
        }
    };

    return (
        <>
        <form>
            <fieldset>
                <div className="formgrid">
                    <input
                        type="text"
                        required
                        onChange={handleFieldChange}
                        id="firstName"
                        placeholder="First name"
                        />
                    <label htmlFor="name">First Name</label>    
                    <input
                        type="text"
                        required
                        onChange={handleFieldChange}
                        id="lastName"
                        placeholder="Last name"
                        />
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        required
                        onChange={handleFieldChange}
                        id="department"
                        placeholder="Department"
                        />
                    <label htmlFor="department">Department</label>
                </div>
                <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewEmployee}
            >
              Submit
            </button>
            </div>
            </fieldset>
        </form>
        </>
    )
}

export default EmployeeForm