import * as React from "react";
import labordep from "app/assets/labordep.jpg";
import philippineConsulateGeneral from "app/assets/philippine-consulate-general.png";
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
          <div style={{ padding: "20px" }}>
            <img
              style={{ width: "100%"}}
              src={labordep}
            />
            <br />
            持勞工處牌照
          </div>
          <div style={{ padding: "20px" }}>
            <img
              style={{ width: "100%", background: "#07437F" }}
              src={philippineConsulateGeneral}
            />
            <br />
            持菲律賓駐港領事館證書
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