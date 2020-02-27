import React, { useState } from "react";
import LocationManager from "../../modules/LocationManager";
import "./LocationForm.css";

const LocationForm = props => { 
    const [location, setLocation] = useState({ address: "", city: "", state: "" });
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = { ...location };
        stateToChange[evt.target.id] = evt.target.value;
        setLocation(stateToChange);
    };

    const constructNewLocation = evt => {
        evt.preventDefault();
        if (location.address === "" || location.city === "" || location.state === "") {
            window.alert("Please input location address, city and state.");
        } else {
            setIsLoading(true);
            LocationManager.post(location).then(() => props.history.push("/location"));
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
              id="address"
              placeholder="Address"
            />
            <label htmlFor="address">Address</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="city"
              placeholder="City"
            />
            <label htmlFor="city">City</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="state"
              placeholder="State"
            />
            <label htmlFor="state">State</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewLocation}
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
    )
}

export default LocationForm
