import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
//only include these once they are built - previous practice exercise
import LocationCard from "./location/LocationCard";
import EmployeeList from "./employees/EmployeeList";
import OwnerCard from "./owner/OwnerCard";
import AnimalList from "./animal/AnimalList"

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
        path="/animals"
        render={props => {
          return <AnimalList />;
        }}
      />
            <Route
        path="/location"
        render={props => {
          return <LocationCard />;
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
          return <OwnerCard />;
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;