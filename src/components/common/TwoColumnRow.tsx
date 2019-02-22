import React, { SFC } from "react";
import { View } from "react-native";

import styles from "./styles";

interface IProps {
  left?: any;
  right?: any;
}

const TwoColumnRow: SFC<IProps> = props => {
  const { left, right } = props
  const { rowPricing } = styles;

  return (
    <View style={rowPricing}>
      {left}
      {right}
    </View>
  );
};

export default TwoColumnRow;
