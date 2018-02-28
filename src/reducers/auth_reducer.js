import _ from 'lodash';
import {AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_MESSAGE} from '../actions/types'

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
  }

  return state;
}
