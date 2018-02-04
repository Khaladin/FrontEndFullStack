import _ from 'lodash';
import {AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_MESSAGE, POST_TODO, FETCH_POST} from '../actions/types'

const initialState = {
  authenticated: false,
  error: null,
  message: '',
  post: [],
}

export default function(state = initialState, action) {
  switch(action.type) {
    case AUTH_USER:
      return { ...state, error: '', authenticated: true };
    case UNAUTH_USER:
      return { ...state, authenticated: false };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    case FETCH_MESSAGE:
      return {...state, message: action.payload};
    case POST_TODO:
      return {...state}
      case FETCH_POST:
        return {...state, post: action.payload};
  }

  return state;
}
