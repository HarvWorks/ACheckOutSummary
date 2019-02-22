import { checkoutActionTypes } from "../actions/actionTypes";

import { IAction } from "../../types/common";
import { IItem } from "../../types/checkout";
import { couponDiscounts } from "../../constants/couponCodes"

const { APPLY_COUPON_CODE } = checkoutActionTypes;

export interface ICheckoutPricing {
  tax: number;
  subTotalPrice: number;
  pickupSavings: number;
  couponPercentage: number;
  couponDollar: number;
  totalPrice: number;
}

export interface ICheckoutReducer extends ICheckoutPricing {
  items: [IItem?];
  couponCode: string;
  badCouponCode: boolean
}

export const initialState = {
  items: [],
  couponCode: "",
  tax: 0,
  subTotalPrice: 0,
  pickupSavings: 0,
  couponPercentage: 0,
  couponDollar: 0,
  totalPrice: 0,
  badCouponCode: false
  
} as ICheckoutReducer;

/**
 * Function for applying the coupon code in the reducer.  Looks up the code
 * @param state 
 * @param action 
 */
const applyCouponCode = (state: ICheckoutReducer, action: IAction) => {
  const couponCode = action.payload.couponCode.toLowerCase();

  const discount = couponDiscounts[couponCode]
  let couponPercentage = 0;
  let couponDollar = 0;

  if (discount) {
    couponPercentage = discount[couponPercentage] ? discount[couponPercentage] : 0;
    couponDollar = discount[couponDollar] ? discount[couponDollar] : 0;
  }

  const nextState = {
    ...state,
    subTotalPrice: calculateSubTotal(state.items),
    couponCode: couponCode,
    couponPercentage: couponPercentage,
    couponDollar: couponDollar,
    totalPrice: state.totalPrice
  }

  nextState.totalPrice = calculateTotal(nextState);

  return nextState
};

/**
 * Helper function for calculating the subTotal
 * @param items of type IItem
 */
const calculateSubTotal = (items: [IItem?]) => {
  let result = 0;
  items.map(item => {
    result += item.unitPrice
  })
  return result
}

/**
 * Helper function for calculating the total price
 * @param state 
 */
const calculateTotal = (state: ICheckoutPricing) => {
  const { tax, subTotalPrice, pickupSavings, couponDollar, couponPercentage } = state;

  const totalPrice = (subTotalPrice - pickupSavings - couponDollar) * 
    ( 1 - couponPercentage) * ( 1 + tax)

  return totalPrice
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
