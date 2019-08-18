import * as React from "react";

export default () => {
  return (
    <div className="article-clean">
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-lg-7 offset-md-1 offset-lg-0">
          <div className="intro">
              <h1 className="text-center"><strong>護家僱傭中心</strong></h1>
            </div>
            <div className="text">
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
            <div className="intro">
              <h1 className="text-center"><strong>客戶心聲</strong></h1>
            </div>
            <div className="text">
              <p>
              <strong>馬鞍山黎太</strong>: 護家僱傭是個盡責的Agent,公司，而且細心和關顧僱主和傭工的相處<br/><br/>
              <strong>油塘梁生</strong>: 護家僱傭貼身挑選工人姐姐的配對，適合家中成員的要求<br/><br/>
              <strong>大圍吳小姐</strong>: 護家僱傭公司的agent，每個員工都盡責和有耐性，體諒客人的意見和明白客人的心聲<br/><br/>
              <strong>香港仔黃生</strong>: 對護家僱傭公司有信心，為我挑選工人姐姐好勸力同好有愛心對我個仔<br/><br/>
              <strong>銅鑼灣唐生</strong>: 護家僱傭公司為我挑選了一個工人姐姐真係好有愛心照顧我太太，太太是長期病患者，盡管我出差不在家，都百份百放心太太得到細心的照顧<br/><br/>
              <strong>太古城Doriz</strong>: I hired 3 helpers from the Respect agency, their performance was good and well-trained. Respect agency was reliable and responsible to process of the hiring, they did reported and updated every procedure from time to time.<br/><br/>
              <strong>馬鞍山曾太</strong>: 護家僱傭公司是個值得信任的公司，有承諾，挑選工人姐姐好貼心同有愛心<br/><br/>
              <strong>青衣倪小姐</strong>: 護家僱傭公司好細心， 週不時都會問工人姐姐的的工作表現如何? 如果有問題會幫我調節同教導<br/><br/>
              <strong>流浮山李生</strong>: 護家僱傭公司幫我搵個菲傭姐姐好好，有愛心又勸力，每日照顧我好細心，知道我三餐嘅口味，又錫我兩個孫<br/><br/>
              <strong>油麻地梁生</strong>: 護家僱傭公司幫我搵到工人姐姐原意照顧我對孖生BB,一個人連家務都處理得 井井有條.我對孖生bb鐘意跟姐姐多過跟我地.即係姐姐有愛心而且好錫佢地<br/><br/>
              <strong>元朗張太</strong>: 我之前搵果間agent冇責任感，而且吾跟進，衣家經朋友介紹搵到護家僱傭公司，真係有誠信同有責任，而且好關顧我地的需要，真係好貼身服務<br/><br/>
              </p>
            </div>
          </div>
          <div className="col-md-10 col-lg-3 offset-md-1" style={{paddingTop: "50px", display: "flex", justifyContent: "center"}}>
              <iframe
                src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FRespect-Employment-Services-Centre%25E8%25AD%25B7%25E5%25AE%25B6%25E5%2583%25B1%25E5%2582%25AD%25E6%259C%258D%25E5%258B%2599%25E4%25B8%25AD%25E5%25BF%2583-546709025373005%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1816911088340155`}
                width="340"
                height="500"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                allow="encrypted-media"
              />
          </div>
        </div>
      </div>
    </div>
  )
}