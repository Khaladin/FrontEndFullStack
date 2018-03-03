import _ from 'lodash';
import {AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_MESSAGE} from '../actions/types'

const initialState = {
  authenticated: false,
  error: null,
  message: '',
  post: [],
  email: null,
}

export default function(state = initialState, action) {
  switch(action.type) {
    case AUTH_USER:
      return { ...state, error: '', authenticated: true, email: action.payload }; // add state in here to add username?
    case UNAUTH_USER:
      return { ...state, authenticated: false, email: null };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
  }

  return state;
}
