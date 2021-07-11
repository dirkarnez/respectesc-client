import * as React from "react";
import Tel from "app/components/Tel";
import Fax from "app/components/Fax";
import branchInfoList, { BranchInfo } from "app/data/branches";
import Base from "app/pages/Base";
import { useTranslation } from 'react-i18next';

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
}: BranchInfo) => {
  const { t } = useTranslation();
  return (
    <div data-aos="fade-down">
      <strong>{t(area)}{t(city)}</strong>
      <p>
        {address} 
        {
          travelInstruction && 
          <React.Fragment>
            <br /> ({travelInstruction})
          </React.Fragment>
        }
      </p>
      <div data-aos="fade-down" className="iframe-container">
        <iframe
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyA05OsZ4uYIUhCzhvoGc0rqr-iVu_q-usU&q=place_id:${placeId}`}
          style={{border: "none"}}
        >
          <p>Your browser does not support iframes.</p>
        </iframe>
      </div>
      <br />
      <p>
        <Tel code={telAreaCode} telNumber={tel}>+{telAreaCode} {tel}</Tel>
        { 
          faxAreaCode && fax &&
          <React.Fragment>
            <br />
            <Fax code={faxAreaCode} faxNumber={fax}>+{faxAreaCode} {fax}</Fax>
          </React.Fragment>
        }
        <br />
        <a href={`mailto:${email}`}><i className="fas fa-envelope"/>&nbsp;{email}</a>
      </p>
      <p>
        星期一至六:&nbsp;{workingHourWeekday}
        <br />
        星期日及公眾假期:&nbsp;{workingHourWeekend}
      </p>
    </div>
  )
}

export default () => (
  <Base>
    <div className="intro">
      <h1 className="text-center" data-aos="fade-down">
        <strong>聯絡我們</strong>
      </h1>
    </div>
    <div data-aos="fade-down" className="aos-init aos-animate">
      { 
      branchInfoList && 
      branchInfoList.map((branchInfo, index) => (
        <React.Fragment key={index}>
          <Branch {...branchInfo}/>
          <br />
          <br />
        </React.Fragment>
      ))
    }
    </div>
  </Base>
  // <div className="article-clean">
  //   <div className="container">
  //     <div className="row">
  //       <div className="col-lg-10 col-xl-8 offset-lg-1 offset-xl-2">
  //         <div className="intro">
  //           <h1 className="text-center">聯絡我們</h1>
  //         </div>
  //         <div className="text">
  //           { 
  //             branchInfoList && 
  //             branchInfoList.map((branchInfo, index) => (
  //               <React.Fragment key={index}>
  //                 <Branch {...branchInfo}/>
  //                 <br />
  //                 <br />
  //               </React.Fragment>
  //             ))
  //           }
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </div>
);