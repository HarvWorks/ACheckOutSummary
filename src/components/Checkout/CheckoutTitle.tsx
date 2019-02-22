import React, { SFC } from "react";
import { Text } from "react-native";

import styles from "./styles";
import i18n from "../../../i18n";

const CheckoutTitle: SFC = props => {
  const { checkoutTitle } = styles
  return (
    <Text style={checkoutTitle}>{i18n.t("Checkout.checkout")}</Text>
  );
};

export default CheckoutTitle;
