import * as React from "react";
import labordep from "app/assets/labordep.jpg";
import philippineConsulateGeneral from "app/assets/philippine-consulate-general.png";
import cambodia from "app/assets/cambodia.png";
import { Link } from "react-router-dom";

export default () => (
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
          <div className="col-sm-12 col-md-4 text-center" style={{ padding: "20px" }}>
            <a href="https://www.labour.gov.hk/" target="_blank">
              <img
                className="img-fluid"
                src={labordep}
              />
            </a>
            <br />
            <h4>持有效<a href="https://www.labour.gov.hk/" target="_blank">勞工處</a>牌照號碼：63050</h4>
          </div>
          <div className="col-sm-12 col-md-4 text-center" style={{ padding: "20px" }}>
            <img
              className="img-fluid"
              style={{ background: "#07437F" }}
              src={philippineConsulateGeneral}
            />
            <br />
            <h4>持菲律賓駐港領事館證書</h4>
          </div>
          <div className="col-sm-12 col-md-4 text-center" style={{ padding: "20px" }}>
            <img 
              className="img-fluid"
              style={{ height: "150px" }}
              src={cambodia}
            />
            <br />
            <h4>持有柬埔寨合法牌照<br/>Cambodia Licence</h4>
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
        </div>
      </div>
    </footer>
  </div>
);