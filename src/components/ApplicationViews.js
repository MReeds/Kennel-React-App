import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
import LocationList from "./location/LocationList";
import EmployeeList from "./employee/EmployeeList";
import OwnerList from "./owner/OwnerList";
import AnimalDetail from "./animal/AnimalDetail";
import LocationDetail from "./location/LocationDetail";
import EmployeeDetail from "./employee/EmployeeDetails";
import OwnerDetail from "./owner/OwnerDetails";

const ApplicationViews = () => {
  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={props => {
          return <Home />;
        }}
      />
        <Route exact path="/animals" render={(props) => {
          return <AnimalList />
        }} />
        <Route path="/animals/:animalId(\d+)" render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          return <AnimalDetail animalId={parseInt(props.match.params.animalId)}
          {...props}/>
        }} />
      <Route
      exact path="/location"
      render={props => {
          return <LocationList />;
      }}
      />
      <Route path="/location/:locationId(\d+)" render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          return <LocationDetail locationId={parseInt(props.match.params.locationId)}
          {...props}/>
      }}/>
      <Route exact path="/employee" render={(props) => {
          return <EmployeeList />
        }} />
        <Route path="/employee/:employeeId(\d+)" render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          return <EmployeeDetail employeeId={parseInt(props.match.params.employeeId)}
          {...props}/>
        }} />
      <Route exact path="/owner" render={(props) => {
          return <OwnerList />
        }} />
        <Route path="/owner/:ownerId(\d+)" render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          return <OwnerDetail ownerId={parseInt(props.match.params.ownerId)}
          {...props}/>
        }} />
    </React.Fragment>
  );
};

export default ApplicationViews;