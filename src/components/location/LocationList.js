import React, { useState, useEffect } from 'react';
//import the components we will need
import LocationCard from './LocationCard';
import LocationManager from '../../modules/LocationManager';

const LocationList = () => {
    // The initial state is an empty array
    const [locations, setLocations] = useState([]);

    const getLocations = () => {
        // After the data comes back from the API, we
        // use the setLocations function to update the state
        return LocationManager.getAll().then(locationsFromAPI => {
            setLocations(locationsFromAPI)
        });
    };

    // Got the locations from the API on the components first render
    useEffect(() => {
        getLocations();
    }, []);

    // Finally we loop over the locations array to show a list of location cards
    return (
        <div className="container-cards">
        {locations.map(location => <LocationCard key={location.id} location={location} />)}
        </div>
    );
};

export default LocationList