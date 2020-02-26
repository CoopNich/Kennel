import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
//only include these once they are built - previous practice exercise
import LocationList from "./location/LocationList";
import EmployeeList from "./employees/EmployeeList";
import OwnerList from "./owner/OwnerList";
import AnimalList from "./animal/AnimalList"
import AnimalDetail from "./animal/AnimalDetail";
import LocationDetail from "./location/LocationDetail";

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
        exact path="/animals"
        render={props => {
          return <AnimalList />;
        }}
      />
      <Route
        path="/animals/:animalId(\d+)"
        render={(props) => {
          return <AnimalDetail animalId={parseInt(props.match.params.animalId)} />
        }}
      />
      <Route
        exact path="/location"
        render={props => {
          return <LocationList />;
        }}
      />
       <Route
        path="/location/:locationId(\d+)"
        render={(props) => {
          return <LocationDetail locationId={parseInt(props.match.params.locationId)} />
        }}
      />
      <Route
         path="/employee"
        render={props => {
          return <EmployeeList />;
        }}
      />
      <Route
        path="/owner"
        render={props => {
          return <OwnerList />;
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;