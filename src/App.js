import React from "react";
import { Switch, Route } from "react-router-dom";
import Adminpanel from "./components/Adminpanel";
import Login from "./components/Login";
import "./index.css";
import "./App.css";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>

        <Route path="/adminpanel">
          <Adminpanel />
        </Route>
      </Switch>
    </>
  );
};

export default App;
