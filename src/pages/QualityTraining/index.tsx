import * as React from "react";
import Base from "app/pages/Base";
import Content from "app/components/Content";
import { Translation } from 'react-i18next';

export default () => (
  <Translation>
    {t => (
      <Base>
        <Content>
          { t("quality_training") }
        </Content>
      </Base>
    )}
  </Translation>
);