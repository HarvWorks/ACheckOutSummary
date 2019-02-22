import { StyleSheet } from "react-native";

import commonColor from "../../constants/commonColor";
import platform from "../../../../native-base-theme/variables/platform";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: commonColor.white,
    padding: 20,
    borderRadius: 10,
    borderColor: commonColor.lightGrey,
    elevation: 1,
    shadowColor: commonColor.black,
    shadowOpacity: 0.5,
    shadowRadius: 1
  }
});

export default styles;
