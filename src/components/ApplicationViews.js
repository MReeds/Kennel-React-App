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
import EmployeeWithAnimals from "./employee/EmployeeWithAnimals";
import OwnerList from "./owner/OwnerList";
import OwnerDetail from "./owner/OwnerDetails";
import OwnerForm from "./owner/OwnerForm";
import OwnerEditForm from "./owner/OwnerEditForm";

const ApplicationViews = props => {
  const setUser = props.setUser;
  const hasUser = props.hasUser;
  return (
    <React.Fragment>
      <Route
        path="/login"
        render={props => {
          return <Login setUser={setUser} {...props} />;
        }}
      />
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
          if (hasUser) {
            return <AnimalList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
        />
      <Route
        path="/animals/:animalId(\d+)/edit"
        render={props => {
          if (hasUser) {
            return <AnimalEditForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
        />
      <Route
        path="/animals/new"
        render={props => {
          if (hasUser) {
            return <AnimalForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
        />
      <Route
        exact
        path="/animals/:animalId(\d+)"
        render={props => {
          // Pass the animalId to the AnimalDetailComponent
          // refactor conditional to show alert when user searches for an animal that is no longer in database
          if (hasUser) {
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
          if (hasUser) {
            return <LocationForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
        />
      <Route
        path="/location/:locationId(\d+)/edit"
        render={props => {
          if (hasUser) {
            return <LocationEditForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
        />
      <Route
        exact
        path="/locations"
        render={props => {
          if (hasUser) {
            console.log(hasUser)
            return <LocationList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
        />
      <Route
        exact
        path="/location/:locationId(\d+)"
        render={props => {
          if (hasUser) {
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
        path="/employees"
        render={props => {
          if (hasUser) {
            return <EmployeeList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/employee/:employeeId(\d+)/edit"
        render={props => {
          if (hasUser) {
            return <EmployeeEditForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/employee/new"
        render={props => {
          if (hasUser) {
            return <EmployeeForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/employee/:employeeId(\d+)/details"
        render={props => {
          return <EmployeeWithAnimals {...props} />;
        }}
      />
      <Route
        exact
        path="/employee/:employeeId(\d+)"
        render={props => {
          if (hasUser) {
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
          if (hasUser) {
            return <OwnerForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/owner/:ownerId(\d+)/edit"
        render={props => {
          if (hasUser) {
            return <OwnerEditForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/owners"
        render={props => {
          if (hasUser) {
            return <OwnerList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/owner/:ownerId(\d+)"
        render={props => {
          if (hasUser) {
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
    </React.Fragment>
  );
};

export default ApplicationViews;
