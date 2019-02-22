import { reducers } from "../../settings";
import { checkoutActionTypes } from "../actions/actionTypes";

import { IAction } from "../../types/common";
import { IItem } from "../../types/checkout";

const { APPLY_COUPON_CODE } = checkoutActionTypes;

const reducerName = reducers.CheckoutReducer;

export interface ICheckoutReducer {
  items: [IItem?];
  promoCode: string;
  tax: number;
  subTotalPrice: number;
  pickupSavings: number;
  promocode: string;
  promoPercentage: number;
  promoDollar: number;
}

export const initialState = {
  items: [],
  promoCode: "",
  tax: 0,
  subTotalPrice: 0,
  pickupSavings: 0,
  promocode: "",
  promoPercentage: 0,
  promoDollar: 0
  
} as ICheckoutReducer;

const applyCouponCode = (state: ICheckoutReducer, action: IAction) => {

};

const getReducer = (
  type: string
): ((state: ICheckoutReducer, action: IAction) => any) => {
  const reducers = {
    [APPLY_COUPON_CODE]: applyCouponCode
  };
  return reducers[type];
};

const CheckoutReducer = (
  state: ICheckoutReducer = initialState,
  action: { type: string; payload: any }
) => {
  const reducer = getReducer(action.type);

  return reducer ? reducer(state, action) : state;
};

export default CheckoutReducer;
