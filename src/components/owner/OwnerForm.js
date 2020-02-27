import React, { useState } from "react";
import OwnerManager from "../../modules/OwnerManager";
import "./OwnerForm.css";

const OwnerForm = props => {
  const [owner, setOwner] = useState({ name: "", phoneNumber: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...owner };
    stateToChange[evt.target.id] = evt.target.value;
    setOwner(stateToChange);
  };

  const constructNewOwner = evt => {
    evt.preventDefault();
    if (owner.name === "" || owner.phoneNumber === "") {
      window.alert("Please input an owners name and phone number.");
    } else {
      setIsLoading(true);
      // Create the animal and redirect user to animal list
      OwnerManager.post(owner).then(() => props.history.push("/owner"));
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
            id="name"
            placeholder="Name"
          />
          <label htmlFor="Name">First and last name</label>
          <input
            type="text"
            required
            onChange={handleFieldChange}
            id="phoneNumber"
            placeholder="(xxx) - xxx - xxxx"
          />
          <label htmlFor="phoneNumber">Phone number</label>
        </div>
        <div className="alignRight">
          <button
            type="button"
            disabled={isLoading}
            onClick={constructNewOwner}
          >
            Submit
          </button>
        </div>
      </fieldset>
    </form>
  </>
  )
};

export default OwnerForm
