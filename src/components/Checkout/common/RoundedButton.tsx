import React, { SFC } from "react";

import styles from "./styles";
import i18n from "../../../../i18n";
import CheckoutCells from "../common/CheckoutCells";
import BoldText from "../../common/BoldText";
import { TouchableOpacity } from "react-native";

interface IProps {
  onPress: () => void;
  text: String;
}

const RoundedButton: SFC<IProps> = props => {
  const { onPress, text } = props
  const { roundedButton, buttonText } = styles
  return (
    <TouchableOpacity onPress={onPress} style={roundedButton}>
      <BoldText style={buttonText}>{text}</BoldText>
    </TouchableOpacity>
  );
};

export default RoundedButton;
