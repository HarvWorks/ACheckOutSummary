/**
 * This is where the actual logic for checkout lives
 */

import React, { Component } from 'react';
import {Text, View, SafeAreaView} from 'react-native';

import { connect } from "react-redux";

import { ICheckoutReducer } from '../../store/reducers';
import { getCheckoutInfo } from '../../store/selectors/getCheckout';
import { initalizeItems, applyCouponCode, togglePickup } from '../../store/actions/CheckoutActions';

import CheckoutComponent from "../../components/Checkout/common/Checkout"
import CheckoutCells from '../../components/Checkout/common/CheckoutCells';
import CheckoutFirstCell from '../../components/Checkout/FirstCell/CheckoutFirstCell';
import CheckoutSecondCell from '../../components/Checkout/SecondCell/CheckoutSecondCell';
import CheckoutThirdCell from '../../components/Checkout/ThirdCell/CheckoutThirdCell';
import CheckoutFourthCell from '../../components/Checkout/ForthCell/CheckoutFourthCell';

type IProps = {
  checkoutInfo: ICheckoutReducer
};

const mapStateToProps = (state: any) => ({
  checkoutInfo: getCheckoutInfo(state)
});

const mapDispatchToProps = (dispatch: any) => ({
  initalizeItems: () => initalizeItems()(dispatch),
  applyCouponCode: (code: string) => applyCouponCode(code)(dispatch),
  togglePickup: () => togglePickup()(dispatch)
});

class Checkout extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
    initalizeItems();
  }
  
  render() {
    return (
      <SafeAreaView>
        <CheckoutComponent>
          <CheckoutFirstCell/>
          <CheckoutSecondCell/>
          <CheckoutThirdCell/>
          <CheckoutFourthCell/>
        </CheckoutComponent>
      </SafeAreaView>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);