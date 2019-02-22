import React, { SFC } from "react";
import { View } from "react-native";

import i18n from "../../../../i18n";
import CheckoutCells from "../common/CheckoutCells";
import TwoColumnRow from "../../common/TwoColumnRow";
import StylizedText from "../../common/StyledText";
import BoldText from "../../common/BoldText";

import styles from "./styles";

interface IProps {
  dollarSymbol: String;
  subtotalPrice: String;
  pickupSavings: String;
  taxes: String;
  zipCode: String;
}

const CheckoutSecondCell: SFC<IProps> = props => {
  const { 
    dollarSymbol = "",  
    subtotalPrice = "", 
    pickupSavings = "", 
    taxes = "",  
    zipCode = "Zip"
  } = props
  const { red } = styles

  let savingsText;

  if (!pickupSavings || pickupSavings.substring(0,1) === "0") {
    savingsText = <BoldText style={red}>{`-${dollarSymbol} ${subtotalPrice}`}</BoldText>;
  } else {
    savingsText = <BoldText>{`${dollarSymbol} ${subtotalPrice}`}</BoldText>;
  } 

  const taxesText = (
    <View>
      <StylizedText>{i18n.t("Checkout.taxes")}</StylizedText>
      <StylizedText>{`(${i18n.t("Checkout.taxBased")} ${zipCode})`}</StylizedText>
    </View>
  )

  return (
    <CheckoutCells>
      <TwoColumnRow 
        left= {<StylizedText>{i18n.t("Checkout.subtotal")}</StylizedText>}
        right={<BoldText>{`${dollarSymbol} ${subtotalPrice}`}</BoldText>}
      />
      <TwoColumnRow 
        left= {<StylizedText>{i18n.t("Checkout.pickupSavings")}</StylizedText>}
        right={savingsText}
      />
      <TwoColumnRow 
        left= {taxesText}
        right={<BoldText>{dollarSymbol} {taxes}</BoldText>}
      />
    </CheckoutCells>
    
  );
};

export default CheckoutSecondCell;
