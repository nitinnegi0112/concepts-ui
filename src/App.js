import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Forgetpass from "./pages/Forgetpass";
import Resetpass from "./pages/Resetpass";
import React, { component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/registration" component={Registration} exact />
        <Route path="/forgetpass" component={Forgetpass} exact />
        <Route path="/resetpass" component={Resetpass} exact />
        <Route path="/dashboard" component={Dashboard} exact />
      </Switch>
    </div>
  );
}

export default App;
