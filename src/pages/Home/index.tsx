import * as React from "react";
import gallery1_new from "app/assets/0c2423ac-b39e-4438-897d-1e750f8102b7.jpg";
import gallery2_new from "app/assets/f9c2c71c-478c-4367-8c76-2de0e31fa35e.jpg";
import gallery3_new from "app/assets/1c89279e-a10d-4181-bf7e-4986517b6354.jpg";
import gallery4_new from "app/assets/5c031451-0cba-4d1a-8e45-b0e9f5af1a51.jpg";
import gallery5_new from "app/assets/74d971cb-b688-492d-8757-6cc02449b075.jpg";
import gallery6_new from "app/assets/ca41664a-f1fa-4b6e-8995-31e1c965d6ea.jpg";
import gallery7_new from "app/assets/d8af4fd3-44ba-49c7-bdc7-964dcd533b9f.jpg";
import gallery8_new from "app/assets/d87f6f94-4446-4efa-afd9-6e3bd6d30b17.jpg";

import gallery1_prev from "app/assets/gallery1.jpg";
import gallery2_prev from "app/assets/gallery2.jpg";
import gallery3_prev from "app/assets/gallery3.jpg";
import gallery4_prev from "app/assets/gallery4.jpg";
import gallery5_prev from "app/assets/gallery5.jpg";
import gallery6_prev from "app/assets/gallery6.jpg";
import gallery7_prev from "app/assets/gallery7.jpg";
import gallery8_prev from "app/assets/gallery8.jpg";
import gallery9_prev from "app/assets/gallery9.jpg";
import gallery10_prev from "app/assets/gallery10.jpg";
import gallery11_prev from "app/assets/gallery11.jpg";

import { Translation } from 'react-i18next';

export default () => {
  return (
    <Translation>
      {t => (
        <div className="article-clean">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="intro">
                  <h1 className="text-center" data-aos="fade-down">
                    <strong>{t("company.name")}</strong>
                  </h1>
                </div>
                <div className="text" data-aos="fade-down">
                  <p>
                    {t("home.line1")}
                    <br />
                    {t("home.line2")}
                  </p>
                  <div className="card">
                    <div className="card-body">
                      <blockquote className="blockquote" style={{ fontSize: "2.25rem" }}>
                        {t("home.line4")}
                        <footer className="blockquote-footer">{t("home.line3")}</footer>
                      </blockquote>
                    </div>
                  </div>
                  <div className="photo-gallery">
                    <div className="container">
                      <div className="intro">
                        <h1 className="text-center" data-aos="fade-down">
                          <strong>{t("company.photos")}</strong>
                        </h1>
                      </div>
                      <div className="row photos">
                        {
                          [
                            gallery1_new,
                            gallery2_new,
                            gallery3_new,
                            gallery4_new,
                            gallery5_new,
                            gallery6_new,
                            gallery7_new,
                            gallery8_new,
                            gallery1_prev,
                            gallery2_prev,
                            gallery3_prev,
                            gallery4_prev,
                            gallery5_prev,
                            gallery6_prev,
                            gallery7_prev,
                            gallery8_prev,
                            gallery9_prev,
                            gallery10_prev,
                            gallery11_prev
                          ].map((gallery, index) => (
                            <div key={index} className="col-sm-6 col-md-4 col-lg-3 item" data-aos="zoom-in">
                              <a href={gallery} data-lightbox="photos">
                                <img className="img-fluid" src={gallery} />
                              </a>
                            </div>
                          ))
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Translation>
  )
}