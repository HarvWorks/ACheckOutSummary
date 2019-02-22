import { StyleSheet } from "react-native";

import commonColor from "../../../constants/commonColor";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: 50,
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
  }
});

export default styles;
