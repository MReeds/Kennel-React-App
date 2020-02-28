import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import Login from "./auth/Login";
import AnimalList from "./animal/AnimalList";
import AnimalEditForm from "./animal/AnimalEditForm";
import AnimalDetail from "./animal/AnimalDetail";
import AnimalForm from "./animal/AnimalForm";
import LocationList from "./location/LocationList";
import LocationEditForm from "./location/LocationEditForm";
import LocationDetail from "./location/LocationDetail";
import LocationForm from "./location/LocationForm";
import EmployeeList from "./employee/EmployeeList";
import EmployeeDetail from "./employee/EmployeeDetails";
import EmployeeEditForm from "./employee/EmployeeEditForm";
import EmployeeForm from "./employee/EmployeeForm";
import OwnerList from "./owner/OwnerList";
import OwnerDetail from "./owner/OwnerDetails";
import OwnerForm from "./owner/OwnerForm";
import OwnerEditForm from "./owner/OwnerEditForm";

// refactor and organize imports to be with similar topic
const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

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
      <Route
        exact
        path="/animals"
        render={props => {
          if (isAuthenticated()) {
            return <AnimalList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/animals/:animalId(\d+)/edit"
        render={props => {
          if (isAuthenticated()) {
            return <AnimalEditForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/animals/new"
        render={props => {
          if (isAuthenticated()) {
            return <AnimalForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact path="/animals/:animalId(\d+)"
        render={props => {
          // Pass the animalId to the AnimalDetailComponent
          // refactor conditional to show alert when user searches for an animal that is no longer in database
          if (isAuthenticated()) {
            return (
              <AnimalDetail
                animalId={parseInt(props.match.params.animalId)}
                {...props}
              />
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/location/new"
        render={props => {
          if (isAuthenticated()) {
            return <LocationForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/location/:locationId(\d+)/edit"
        render={props => {
          if (isAuthenticated()) {
            return <LocationEditForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/location"
        render={props => {
          if (isAuthenticated()) {
            return <LocationList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact path="/location/:locationId(\d+)"
        render={props => {
          if (isAuthenticated()) {
            return (
              <LocationDetail
                locationId={parseInt(props.match.params.locationId)}
                {...props}
              />
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/employee"
        render={props => {
          if (isAuthenticated()) {
            return <EmployeeList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/employee/:employeeId(\d+)/edit"
        render={props => {
          if (isAuthenticated()) {
            return <EmployeeEditForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/employee/new"
        render={props => {
          if (isAuthenticated()) {
            return <EmployeeForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact path="/employee/:employeeId(\d+)"
        render={props => {
          if (isAuthenticated()) {
            return (
              <EmployeeDetail
                employeeId={parseInt(props.match.params.employeeId)}
                {...props}
              />
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/owner/new"
        render={props => {
          if (isAuthenticated()) {
            return <OwnerForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/owner/:ownerId(\d+)/edit"
        render={props => {
          if (isAuthenticated()) {
            return <OwnerEditForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/owner"
        render={props => {
          if (isAuthenticated()) {
            return <OwnerList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact path="/owner/:ownerId(\d+)"
        render={props => {
          if (isAuthenticated()) {
            return (
              <OwnerDetail
                ownerId={parseInt(props.match.params.ownerId)}
                {...props}
              />
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route path="/login" component={Login} />
    </React.Fragment>
  );
};

export default ApplicationViews;
