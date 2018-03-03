import axios from 'axios';
import { browserHistory } from 'react-router';
import {POST_TODO, FETCH_POSTS, FETCH_POST, ROOT_URL, DELETE_POST} from './types';

export function postTodo(values) {
  return function(dispatch, getState) {
  const email = getState().auth.email;
  const postValues = {...values, email}

  axios.post(`${ROOT_URL}/newpost`, postValues)
    .then(response => {

    });

    return {
      type: POST_TODO,
      payload: request
    };
          // this.props.history.push('/display');
  }
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

export function deletePost(id) {
  return function(dispatch) {
    axios.delete(`${ROOT_URL}/todos/${id}`)
    .then(response => {
      dispatch({
        type:DELETE_POST,
        payload: response.data
      });
    });
  }
}
