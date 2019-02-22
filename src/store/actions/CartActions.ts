import { cartActionTypes } from "./actionTypes";
import { IItem } from "../../types/checkout";

const {
  ADD_ITEM,
  REMOVE_ITEM,
  ITITALIZE_ITEMS,
} = cartActionTypes;

const addItemAction = (item: IItem) => ({
  type: ADD_ITEM,
  payload: {
    item
  }
})

const removeItemAction = (index: number) => ({
  type: REMOVE_ITEM,
  payload: {
    index
  }
})

const ititalizeItemsAction = () => ({
  type: ITITALIZE_ITEMS
})

export const addItem = (item: IItem) => (dispatch: any) => {
  dispatch(addItemAction(item));
}

export const removeItem = (index: number) => (dispatch: any) => {
  dispatch(removeItemAction(index));
}

export const ititalizeItems = () => (dispatch: any) => {
  dispatch(ititalizeItemsAction());
}
