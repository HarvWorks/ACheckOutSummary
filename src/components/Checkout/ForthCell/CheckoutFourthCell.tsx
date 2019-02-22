import React, { PureComponent } from "react";

import i18n from "../../../../i18n";
import CheckoutCells from "../common/CheckoutCells";
import Expander from "../common/Expander";

class CheckoutFourthCell extends PureComponent {
  render() {
    return (
      <CheckoutCells isBottom>
        <Expander 
          openText={i18n.t("Checkout.seeDetails")} 
          closeText={i18n.t("Checkout.hideDetails")}
        >
        </Expander>
      </CheckoutCells>
      
    );
  }
};

export default CheckoutFourthCell;
