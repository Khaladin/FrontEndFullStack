import axios from 'axios';
import { browserHistory } from 'react-router';
import {AUTH_USER, AUTH_ERROR, UNAUTH_USER, FETCH_MESSAGE, ROOT_URL} from './types';

function setAuthUser(userName) {
  return {
    type: AUTH_USER,
    payload: userName,
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function signoutUser() {
  localStorage.removeItem('token');
  return {
    type: UNAUTH_USER
  }
}

export function signinUser({email, password}) {
  return function(dispatch) {
    // Submit email/password to the server
    axios.post(`${ROOT_URL}/signin`, {email, password})
      .then(response => {
        // If request is good...
        // -update state to indicate user is authenticated
        dispatch(setAuthUser(response.data.userName));
        // - save the JWT token
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('email', response.data.userName);
        // - redirect to the route '/feature'
        browserHistory.push('/display');
      })
      .catch((err) => {
        //If request is bad...
        // - Show an error to the user
        console.warn(err);
        dispatch(authError('Bad Login Info'));
      });
  }
}

export function signupUser({email, password}) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signup`, {email, password})
      .then(response => {
        dispatch(setAuthUser(response.data.userName));
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/display');
      })
      .catch(error => dispatch(authError(error.response.data.error)));
  }
}

export function fetchMessage() {
  return function(dispatch) {
    axios.get(ROOT_URL, {
      headers: { authorization: localStorage.getItem('token')}
    })
      .then(response => {
        dispatch({
          type: FETCH_MESSAGE,
          payload: response.data.message
        });
      });
  }
}
