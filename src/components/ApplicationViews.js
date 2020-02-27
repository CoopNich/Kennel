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
import Login from "./auth/Login";

const ApplicationViews = () => {
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;
  return (
    <React.Fragment>
      <Route
        path="/login"
        component={Login}
      />
      <Route
        exact
        path="/"
        render={props => {
          return <Home />;
        }}
      />
      <Route
        exact path="/animals"
        render={props => {
          if (isAuthenticated()) {
            return <AnimalList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
      <Route path="/animals/new"
        render={(props) => {
          if (isAuthenticated()) {
          return <AnimalForm {...props}
          />
          } else {
            return <Redirect to="/login" /> 
          }
        }} />
      <Route
        path="/animals/:animalId(\d+)"
        render={props => {
          return (
            <AnimalDetail
              animalId={parseInt(props.match.params.animalId)}
              {...props}
            />
          );
        }}
      />
      <Route
        exact path="/location"
        render={props => {
          if (isAuthenticated()) {
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
        path="/location/:locationId(\d+)"
        render={props => {
          return (
            <LocationDetail
              locationId={parseInt(props.match.params.locationId)}
              {...props}
            />
          );
        }}
      />
      <Route
        exact path="/employee"
        render={props => {
          if (isAuthenticated()) {
          return <EmployeeList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }}
      />
      <Route path="/employee/new"
        render={(props) => {
          return <EmployeeForm {...props} />
        }} />
      <Route
        exact path="/owner"
        render={props => {
          if (isAuthenticated()) {
          return <OwnerList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }}
      />
      <Route
        path="/owner/new"
        render={(props) => {
          return <OwnerForm {...props} />
        }} />
    </React.Fragment>
  );
};

export default ApplicationViews;