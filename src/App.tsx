import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  RouteComponentProps
} from "react-router-dom";

import Nav from "app/components/Nav";
import Footer from "app/components/Footer";
import { routes } from "app/routes";

function Base<T extends RouteComponentProps>(props: T) {
  return (
    <div>
        <Nav {...props}/>
        <div style={{minHeight: "70vh"}}>
          <Switch>
            {
              routes.map(({route, component}, index) => (
                <Route key={index} exact={route == "/"} path={route} component={component}/>
              ))
            }
            <Redirect to="/" />
          </Switch>
        </div>
        <Footer/>
    </div>
  );
}

export default () => (
  <Router>
    <Route path="/" component={Base} />
  </Router>
);