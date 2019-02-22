import { checkoutActionTypes } from "./actionTypes";

const {
  APPLY_COUPON_CODE
} = checkoutActionTypes;

const applyCouponCodeAction = (couponCode: string) => ({
  type: APPLY_COUPON_CODE,
  payload: {
    couponCode
  }
})

export const applyCouponCode = (couponCode: string) => (dispatch: any) => {
  dispatch(applyCouponCodeAction(couponCode));
}