import React, { useState, useEffect } from "react";
import LocationManager from "../../modules/LocationManager";
import "../animal/AnimalForm.css";

const LocationEditForm = props => {
    const [location, setLocation] = useState({ address: "", city: "", state: ""});
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = { ...location };
        stateToChange[evt.target.id] = evt.target.value;
        setLocation(stateToChange);
    };

    const updateExistingLocation = evt => {
        evt.preventDefault()
        setIsLoading(true);

        const editedLocation = {
            id: props.match.params.locationId,
            address: location.address,
            city: location.city,
            state: location.state
        };

        LocationManager.update(editedLocation)
        .then(() => props.history.push("/location"))
    }

    useEffect(() => {
        LocationManager.get(props.match.params.locationId)
        .then(location => {
            setLocation(location);
            setIsLoading(false);
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
                  id="address"
                  value={location.address}
                />
                <label htmlFor="address">Address</label>
    
                <input
                  type="text"
                  required
                  className="form-control"
                  onChange={handleFieldChange}
                  id="city"
                  value={location.city}
                />
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  required
                  className="form-control"
                  onChange={handleFieldChange}
                  id="state"
                  value={location.state}
                />
                <label htmlFor="state">State</label>
              </div>
              <div className="alignRight">
                <button
                  type="button" disabled={isLoading}
                  onClick={updateExistingLocation}
                  className="btn btn-primary"
                >Submit</button>
              </div>
            </fieldset>
          </form>
        </>
      );
};

export default LocationEditForm