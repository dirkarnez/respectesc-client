import * as React from "react";
import Base from "app/pages/Base";
import quality from "app/data/quality.md";
import Content from "app/components/Content";

export default () => (
  <Base>
    <Content>
      { quality }
    </Content>
  </Base>
);

// export default () => (
//     <div className="article-clean">
//         <div className="container">
//             <div className="row">
//                 <div className="col-lg-10 col-xl-8 offset-lg-1 offset-xl-2">
//                     <div className="intro">
//                         <h1 className="text-center">外傭質素及培訓</h1>
//                     </div>
//                     <div className="text">
//                         <p><strong>專人甄選</strong></p>
//                         <p>
//                         本公司的菲律賓、柬埔寨、印尼外傭，均由派駐當地的專員進行面試及甄選，每個國家地區的職員都有一份招募守則，亦會定期到各地區進行大型招募活動，這樣可更接近申請者的家庭背景，從而得知她們的出身及個人品格，作為初步甄選，隨後再根據她們的外表、學歷、工作經驗等各方面作出評核。在面試過程中，申請者的表現和態度亦是取錄的重要因素。成功申請者會被安排拍照及製作自我介紹檔案，供僱主選擇。
//                         </p>
//                         <p><strong>海外訓練中心</strong></p>
//                         <p>
//                         本中心規定部份家傭到港前必須完成海外培訓中心之家傭訓練，確保家傭得到全面培訓。
//                         </p>
//                         <p><strong>外傭培訓課程</strong></p>
//                         <ol>
//                             <li>
//                                 中菜烹飪課程
//                                 <ol>
//                                     <li>教授烹調各式中菜</li>
//                                 </ol>
//                             </li>
//                             <li>嬰兒護理課程
//                                 <ol>
//                                     <li>嬰兒照料、清潔及沐浴示範</li>
//                                     <li>餵奶、奶具消毒及嬰兒食物預備</li>
//                                     <li>嬰兒疾病處理及有效與僱主溝通方法</li>
//                                 </ol>
//                             </li>
//                             <li>廣東話培訓
//                                 <ol>
//                                     <li>部分地區的培訓中心會由駐當地員工親自教授廣東話，使外傭能與僱主得到良好溝通</li>
//                                 </ol>
//                             </li>
//                             <li>家務指南及家居安全
//                                 <ol>
//                                     <li>僱主對衛生的要求</li>
//                                     <li>家庭電器的清潔、使用和保養</li>
//                                     <li>洗熨衣服的處理</li>
//                                     <li>睡房、浴室、客廳、飯廳、廚房、地板之清潔</li>
//                                     <li>家居安全的認識</li>
//                                     <li>預防家居危險陷阱</li>
//                                     <li>意外發生的應變措施</li>
//                                 </ol>
//                             </li>
//                         </ol>
//                         <p><strong>外傭健康狀況</strong></p>
//                         <p>
//                         外傭到港前會進行詳細身體檢查，確保外傭健康狀況良好，才會安排出境。由甄選、培訓至驗身，均由專人作安排及跟進，確保僱主稱心滿意。
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// )