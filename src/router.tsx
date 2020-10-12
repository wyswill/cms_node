import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import config from "./route.config";

export default function Myrouter() {
  return (
    <Router basename={require("../package.json").homepage}>
      <Switch>
        {config.map((ele, index: number) => (
          <Route key={index} exact={ele.isExact} path={ele.path} component={ele.component} />
        ))}
      </Switch>
    </Router>
  );
}
