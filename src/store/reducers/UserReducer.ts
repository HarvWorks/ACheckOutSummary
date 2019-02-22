import { userActionTypes } from "../actions";

import { IAction } from "../../../types/common";


const { 
  ITITALIZE_USER,
} = userActionTypes;

export interface IUserReducer {
  dollarSymbol: String;
}

export const initialState = {
  dollarSymbol: "",  
} as IUserReducer;


const initalizeUser = (state: IUserReducer, action: IAction) => {
  const dollarSymbols = ["$", "CA$", "€"];
  const index = Math.floor(Math.random() * dollarSymbols.length)
  const newDollarSymbol = dollarSymbols[index];

  const nextState: IUserReducer = {
    ...state,
    dollarSymbol: newDollarSymbol
  }

  return nextState
}

const getReducer = (
  type: string
): ((state: IUserReducer, action: IAction) => any) => {
  const reducers = {
    [ITITALIZE_USER]: initalizeUser
  };
  return reducers[type];
};

const UserReducer = (
  state: IUserReducer = initialState,
  action: { type: string; payload: any }
) => {
  const reducer = getReducer(action.type);

  return reducer ? reducer(state, action) : state;
};

export default UserReducer;
