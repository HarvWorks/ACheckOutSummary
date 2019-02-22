import { reducers } from "../../settings";
import { contactsActionTypes } from "../actions/actionTypes";

const { FETCH_CONTACTS } = contactsActionTypes;

const reducerName = reducers.CheckoutReducer;

export interface ICheckoutReducer {
  items: [Item?];
  promoCode: string;

}

export const initialState = {
  items: [],
  promoCode: "",
  
} as ICheckoutReducer;

const applyCouponCode = (state: ICheckoutReducer, action: IAction) => {

};

const getReducer = (
  type: string
): ((state: ICheckoutReducer, action: IAction) => any) => {
  const reducers = {
    [FETCH_CONTACTS]: applyCouponCode
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

reducerRegistry.register(reducerName, CheckoutReducer);

export default CheckoutReducer;
