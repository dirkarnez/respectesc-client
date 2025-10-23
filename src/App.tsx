import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  RouteComponentProps
} from "react-router-dom";
import Footer from "app/components/Footer";
import { routes } from "app/routes";
import i18n from "app/i18n";
import Nav from "./components/Nav";

class Base extends React.Component<RouteComponentProps, {}> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.toggleLanguage = this.toggleLanguage.bind(this);
  }
  
  componentWillMount() {
    // 偵測轉換當前語系
    if (!!this.props.match.path) {
      if (this.props.match.path == "/en") {
        this.toggleLanguage("en")
      } else if (this.props.match.path == "/zh-HK") {
        this.toggleLanguage("zh-HK")
      }
    }
  }

  toggleLanguage(newLanguage: string) {
    if(newLanguage !== i18n.language) {
      // 若 URL 語系與當前語系不同，則轉換語系
      i18n.changeLanguage(newLanguage);
    }
  }

  render() {
    return (
      <div>
        <Nav {...this.props}/>
        <div style={{minHeight: "70vh"}}>
          <Switch>
            {
              routes.map(({ route, component }, index) => (
                <Route key={index} exact={route == "/"} path={`${this.props.match.url}${route}`} component={component}/>
              ))
            }
            <Redirect to="/"/>
          </Switch>
        </div>
        <Footer {...this.props}/>
      </div>
    );
  }
};

export default () => (
  <Router>
    {/* <Route path='/' component={Base} /> */}
    <Switch>
      <Route path="/en" component={Base} />
      <Route path="/zh-HK" component={Base} />
      <Redirect to="/zh-HK"/>
    </Switch>
  </Router>
);