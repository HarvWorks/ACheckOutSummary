import { checkoutActionTypes } from "../actions/actionTypes";

import { IAction } from "../../types/common";
import { IItem } from "../../types/checkout";

const { APPLY_COUPON_CODE } = checkoutActionTypes;

export interface ICheckoutPricing {
  tax: number;
  subTotalPrice: number;
  pickupSavings: number;
  promoPercentage: number;
  promoDollar: number;
  totalPrice: number;
}

export interface ICheckoutReducer extends ICheckoutPricing {
  items: [IItem?];
  promoCode: string;
}

export const initialState = {
  items: [],
  promoCode: "",
  tax: 0,
  subTotalPrice: 0,
  pickupSavings: 0,
  promoPercentage: 0,
  promoDollar: 0,
  totalPrice: 0
  
} as ICheckoutReducer;

const applyCouponCode = (state: ICheckoutReducer, action: IAction) => {
  const subTotal = calculateSubTotal(state.items)
};

const calculateSubTotal = (items: [IItem?]) => {
  let result = 0;
  items.map(item => {
    result += item.unitPrice
  })
  return result
}

const calculateTotal = (state: ICheckoutReducer) => {

}

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
