import axios from 'axios';
import { browserHistory } from 'react-router';
import {POST_TODO, FETCH_POSTS, FETCH_POST, ROOT_URL} from './types';

export function postTodo(values, callback) {
  const request = axios.post(`${ROOT_URL}/newpost`, values)
    .then(() => callback());

    return {
      type: POST_TODO,
      payload: request
    };
}

export function fetchPosts() {
  return function(dispatch) {
  axios.get(`${ROOT_URL}/todos`)
    .then(response => {
      dispatch({
        type: FETCH_POSTS,
        payload: response.data.todos
      });
    });
  }
}

export function fetchPost(id) {
  return function(dispatch) {
    axios.get(`${ROOT_URL}/todos/${id}`)
    .then(response => {
        dispatch({
          type:FETCH_POST,
          payload: response.data.todo
        });
      });
  }
}

export function deletePost() {
  return function(dispatch) {
    axios.delete(`${ROOT_URL}/todos/:id`)
    .then(response => {
      dispatch({
        type:DELETE_POST,
        payload:response.data.todo
      });
    });
  }
}
