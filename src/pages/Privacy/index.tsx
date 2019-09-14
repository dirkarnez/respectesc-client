import * as React from "react";
import Base from "app/pages/Base";
import privacy from "app/data/privacy.md";
import Content from "app/components/Content";

export default () => (
  <Base>
    <Content>
      { privacy }
    </Content>
  </Base>
);