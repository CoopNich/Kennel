import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
//only include these once they are built - previous practice exercise
import LocationList from "./location/LocationList";
import EmployeeList from "./employees/EmployeeList";
import OwnerList from "./owner/OwnerList";
import AnimalList from "./animal/AnimalList"
import AnimalDetail from "./animal/AnimalDetail";
import LocationDetail from "./location/LocationDetail";
import AnimalForm from './animal/AnimalForm'
import EmployeeForm from './employees/EmployeeForm'
import LocationForm from './location/LocationForm'
import OwnerForm from "./owner/OwnerForm"
import AnimalEditForm from "./animal/AnimalEditForm"
import EmployeeEditForm from "./employees/EmployeeEditForm"
import OwnerEditForm from "./owner/OwnerEditForm"
import LocationEditForm from "./location/LocationEditForm"
import EmployeeWithAnimals from "./employees/EmployeeWithAnimals.js"
import Login from "./auth/Login";

const ApplicationViews = (props) => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;
  return (
    <React.Fragment>
      <Route path="/login" render={props => {
        return <Login setUser={setUser} {...props} />
      }} />
      <Route
        exact
        path="/ "
        render={props => {
          return <Home />;
        }}
      />
      <Route
        exact path="/animals"
        render={props => {
          if (hasUser) {
            return <AnimalList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
      <Route path="/animals/new"
        render={(props) => {
          if (hasUser) {
            return <AnimalForm {...props}
            />
          } else {
            return <Redirect to="/login" />
          }
        }} />
      <Route exact path="/animals/:animalId(\d+)"
        render={props => {
          if (hasUser) {
            return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
      <Route path="/animals/:animalId(\d+)/edit"
        render={props => {
          if (hasUser) {
            return <AnimalEditForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
      <Route
        exact path="/location"
        render={props => {
          if (hasUser) {
            return <LocationList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }}
      />
      <Route path="/location/new"
        render={(props) => {
          return <LocationForm {...props} />
        }} />
      <Route
        exact path="/location/:locationId(\d+)"
        render={props => {
          return (
            <LocationDetail
              locationId={parseInt(props.match.params.locationId)}
              {...props}
            />
          );
        }}
      />
      <Route path="/location/:locationId(\d+)/edit" render={props => {
        if (hasUser) {
          return <LocationEditForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
      <Route
        exact path="/employee"
        render={props => {
          if (hasUser) {
            return <EmployeeList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }}
      />
      <Route path="/employee/:employeeId(\d+)/details" render={(props) => {
        if (hasUser) {
          return <EmployeeWithAnimals {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
      <Route path="/employee/new"
        render={(props) => {
          return <EmployeeForm {...props} />
        }} />
      <Route path="/employee/:employeeId(\d+)/edit" render={props => {
        if (hasUser) {
          return <EmployeeEditForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
      <Route
        exact path="/owner"
        render={props => {
          if (hasUser) {
            return <OwnerList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }}
      />
      <Route path="/owner/:ownerId(\d+)/edit" render={props => {
        if (hasUser) {
          return <OwnerEditForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
      <Route
        path="/owner/new"
        render={(props) => {
          return <OwnerForm {...props} />
        }} />
    </React.Fragment>
  );
};

export default ApplicationViews;