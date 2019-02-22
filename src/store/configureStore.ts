import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

import thunk from 'redux-thunk';

import { CheckoutReducer } from './reducers';

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

const rootReducer = combineReducers({
  CheckoutReducer: CheckoutReducer
});

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
  ));
};

export default configureStore;
