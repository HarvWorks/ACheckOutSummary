import { StyleSheet } from "react-native";

import commonColor from "../../../constants/commonColor";

const buttonHeight = 25

const styles = StyleSheet.create({
  scrollViewContainer: {
    height: "100%",
  },
  container: {
    flexDirection: "row",
    paddingVertical: 50,
  },
  spacers: {
    flex: 0.1,
  },
  shadowContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: commonColor.white,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
    borderColor: commonColor.grey,
    elevation: 1,
    shadowColor: commonColor.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    flex: 1,
    maxWidth: 250
  },
  cells: {
    paddingVertical: 15,
    width: "100%"
  },
  cellsDivider: {
    borderBottomColor: commonColor.grey,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  expanderStyles: {
    paddingVertical: 10
  },
  underlined: {
    textDecorationLine: "underline"
  },
  roundedButton: {
    borderColor: commonColor.black,
    borderRadius: buttonHeight / 2,
    height: buttonHeight
  },
  buttonText: {
    fontSize: 15
  },
  expanderInnerContainer: {
    paddingTop: 15
  },
  imageStyle: {
    width: 50,
    height: 50
  },
  checkoutItemSpacing: {
    marginTop: 15
  },
  rightStyle: {
    flex: 1,
    paddingLeft: 15
  },
  itemPaddingTop: {
    paddingTop: 10
  },
  tooltipStyle: {
    borderRadius: 5,
    borderColor: commonColor.grey,
    elevation: 1,
    shadowColor: commonColor.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    width: 150,
    backgroundColor: commonColor.white,
  }
});

export default styles;
