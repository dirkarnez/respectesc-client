import * as React from "react";
import { Translation } from "react-i18next";
import Content from "app/components/Content";

interface TitleContent {
  title: string;
  content: string;
}

const titleContentList: TitleContent[] = [
  {
    title: "domestic_helpers.overseas.title",
    content: "domestic_helpers.overseas.content"
  },
  {
    title: "domestic_helpers.local_overseas.title",
    content: "domestic_helpers.local_overseas.content"
  },
  {
    title: "contract_and_visa.title",
    content: "contract_and_visa.content",
  },
  {
    title: "domestic_helpers.self_selected_overseas.title",
    content: "domestic_helpers.self_selected_overseas.content",
  },
  {
    title: "compensation_insurance.title",
    content: "compensation_insurance.content",
  }
];

interface Temp {
  [s: number]: TitleContent;
}

const temp: Temp = titleContentList.reduce((p, c, i) => ({ ...p, [i]: c }), {});

interface ServiceState {
  selected: number;
}

export default class extends React.Component<{}, ServiceState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      selected: 0
    };
    window.scrollTo(0, 0);
    this.select = this.select.bind(this);
  }

  select(selected: number) {
    this.setState({ selected });
  }

  render() {
    const { selected } = this.state;
    const renderer = temp[selected];
    return (
      <Translation>
        {t => (
          <div style={{ paddingTop: "50px" }}>
            <div className="article-clean">
              <div className="container">
                <div className="row" data-aos="fade-down">
                  <div className="col-md-12 col-lg-3">
                    <ul style={{ listStyleType: "none", margin: "0px", padding: "0px", cursor: "pointer" }}>
                      {titleContentList.map(({ title }, index) => (
                        <li
                          key={index}
                          style={ { 
                            padding: "15px", 
                            ...(selected === index ? { backgroundColor: "lightgray" } : {}) }
                          }
                          onClick={() => this.select(index)}
                        >
                          {t(title)}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-md-12 col-lg-9">
                    <br/>
                    <Content>
                      { renderer ? t(renderer.content) : "" }
                    </Content>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Translation>
    );
  }
}
