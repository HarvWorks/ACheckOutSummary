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
  const { imageStyle, checkoutItemSpacing, rightStyle, itemPaddingTop } = styles

  let dynamicStyling;

  if (!first) dynamicStyling = checkoutItemSpacing

  const left = (
    <Image 
      style={imageStyle}
      source={picture}
    />
  )

  const right = (
    <View style={rightStyle}>
      <StylizedText>{title}</StylizedText>
      <TwoColumnRow style={itemPaddingTop}
        left= {<BoldText>{`${dollarSymbol} ${unitPrice}`}</BoldText>}
        right={<StylizedText>{`${i18n.t("Checkout.quanity")}:${quanity}`}</StylizedText>}
      />
    </View>
  )

  return (
    <TwoColumnRow style={dynamicStyling} left= {left} right={right}/>
    
  );
};

export default CheckoutItem;
