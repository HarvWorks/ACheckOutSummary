/**
 * This is where the actual logic for checkout lives
 */

import React, { Component } from 'react';
import {Text, View, SafeAreaView} from 'react-native';

import { connect } from "react-redux";

import { ICheckoutReducer, IUserReducer } from '../../store/reducers';
import { getCheckoutInfo } from '../../store/selectors/getCheckout';
import { getUserInfo } from '../../store/selectors/getUser';
import { initalizeItems, initalizeUser, applyCouponCode, togglePickup } from '../../store/actions';

import CheckoutComponent from "../../components/Checkout/common/Checkout"
import CheckoutCells from '../../components/Checkout/common/CheckoutCells';
import CheckoutFirstCell from '../../components/Checkout/FirstCell/CheckoutFirstCell';
import CheckoutSecondCell from '../../components/Checkout/SecondCell/CheckoutSecondCell';
import CheckoutThirdCell from '../../components/Checkout/ThirdCell/CheckoutThirdCell';
import CheckoutFourthCell from '../../components/Checkout/ForthCell/CheckoutFourthCell';

type IProps = {
  checkoutInfo: ICheckoutReducer,
  userInfo: IUserReducer,
  initalizeItems: () => void,
  initalizeUser: () => void,
  applyCouponCode: (code: string) => void,
  togglePickup: () => void,
};

const mapStateToProps = (state: any) => ({
  checkoutInfo: getCheckoutInfo(state),
  userInfo: getUserInfo(state)
});

const mapDispatchToProps = (dispatch: any) => ({
  initalizeItems: () => initalizeItems()(dispatch),
  initalizeUser: () => initalizeUser()(dispatch),
  applyCouponCode: (code: string) => applyCouponCode(code)(dispatch),
  togglePickup: () => togglePickup()(dispatch)
});

class Checkout extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
    props.initalizeItems();
    props.initalizeUser();
  }
  
  render() {
    const {checkoutInfo, userInfo} = this.props
    return (
      <SafeAreaView>
        <CheckoutComponent>
          <CheckoutFirstCell/>
          <CheckoutSecondCell
            dollarSymbol={userInfo.dollarSymbol}
          />
          <CheckoutThirdCell
            dollarSymbol={userInfo.dollarSymbol}
          />
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