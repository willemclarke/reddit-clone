import React from "react";
import * as _ from "lodash";

import { Icon } from "antd";

export const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);
