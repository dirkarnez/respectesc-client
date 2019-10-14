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