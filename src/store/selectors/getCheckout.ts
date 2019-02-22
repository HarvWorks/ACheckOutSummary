import { createSelector } from "reselect";

import { ICheckoutReducer } from "../reducers";
import IState from "../../../types/common/IState";

const reducerName = "CheckoutReducer";

const getCheckoutReducerSelector = (state: IState) => state[reducerName];

export const getCheckoutInfo = createSelector(
  [getCheckoutReducerSelector],
  (CheckoutReducer: ICheckoutReducer) => CheckoutReducer
);
