import * as React from "react";
import labordep from "app/assets/labordep.jpg";
import philippineConsulateGeneral from "app/assets/philippine-consulate-general.png";
import { Link } from "react-router-dom";

export default () => (
  // <div className="footer-basic">
  //   <footer>
  //     <div className="social">
  //       <a href="#">
  //         <i className="icon ion-social-instagram" />
  //       </a>
  //       <a href="#">
  //         <i className="icon ion-social-snapchat" />
  //       </a>
  //       <a href="#">
  //         <i className="icon ion-social-twitter" />
  //       </a>
  //       <a href="#">
  //         <i className="icon ion-social-facebook" />
  //       </a>
  //     </div>
  //     <ul className="list-inline">
  //       <li className="list-inline-item">
  //         <a href="#">Home</a>
  //       </li>
  //       <li className="list-inline-item">
  //         <a href="#">Services</a>
  //       </li>
  //       <li className="list-inline-item">
  //         <a href="#">About</a>
  //       </li>
  //       <li className="list-inline-item">
  //         <a href="#">Terms</a>
  //       </li>
  //       <li className="list-inline-item">
  //         <a href="#">Privacy Policy</a>
  //       </li>
  //     </ul>
  //     <p className="copyright">Respect Employment Services Centre © {new Date().getFullYear()}</p>
  //   </footer>
  // </div>

  <div
    style={{
      padding: "30px 0",
      marginTop: "40px",
      backgroundColor: "#363839",
      color: "#dddddd"
    }}
  >
    <footer>
      <div className="container">
        <div className="row justify-content-center">
          <div style={{ padding: "20px" }}>
            <img
              style={{ width: "100%"}}
              src={labordep}
            />
            <br />
            勞工處牌照號碼: 56987
          </div>
          <div style={{ padding: "20px" }}>
            <img
              style={{ width: "100%", background: "#07437F" }}
              src={philippineConsulateGeneral}
            />
            <br />
            菲律賓駐港領事館證書號碼: 1029526
          </div>
        </div>
        <div className="row justify-content-center" style={{ textAlign: "center" }}>
          <br />
          <span>
            Respect Employment Services Centre © {new Date().getFullYear()}
          </span>
          <br/>
        </div>
        <div className="row justify-content-center" style={{ textAlign: "center" }}>
          <Link to="/privacy"><span style={{color: "#ffffff"}}>私隱聲明</span></Link>
          {/* &nbsp;
          <Link to="/terms"><span style={{color: "#ffffff"}}>條款及細則</span></Link> */}
        </div>
      </div>
    </footer>
  </div>
);