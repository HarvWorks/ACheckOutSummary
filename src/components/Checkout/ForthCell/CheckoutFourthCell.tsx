import React, { SFC } from "react";
import { Text } from "react-native";

import styles from "../common/styles";
import i18n from "../../../../i18n";
import CheckoutCells from "../common/CheckoutCells";

const CheckoutFourthCell: SFC = props => {
  const { checkoutTitle } = styles
  return (
    <CheckoutCells isBottom>
      <Text style={checkoutTitle}>{i18n.t("Checkout.checkout")}</Text>
    </CheckoutCells>
    
  );
};

export default CheckoutFourthCell;
