import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import promise from 'redux-promise';
import reducers from '../reducers';

export default (initialState = {}) => {
  const baseline_middlewares = [reduxThunk, promise];


  if (process.env.NODE_ENV !== 'production') {
    const dev_store = require('./dev.store');
    return dev_store.default(initialState, reducers, baseline_middlewares);
  };
  return createStore(reducers, initialState, compose(applyMiddleware(...baseline_middlewares))) ;


}
