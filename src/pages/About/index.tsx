import * as React from "react";
import Base from "app/pages/Base";
import about from "app/data/about.md";
import Content from "app/components/Content";

export default () => (
  <Base>
    <Content>
      { about }
    </Content>
  </Base>
);