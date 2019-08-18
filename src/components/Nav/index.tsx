import * as React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import slogan from "app/assets/slogan.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import logo from "app/assets/logo.svg";
import Tel from "app/components/Tel";
import { routes } from "app/routes";

export default class Header extends React.Component<RouteComponentProps, {}> {
  render() {
    const { location: { pathname }} = this.props;
    return (
      <div className="header-blue">
        <nav
          className="navbar navbar-light navbar-expand-md"
          style={{
            boxShadow: "0 2px 6px 0 rgba(0,0,0,0.12), inset 0 -1px 0 0 #dadce0"
          }}
        >
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img src={logo} />
            </Link>
            <button
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navcol-1"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navcol-1">
              <ul className="nav navbar-nav mr-auto">
                {routes
                  .filter(({ onMenu }) => onMenu)
                  .map(({ route, description }, index) => (
                    <li key={index} className="nav-item" role="presentation">
                      <Link
                        className={`nav-link menu-items ${
                          route == pathname ? "active" : ""
                        }`}
                        to={route}
                      >
                        {description}
                      </Link>
                    </li>
                  ))}
              </ul>
              <span className="navbar-text">
                葵芳 <Tel code={"852"} telNumber={`31580708`} /> &nbsp;|&nbsp; 新蒲崗{" "}
                <Tel code={"852"} telNumber={`36191728`} />
              </span>
              {/* <span className="navbar-text">
                <a href="#" className="login">
                  中 / Eng
                </a>
              </span> */}
            </div>
          </div>
        </nav>
        {pathname == "/" && (
          <Carousel
            className="container main-carousel"
            showArrows={false}
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            swipeable={false}
          >
            <div>
              <img src={slogan} />
            </div>
          </Carousel>
        )}
      </div>
    );
  }
}
