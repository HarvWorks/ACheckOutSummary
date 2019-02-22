import { checkoutActionTypes } from "./actionTypes";

const {
  APPLY_COUPON_CODE,
  TOGGLE_PICKUP
} = checkoutActionTypes;

const applyCouponCodeAction = (couponCode: string) => ({
  type: APPLY_COUPON_CODE,
  payload: {
    couponCode
  }
})

const togglePickupAction = () => ({
  type: TOGGLE_PICKUP
})

export const applyCouponCode = (couponCode: string) => (dispatch: any) => {
  dispatch(applyCouponCodeAction(couponCode));
}

export const togglePickup = () => (dispatch: any) => {
  dispatch(togglePickupAction());
}
