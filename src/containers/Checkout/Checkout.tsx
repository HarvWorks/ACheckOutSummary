/**
 * This is where the actual logic for checkout lives
 */

import React, { Component } from 'react';
import {Text, View} from 'react-native';

import { connect } from "react-redux";

type ICheckoutProps = {};

const mapStateToProps = (state: any) => ({
  popups: getPopups(state)
});

const mapDispatchToProps = (dispatch: any) => ({
  storeTempNumber: (tempNumber: string) => storeTempNumber(tempNumber)(dispatch)
});

class Checkout extends Component<ICheckoutProps> {
  constructor(props: ICheckoutProps) {
    super(props);
  }
  render() {
    return (
      <View>
        <Text>This is Checkout</Text>
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);