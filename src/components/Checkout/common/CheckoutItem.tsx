import React, { SFC } from "react";
import { View, Image } from "react-native";

import styles from "./styles";
import { IItem } from "../../../../types/checkout";
import BoldText from "../../common/BoldText";
import TwoColumnRow from "../../common/TwoColumnRow";
import StylizedText from "../../common/StyledText";
import i18n from "../../../../i18n";

interface IProps {
  item: IItem;
  dollarSymbol: String,
  first: boolean
}

const CheckoutItem: SFC<IProps> = props => {
  const { dollarSymbol, item, first } = props;
  const { 
    unitPrice,
    title,
    quanity,
    picture
  } = item;
  const { imageStyle, checkoutItemSpacing } = styles

  let dynamicStyling;

  if (!first) dynamicStyling = checkoutItemSpacing

  const left = (
    <Image 
      style={imageStyle}
      source={require(`../../../static/productImages/${picture}`)}
    />
  )

  const right = (
    <>
      <StylizedText>{title}</StylizedText>
      <TwoColumnRow>
        <BoldText>{`${dollarSymbol} ${unitPrice}`}</BoldText>
        <StylizedText>{`${i18n.t("Checkout.quanity")}:${quanity}`}</StylizedText>
      </TwoColumnRow>
    </>
  )

  return (
    <TwoColumnRow style={dynamicStyling} left= {left} right={right}/>
    
  );
};

export default CheckoutItem;
