import * as React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
import logo from "app/assets/logo.svg";
import slogan from "app/assets/slogan.jpg"
import Tel from "app/components/Tel";
import { routes } from "app/routes";
import branchInfoList from "app/data/branches";
import { testimonials, Testimonial } from "app/data/testimonials";
import { Translation } from 'react-i18next';
import i18n from "app/i18n";

interface MyCarouselProps {
  interval: number,
  testimonials: Testimonial[]
}

interface MyCarouselState {
  index: number,
  handle: number
}


class I18nToggler extends React.Component<{}, {}> {
  render() {
    return (
      <Translation>
      {t => (
        <div className="dropdown" data-aos="fade-down" style={{paddingRight: "10px"}}>
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {t(i18n.language)}
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <span className="dropdown-item" onClick={() => i18n.changeLanguage("zh-HK")}>{t("zh-HK")}</span>
            <span className="dropdown-item" onClick={() => i18n.changeLanguage("en")}>{t("en")}</span>
          </div>
        </div>
      )}
    </Translation>
    );
  }
}

class MyCarousel extends React.Component<MyCarouselProps, MyCarouselState> {
  constructor(props: MyCarouselProps) {
    super(props);
    this.state = { index: 0, handle: NaN };
  }
  
  componentDidMount() {
    this.setState({
      handle: window.setInterval(() => {
        this.setState({index: (this.state.index + 1) % this.props.testimonials.length})
      }, this.props.interval)
    });
  }

  componentWillUnmount() {
    window.clearInterval(this.state.handle);
  }
  
  render() {
    const { testimonials } = this.props;
    const { index } = this.state;
    return (
      <div className="jumbotron jumbotron-fluid" style={{padding: "0px"}}>      
        <div 
          className="img-fluid jumbotron main-carousel" 
          style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${slogan}')`}}>
            {testimonials.map(({comment, from}, tIndex) => (
              index == tIndex && 
              <div key={tIndex} data-aos="fade-down" className="container">
                <span className="lead">{comment}</span>
                <br/>
                <br/>
                <i className="fas fa-star"/>
                <i className="fas fa-star"/>
                <i className="fas fa-star"/>
                <i className="fas fa-star"/>
                <i className="fas fa-star"/>
                <br/>
                <span className="from">{from}</span>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

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
            <Link className="navbar-brand" to="/ "style={{textAlign: "center"}}>
              <img src={logo} />
              <br/>
              護家僱傭服務中心
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
              <I18nToggler/>
              <ul className="nav navbar-nav mr-auto">
                {routes
                  .filter(({ onMenu }) => onMenu)
                  .map(({ route, description }, index) => (
                    <li key={index} className="nav-item" role="presentation">
                      <Link
                        data-aos="fade-down"
                        className={`nav-link menu-items ${route == pathname ? "active" : ""}`}
                        to={route}
                      >
                        {description}
                      </Link>
                    </li>
                  ))}
              </ul>
              {
                branchInfoList && 
                <span className="navbar-text" data-aos="fade-down">
                  {
                    branchInfoList.map(({city, telAreaCode, tel}, index) => (
                      <React.Fragment key={index}>
                        {/* <i className="fas fa-phone-alt"/>&nbsp;{city}&nbsp;<Tel code={telAreaCode} telNumber={tel}/>  */}
                        <Tel code={telAreaCode} telNumber={tel}>{city}分行</Tel>
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
        {pathname == "/" && <MyCarousel testimonials={testimonials} interval={5000}/>}
      </div>
    );
  }
}
