import { createStore, applyMiddleware, compose } from 'redux';
import {persistState} from 'redux-devtools';

export default (initialState, reducers, baseline_middlewares) => {

  const enhancer = compose(
    applyMiddleware(...baseline_middlewares),
    persistState(getDebugSessionKey()),

    window.devToolsExtension ? window.devToolsExtension() : f => f
  );

  const store = createStore(reducers, initialState, enhancer);

  return store;

}

function getDebugSessionKey() {
  const matches = window.location.href.match(/[?&]debug_session=[^&]+\b/);
  return (matches && matches.length > 0) ? matches[1] : null;
}
