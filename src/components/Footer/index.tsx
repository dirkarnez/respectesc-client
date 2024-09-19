import * as React from "react";
import labordep from "app/assets/labordep.jpg";
import philippineConsulateGeneral from "app/assets/philippine-consulate-general.png";
import cambodia from "app/assets/cambodia.png";
import { Link } from "react-router-dom";
import { Translation } from 'react-i18next';

export default () => (
  <Translation>
    {t => (
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
                <h5 dangerouslySetInnerHTML={{__html: `${t("licence_labour_department")}: 75982`}}/>
              </div>
              <div className="col-sm-12 col-md-4 text-center" style={{ padding: "20px" }}>
                <a href="https://hongkongpcg.dfa.gov.ph/" target="_blank">
                  <img
                    className="img-fluid"
                    style={{ background: "#07437F" }}
                    src={philippineConsulateGeneral}
                  />
                </a>
                <br />
                <h5 dangerouslySetInnerHTML={{__html: t("licence_philippine_consulate_general")}}/>
              </div>
              
              <div className="col-sm-12 col-md-4 text-center" style={{ padding: "20px" }}>
                <a href="https://mfaic.gov.kh/" target="_blank">
                  <img 
                    className="img-fluid"
                    style={{ height: "150px" }}
                    src={cambodia}
                  />
                </a>
                <br />
                <h5 dangerouslySetInnerHTML={{__html: t("licence_cambodia")}}/>
              </div>
            </div>
            <div className="row justify-content-center" style={{ textAlign: "center" }}>
              <br />
              <span>              
              護家僱傭服務中心
              <br/>
              Respect Employment Services Centre © {new Date().getFullYear()}
              </span>
              <br/>
            </div>
            <br/>
            <div className="row justify-content-center" style={{ textAlign: "center" }}>
              <Link to="/privacy"><span style={{color: "#ffffff"}}>{t("privacy_statement")}</span></Link>
            </div>
          </div>
        </footer>
      </div>
    )}
  </Translation>
);
