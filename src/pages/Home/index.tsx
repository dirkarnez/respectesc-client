import * as React from "react";
import Blockquote from "app/components/Blockquote";

export default () => {
  return (
    <div className="article-clean">
      <div className="container">
        <div className="row">
          <div className="col">
          <div className="intro">
              <h1 className="text-center" data-aos="fade-down">
                <strong>護家僱傭中心</strong>
              </h1>
            </div>
            <div className="text" data-aos="fade-down">
              <p>
                護家僱傭中心在香港的女傭業界中提供最優質的家傭中介服務。
                <br />
                護家僱傭中心竭誠為你服務，我們深信誠實和透明度高的辦事作風是成功建立長遠合作關係的重要因素。
                <br />
                <br />
                <strong>
                  我們的服務宗旨：將最優質的女傭推薦給僱主，減輕僱主壓力，促進主僱和諧相處。
                </strong>
              </p>
            </div>
          </div>
          {/* <div className="col-md-10 col-lg-3 offset-md-1" style={{paddingTop: "50px", display: "flex", justifyContent: "center"}}>
              <iframe
                src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FRespect-Employment-Services-Centre%25E8%25AD%25B7%25E5%25AE%25B6%25E5%2583%25B1%25E5%2582%25AD%25E6%259C%258D%25E5%258B%2599%25E4%25B8%25AD%25E5%25BF%2583-546709025373005%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1816911088340155`}
                width="340"
                height="500"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                allow="encrypted-media"
              />
          </div> */}
        </div>
      </div>
    </div>
  )
}