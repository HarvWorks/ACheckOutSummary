import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

import thunk from 'redux-thunk';

import checkout from './reducers/CheckoutReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  checkout: checkout,
});

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
  ));
};

export default configureStore;
