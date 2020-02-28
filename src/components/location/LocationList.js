import React, { useState, useEffect } from 'react';
//import the components we will need
import LocationCard from './LocationCard';
import LocationManager from '../../modules/LocationManager';

const LocationList = (props) => {
    // The initial state is an empty array
    const [locations, setLocations] = useState([]);

    const getLocations = () => {
        // After the data comes back from the API, we
        // use the setLocations function to update the state
        return LocationManager.getAll().then(locationsFromAPI => {
            setLocations(locationsFromAPI)
        });
    };

    const deleteLocation = id => {
        LocationManager.delete(id)
        .then(() => LocationManager.getAll().then(setLocations));
    };
    // Got the locations from the API on the components first render
    useEffect(() => {
        getLocations();
    }, []);

    // Finally we loop over the locations array to show a list of location cards
    return (
        <>
        <section className="section-content">
  <button type="button"
      className="btn"
      onClick={() => {props.history.push("/location/new")}}>
      New Location
  </button>
</section>
        <div className="container-cards">
        {locations.map(locaTion =>
            <LocationCard 
            key={locaTion.id} 
            locaTion={locaTion}
            deleteLocation={deleteLocation}
            { ...props } />)}
        </div>
        </>
    );
};


export default LocationList
