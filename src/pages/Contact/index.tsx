import * as React from "react";
import Tel from "app/components/Tel";
import NT from "app/assets/nt.jpg";
import SPK from "app/assets/spk.jpg";
import TW from "app/assets/tw.jpg";

export default () => (
  <div className="article-clean">
    <div className="container">
      <div className="row">
        <div className="col-lg-10 col-xl-8 offset-lg-1 offset-xl-2">
          <div className="intro">
            <h1 className="text-center">聯絡我們</h1>
          </div>
          <div className="text">
            <h3>新界</h3>
            <p>
              新界葵涌大連排道172-180號金龍工業中心第三期18樓J室
              <br />
              (港鐵葵芳站A出口，步行約8分鐘)
            </p>
            <img
              src={NT}
              className="img-fluid"
            />
            <br />
            <br />
            <p>
              電話: <Tel code={"852"} telNumber={`31580708`} />
              <br />
              電郵:{" "}
              <a href="mailto:respect.esc@gmail.com">respect.esc@gmail.com</a>
            </p>
            <p>
              星期一至六：上午11時至下午7時00分(敬請預約)
              <br />
              星期日及公眾假期：歡迎預約
            </p>
            <br />
            <br />
            <h3>九龍</h3>
            <p>
              九龍新蒲崗太子道東704號新時代工貿商業中心15樓7室
              <br />
              (Mikiki商埸步行3分鐘)
            </p>
            <img
              src={SPK}
              className="img-fluid"
            />
            <br />
            <br />
            <p>
              電話: <Tel code={"852"} telNumber={`36191728`} />
              <br />
              電郵:{" "}
              <a href="mailto:respect.mendy@gmail.com">
                respect.mendy@gmail.com
              </a>
            </p>
            <p>
              星期一至六：上午11時至下午7時00分(敬請預約)
              <br />
              星期日及公眾假期：歡迎預約
            </p>
            <br/>
            <br/>
            <h3>荃灣</h3>
            <p>
              新界荃灣西樓角路202-216號昌寧商場2樓48號鋪
            </p>
            <img
              src={TW}
              className="img-fluid"
            />
            <br />
            <br />
            <p>
              電話: <Tel code={"852"} telNumber={`23181190`} />
              <br />
              傳真: <Tel code={"852"} telNumber={`23181192`} />
              <br />
              電郵:{" "}
              <a href="mailto:respect.esc@gmail.com">
                respect.esc@gmail.com
              </a>
            </p>
            <p>
              星期一至六：上午11時至下午7時00分(敬請預約)
              <br />
              星期日及公眾假期：歡迎預約
            </p>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  </div>
);
