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

export default () => {
  return (
    <div className="article-clean">
      <div className="container">
        <div className="row">
          <div className="col">
          <div className="intro">
              <h1 className="text-center" data-aos="fade-down">
                <strong>護家僱傭服務中心</strong>
              </h1>
            </div>
            <div className="text" data-aos="fade-down">
              <p>
                護家僱傭服務中心在香港的女傭業界中提供最優質的家傭中介服務。
                <br />
                護家僱傭服務中心竭誠為你服務，我們深信誠實和透明度高的辦事作風是成功建立長遠合作關係的重要因素。
              </p>
              <div className="card">
                <div className="card-body">
                  <h6 className="card-title">我們的服務宗旨</h6>
                  <h3 className="text-muted card-subtitle mb-2">將最優質的女傭推薦給僱主，減輕僱主壓力，促進主僱和諧相處。</h3>
                </div>
              </div>
              <div className="photo-gallery">
                  <div className="container">
                      <div className="intro">
                          <h1 className="text-center" data-aos="fade-down">
                            <strong>中心照片</strong>
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
                              <div key={index} className="col-sm-6 col-md-4 col-lg-3 item" data-aos="zoom-in"><a href={gallery} data-lightbox="photos"><img className="img-fluid" src={gallery}/></a></div>
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
  )
}