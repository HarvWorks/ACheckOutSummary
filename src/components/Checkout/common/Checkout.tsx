import React, { SFC } from "react";
import { View } from "react-native";

import styles from "./styles";

const CheckoutComponent: SFC = props => {
  const { children } = props
  const { container, shadowContainer, spacers } = styles
  return (
    <View style={container}>
      <View style={spacers}/>
      <View style={shadowContainer}>{children}</View>
      <View style={spacers}/>
    </View>
  );
};

export default CheckoutComponent;
