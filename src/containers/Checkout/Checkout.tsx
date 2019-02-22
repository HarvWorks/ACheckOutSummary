/**
 * This is where the actual logic for checkout lives
 */

import React, { Component } from 'react';
import {Text, View, SafeAreaView} from 'react-native';

import { connect } from "react-redux";

import { ICheckoutReducer } from '../../store/reducers';
import { getCheckoutInfo } from '../../store/selectors';
import { initalizeItems, applyCouponCode, togglePickup } from '../../store/actions/CheckoutActions';

import CheckoutComponent from "../../components/Checkout/Checkout"
import CheckoutCells from '../../components/Checkout/CheckoutCells';
import CheckoutTitle from '../../components/Checkout/CheckoutTitle';

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
          <CheckoutCells>
            <CheckoutTitle/>
          </CheckoutCells>
          <CheckoutCells>
            <Text style={{color: "black"}}>HIIIIIIIdsjfkajdsjfkdskjajfkdjsjkfakjjsad</Text>
          </CheckoutCells>
          <CheckoutCells>
            <Text style={{color: "black"}}>HIIIIIIIdsjfkajdsjfkdskjajfkdjsjkfakjjsad</Text>
          </CheckoutCells>
          <CheckoutCells isBottom>
            <Text style={{color: "black"}}>HIIIIIIIdsjfkajdsjfkdskjajfkdjsjkfakjjsad</Text>
          </CheckoutCells>
        </CheckoutComponent>
      </SafeAreaView>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);