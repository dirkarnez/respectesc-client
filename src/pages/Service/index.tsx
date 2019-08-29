import * as React from "react";
import { Table, Th, Td } from "app/components/Table";

interface TitleContent {
  title: string;
  content(): React.ReactElement;
}

const titleContentList: TitleContent[] = [
  {
    title: "海外傭工",
    content: () => (
      <div>
        <h1>海外傭工</h1>
        <br />
        <p>聘請來自菲律賓、柬埔寨、印尼等國家的外籍傭工。</p>
        <br />
        聘請海外女傭費用：
        <Table>
          <tbody>
            <tr>
              <Th>菲律賓女傭</Th>
              <Td>HK $10,980</Td>
            </tr>
            <tr>
              <Th>柬埔寨女傭</Th>
              <Td>HK $10,980</Td>
            </tr>
            <tr>
              <Th>印尼女傭</Th>
              <Td>HK $10,980</Td>
            </tr>
          </tbody>
        </Table>
        <br />
        <p>服務費包括:</p>
        <ul>
          <li>本港領事館合約費及文件程序費</li>
          <li>有關國家政府之文件手續費及程序費</li>
          <li>香港入境簽証費</li>
          <li>所有往來文件費用</li>
          <li>女傭來港機票，離境稅及機場稅</li>
          <li>機場接送女傭至本公司之交通費</li>
          <li>菲律賓語，柬埔寨語，印尼語翻譯服務及女傭輔導</li>
          <li>代女傭辦理領事館報到手續及協助女傭領取香港身份証</li>
          <li>12個月內可更換女傭一次 (需另付原價費用80%)</li>
          <li>送首2年本地勞工保險或香港驗身檢查</li>
        </ul>
      </div>
    )
  },
  {
    title: "本地(外籍)約滿傭工",
    content: () => (
      <div>
        <h1>本地(外籍)約滿傭工</h1>
        <br />
        <p>
          前言: 為迎合一些僱主的急切之需，本公司擁有大量即時可約見的約滿女傭供聘用。部份具備前僱主良好推薦書可供審閱。可在辦公時間內安排即時面試約見。
        </p>
        <br />
        聘請本地(外籍)約滿女傭費用：
        <Table>
          <tbody>
            <tr>
              <Th>菲律賓女傭</Th>
              <Td>HK $8,880</Td>
            </tr>
            <tr>
              <Th>柬埔寨女傭</Th>
              <Td>HK $8,880</Td>
            </tr>
            <tr>
              <Th>印尼女傭</Th>
              <Td>HK $8,880</Td>
            </tr>
          </tbody>
        </Table>
        <br />
        <p>本公司收費包括：</p>
        <ul>
          <li>香港入境處的工作簽證費</li>
          <li>駐港領事館簽發合約的公證費用</li>
          <li>包括在港健康驗身檢查：(包括驗孕、乙型肝炎、胸肺、性病及愛滋病檢驗)</li>
          <li>12個月內更換傭人、需付聘請新傭人當時費用之80%。</li>
          <li>可用優惠價購買本地勞工保險</li>
          <li>不包來港機票</li>
        </ul>
      </div>
    )
  },
  {
    title: "續約及代辦簽證",
    content: () => (
      <div>
        <h1>續約及代辦簽證</h1>
        <br/>
        <p>
        僱主欲與女傭續約，可於約滿日期前兩個月辦理。
        </p>
        <br />
        續約服務收費:
        <Table>
          <tbody>
            <tr>
              <Th>菲律賓女傭</Th>
              <Td>HK $1,680</Td>
            </tr>
            <tr>
              <Th>柬埔寨女傭</Th>
              <Td>HK $1,680</Td>
            </tr>
            <tr>
              <Th>印尼女傭</Th>
              <Td>HK $2,300</Td>
            </tr>
          </tbody>
        </Table>
        <br />
        <p>續約服務包括:</p>
        <ul>
          <li>香港入境處工作簽證費</li>
          <li>駐港領事館簽發合約公證費用</li>
          <li>公司行政費用</li>
        </ul>
      </div>
    )
  },
  { 
    title: "自選外籍傭工", content: () => (
      <div>
        <h1>自選外籍傭工</h1>
        <br/>
        <p>
        直接聘請本地外籍傭工
        </p>
        <p>
        直接聘請是指聘用非附屬於本公司的外籍家庭傭工。本公司代辦直接聘請菲律賓、柬埔寨及印尼傭工的文件處理手續，費用只需港幣$5880起，當中包括駐港領事館簽發合約公證費用及香港入境處工作簽證費。在港健康驗身檢查： ( 包括驗孕、乙型肝炎、胸肺、性病及愛滋病檢驗 )
        </p>
        <br />
        聘請「自選指定女傭」收費：
        <Table>
          <tbody>
            <tr>
              <Th>菲律賓女傭</Th>
              <Td>HK $5,880</Td>
            </tr>
            <tr>
              <Th>柬埔寨女傭</Th>
              <Td>HK $5,880</Td>
            </tr>
            <tr>
              <Th>印尼女傭</Th>
              <Td>HK $5,880</Td>
            </tr>
          </tbody>
        </Table>
        <br />
        <p>本公司收費包括：</p>
        <ul>
          <li>香港入境處的工作簽證費</li>
          <li>駐港領事館簽發合約的公證費用</li>
          <li>在港健康驗身檢查： (包括驗孕、乙型肝炎、胸肺、性病及愛滋病檢驗)</li>
        </ul>
      </div>
    ) 
  },
  { 
    title: "家傭工傷及保險", content: () => (
      <div>
        <h1>家傭工傷及保險</h1>
        <br />
        保費表 (港幣):
        <Table>
          <tbody>
            <tr>
              <Th>保障利益</Th>
              <Th>一年</Th>
              <Th>二年</Th>
            </tr>
            <tr>
              <Th>基本勞工保險</Th>
              <Td>HK $285</Td>
              <Td>HK $492</Td>
            </tr>
            <tr>
              <Th>基本勞工保險 + 門診及住院醫療</Th>
              <Td>HK $719</Td>
              <Td>HK $1299</Td>
            </tr>
          </tbody>
        </Table>
        <br />
        <p>本公司採用<strong>美亞保險香港有限公司 – AIG 的家傭保險計劃</strong>。</p>
        <p>本公司可為客人提供持牌保險顧問解釋保險內容及協助索償程序。</p>
        <br/>
        <strong>美亞香港簡介</strong>
        <p>憑藉超過80年的本地經驗、AIG遍佈100個國家及地區的全球業務以及服務8,800萬名客户的國際網絡，美亞香港 (美亞保險香港有限公司) 為個人、家庭、小型企業和跨國公司，提供各類型的保險產品。</p>
      </div>
    ) 
  }
];

interface Temp {
  [s: number]: TitleContent;
}

const temp: Temp = titleContentList.reduce((p, c, i) => ({ ...p, [i]: c }), {});

interface ServiceState {
  selected: number;
}

export default class Service extends React.Component<{}, ServiceState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      selected: 0
    };

    this.select = this.select.bind(this);
  }

  select(selected: number) {
    this.setState({ selected });
  }

  render() {
    const { selected } = this.state;
    const renderer = temp[selected];
    return (
      <div style={{ paddingTop: "50px" }}>
        <div className="article-clean">
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-lg-3 offset-md-1">
                <ul style={{ listStyleType: "none", margin: "0px", padding: "0px" }}>
                  {titleContentList.map(({ title }, index) => (
                    <li
                      key={index}
                      style={ { 
                        padding: "15px", 
                        ...(selected == index ? { backgroundColor: "lightgray" } : {}) }
                      }
                      onClick={() => this.select(index)}
                    >
                      {title}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-md-10 col-lg-7 offset-md-1 offset-lg-0">
                {renderer ? renderer.content() : ""}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
