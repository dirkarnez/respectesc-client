import * as React from "react";
import Tel from "app/components/Tel";
// import NT from "app/assets/nt.jpg";
// import SPK from "app/assets/spk.jpg";
// import TW from "app/assets/tw.jpg";
import branchInfoList, { BranchInfo } from "app/data/branches";

const Branch = ({
  area, 
  city,
  address, 
  travelInstruction, 
  placeId,
  telAreaCode, 
  tel,
  fax,
  faxAreaCode,
  email, 
  workingHourWeekday, 
  workingHourWeekend
}: BranchInfo) => (
  <React.Fragment>
    <h3>{area}{city}</h3>
      <p>
      {address} 
      {
        travelInstruction && 
        <React.Fragment>
          <br /> ({travelInstruction})
        </React.Fragment>
      }
      </p>
      <div className="iframe-container">
        <iframe 
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyA05OsZ4uYIUhCzhvoGc0rqr-iVu_q-usU&q=place_id:${placeId}`}
          style={{border: "none"}}
        >
          <p>Your browser does not support iframes.</p>
        </iframe>
      </div>
        {/* <img
          src={NT}
          className="img-fluid"
        /> */}
        <br />
        <p>
          <i className="fas fa-phone-alt"/>&nbsp;<Tel code={telAreaCode} telNumber={tel}/>
          { 
            faxAreaCode && fax &&
            <React.Fragment>
              <br />
              <i className="fas fa-fax"/>&nbsp;<Tel code={faxAreaCode} telNumber={fax} />
            </React.Fragment>
          }
          <br />
          <i className="fas fa-envelope"/>&nbsp;<a href={`mailto:${email}`}>{email}</a>
        </p>
        <p>
          星期一至六:&nbsp;{workingHourWeekday}
          <br />
          星期日及公眾假期:&nbsp;{workingHourWeekend}
        </p>
  </React.Fragment>
)

export default () => (
  <div className="article-clean">
    <div className="container">
      <div className="row">
        <div className="col-lg-10 col-xl-8 offset-lg-1 offset-xl-2">
          <div className="intro">
            <h1 className="text-center">聯絡我們</h1>
          </div>
          <div className="text">
            { 
              branchInfoList && 
              branchInfoList.map(branchInfo => (
                <React.Fragment>
                  <Branch {...branchInfo}/>
                  <br />
                  <br />
                </React.Fragment>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  </div>
);