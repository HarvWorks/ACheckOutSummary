import React, { SFC } from "react";
import { View } from "react-native";

import styles from "./styles";

const CheckoutComponent: SFC = props => {
  const { children } = props
  const { container } = styles
  return <View style={container}>{children}</View>;
};

export default CheckoutComponent;
