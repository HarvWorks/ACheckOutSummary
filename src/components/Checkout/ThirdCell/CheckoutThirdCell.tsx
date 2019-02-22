import React, { SFC, PureComponent } from "react";
import { Text } from "react-native";

import styles from "./styles";
import i18n from "../../../../i18n";
import CheckoutCells from "../common/CheckoutCells";
import TwoColumnRow from "../../common/TwoColumnRow";
import BoldText from "../../common/BoldText";
import Expander from "../common/Expander";

interface IProps {
  dollarSymbol: String;
  totalPrice: String;
}

class CheckoutThirdCell extends PureComponent<IProps> {
  render() {
    const { dollarSymbol = "", totalPrice = "" } = this.props
    const { checkoutPrice, checkoutPriceDesc } = styles
    return (
      <CheckoutCells>
        <TwoColumnRow 
          left= {<BoldText style={checkoutPriceDesc}>{i18n.t("Checkout.total")}</BoldText>}
          right={<BoldText style={checkoutPrice}>{`${dollarSymbol} ${totalPrice}`}</BoldText>}
        />
        <Expander 
          openText={i18n.t("Checkout.seeDetails")} 
          closeText={i18n.t("Checkout.hideDetails")}
        >
        </Expander>
      </CheckoutCells>
    );
  }
};

export default CheckoutThirdCell;
