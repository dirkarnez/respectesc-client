import * as React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import gallery1 from "app/assets/gallery1.jpg";
import gallery2 from "app/assets/gallery2.jpg";
import gallery3 from "app/assets/gallery3.jpg";
import gallery4 from "app/assets/gallery4.jpg";
import gallery5 from "app/assets/gallery5.jpg";
import gallery6 from "app/assets/gallery6.jpg";
import gallery7 from "app/assets/gallery7.jpg";
import gallery8 from "app/assets/gallery8.jpg";
import gallery9 from "app/assets/gallery9.jpg";
import gallery10 from "app/assets/gallery10.jpg";
import gallery11 from "app/assets/gallery11.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import logo from "app/assets/logo.svg";
import slogan from "app/assets/slogan.jpg"
import Tel from "app/components/Tel";
import { routes } from "app/routes";
import branchInfoList from "app/data/branches";
import { testimonials, Testimonial } from "app/data/testimonials";


interface MyCarouselProps {
  interval: number,
  testimonials: Testimonial[]
}

interface MyCarouselState {
  index: number
}

class MyCarousel extends React.Component<MyCarouselProps, MyCarouselState> {
  constructor(props: MyCarouselProps) {
    super(props);
    this.state = { index: 0 };
  }
  
  componentDidMount() {
    setInterval(() => {
      this.setState({index: (this.state.index + 1) % this.props.testimonials.length})
    }, this.props.interval);
  }
  
  render() {
    const { testimonials } = this.props;
    const { index } = this.state;
    return (
      <div className="jumbotron jumbotron-fluid" style={{padding: "0px"}}>      
        <div 
          className="img-fluid jumbotron main-carousel" 
          style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${slogan}')`}}>
            {testimonials.map(({comment, from}, tIndex) => (
              index == tIndex && 
              <div key={tIndex} data-aos="fade-down" className="container">
                <p className="lead">{comment}</p>
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
                <span className="navbar-text">
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
