import axios from 'axios';
import { browserHistory } from 'react-router';
import {POST_TODO, FETCH_POST, ROOT_URL} from './types';

export function postTodo(values, callback) {
  const request = axios.post(`${ROOT_URL}/newpost`, values)
    .then(() => callback());

    return {
      type: POST_TODO,
      payload: request
    };
}

export function fetchPost() {
  return function(dispatch) {
  axios.get(`${ROOT_URL}/todos`)
    .then(response => {
      dispatch({
        type: FETCH_POST,
        payload: response.data.todos
      });
    });
  }
}
