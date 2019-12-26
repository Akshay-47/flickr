import React from "react";
import { Route } from "react-router-dom";

import Single from "../components/Single";
import MovieGrid from "../components/MovieGrid";

const Main = ({ children, match }) => {
  return (
    <div>
      <Route exact path={match.path} component={MovieGrid} />
      <Route exact path={`${match.path}view/:postId`} component={Single} />
    </div>
  );
};

export default Main;
