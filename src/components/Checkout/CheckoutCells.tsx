import React, { SFC } from "react";
import { View } from "react-native";

import styles from "./styles";

interface IProps {
  isBottom?: Boolean;
}

const CheckoutCells: SFC<IProps> = props => {
  const { children, isBottom } = props
  const { cells, cellsDivider } = styles;
  let cellStyles = [];

  cellStyles.push(cells);

  if (!isBottom) {
    cellStyles.push(cellsDivider);
  }

  return (
    <View style={cellStyles}>{children}</View>
  );
};

export default CheckoutCells;
