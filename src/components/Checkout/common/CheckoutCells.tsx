import React, { PureComponent } from "react";
import { View } from "react-native";

import styles from "./styles";

interface IProps {
  isBottom?: Boolean;
}

class CheckoutCells extends PureComponent<IProps> {
  render() {
    const { children, isBottom } = this.props
    const { cells, cellsDivider } = styles;
    let cellStyles = [];

    cellStyles.push(cells);

    if (!isBottom) {
      cellStyles.push(cellsDivider);
    }

    return (
      <View style={cellStyles}>{children}</View>
    );
  }
};

export default CheckoutCells;
