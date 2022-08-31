import * as React from "react";
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
                      <blockquote className="blockquote" style={{fontSize: "2.25rem"}}>
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
                                  gallery1,
                                  gallery2,
                                  gallery3,
                                  gallery4,
                                  gallery5,
                                  gallery6,
                                  gallery7,
                                  gallery8,
                                  gallery9,
                                  gallery10,
                                  gallery11
                                ].map((gallery, index) => (
                                  <div key={index} className="col-sm-6 col-md-4 col-lg-3 item" data-aos="zoom-in">
                                    <a href={gallery} data-lightbox="photos">
                                      <img className="img-fluid" src={gallery}/>
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