import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; // react-router v4/v5

// Import Components
import Main from "./components/Main";
import store from "./store";

// Import Scss
import "./FlickPicker.scss";

const rootApp = (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(rootApp, document.getElementById("root"));
