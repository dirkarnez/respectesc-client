import * as React from "react";
import Base from "app/pages/Base";
import faq from "app/data/faq.md";
import Content from "app/components/Content";

export default () => (
  <Base>
    <Content>
      { faq }
    </Content>
  </Base>
);