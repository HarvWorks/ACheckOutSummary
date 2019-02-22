import React, { SFC } from "react";
import { Text } from "react-native";

import styles from "./styles";
import i18n from "../../../../i18n";
import CheckoutCells from "../common/CheckoutCells";
import TwoColumnRow from "../../common/TwoColumnRow";
import BoldText from "../../common/BoldText";

interface IProps {
  dollarSymbol: string;
  totalPrice: string;
}

const CheckoutThirdCell: SFC<IProps> = props => {
  const { dollarSymbol, totalPrice } = props
  const { checkoutPrice, checkoutPriceDesc } = styles
  return (
    <CheckoutCells>
      <TwoColumnRow 
        left= {<BoldText style={checkoutPriceDesc}>{i18n.t("Checkout.total")}</BoldText>}
        right={<BoldText style={checkoutPrice}>{`${dollarSymbol} ${totalPrice}`}</BoldText>}
      />
    </CheckoutCells>
    
  );
};

export default CheckoutThirdCell;
