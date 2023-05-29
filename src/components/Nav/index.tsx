import * as React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
import logo from "app/assets/logo.svg";
import Tel from "app/components/Tel";
import { routes } from "app/routes";
import branchInfoList from "app/data/branches";

import { Translation } from 'react-i18next';
import i18n from "app/i18n";


class I18nToggler extends React.Component<RouteComponentProps, {}> {
  render() {
    const { location: { pathname }, match: { path }} = this.props;
    return (
      <Translation>
      {t => i18n.language == "zh-HK" ? 
        // <div
        //   id="i18n-toggler" 
        //   data-aos="fade-down" 
        //   onClick={() => i18n.changeLanguage("en")}
        // >
        //   <i className="fas fa-globe" style={{display: "inline"}}/>
        //   &nbsp;
        //   EN
        // </div>
        // :
        // <div 
        //   id="i18n-toggler" 
        //   data-aos="fade-down"
        //   onClick={() => i18n.changeLanguage("zh-HK")}
        // >
        //   <i className="fas fa-globe" style={{display: "inline"}}/>
        //   &nbsp;
        //   中
        // </div>
        <a
            id="i18n-toggler" 
            href={`/en${pathname.slice("/zh-HK".length)}`}
            // onClick={() => i18n.changeLanguage("zh-HK")}
          >
            <i className="fas fa-globe" 
            data-aos="fade-down"
            style={{display: "inline"}}/>
            &nbsp;
            EN
        </a>
        :
        <a
          id="i18n-toggler" 
          href={`/zh-HK${pathname.slice("/en".length)}`}
          // onClick={() => i18n.changeLanguage("zh-HK")}
        >
          <i className="fas fa-globe" 
          data-aos="fade-down"
          style={{display: "inline"}}/>
          &nbsp;
          中
      </a>

      }
    </Translation>
    );
  }
}


export default class extends React.Component<RouteComponentProps, {}> {
  render() {
    const { location: { pathname }, match: { path }} = this.props;

    return (
      <Translation>
        {
          t => (
            <div className="header-blue">
              <nav
                className="navbar navbar-light navbar-expand-md"
                style={{
                  boxShadow: "0 2px 6px 0 rgba(0,0,0,0.12), inset 0 -1px 0 0 #dadce0"
                }}
              >
                <div className="container">
                  <Link className="navbar-brand" to={path} style={{textAlign: "center"}}>
                    <img src={logo} />
                    <br/>
                    {t("company.name")}
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
                              data-aos="fade-down"
                              className={`nav-link menu-items ${route == pathname ? "active" : ""}`}
                              to={`${path}${route}`}
                            >
                              {t(description)}
                            </Link>
                          </li>
                        ))}
                    </ul>
                    <I18nToggler {...this.props}/>
                    <br/>
                    {
                      branchInfoList && 
                      <span className="navbar-text" data-aos="fade-down" style={{minWidth: "240px"}}>
                        {
                          branchInfoList.map(({city, telAreaCode, tel}, index) => (
                            <React.Fragment key={index}>
                              <Tel code={telAreaCode} telNumber={tel}>{t(city)}{i18n.language == "en" ? <span>&nbsp;</span> : ""}{t("branch")}</Tel>
                              <br/>
                            </React.Fragment>
                          ))
                        }
                      </span>
                    }
                    {/* <span className="navbar-text">
                      <a href="#" className="login">
                        中 / Eng
                      </a>
                    </span> */}
                  </div>
                </div>
              </nav>
              {/* {pathname == path && <MyCarousel testimonials={testimonials} interval={5000}/>} */}
            </div>
          )
        }
      </Translation>
    );
  }
}
