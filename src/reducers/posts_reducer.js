import {POST_TODO, FETCH_POSTS, FETCH_POST} from '../actions/types'
import _ from 'lodash';

const initialState = {
  activePosts: [],
}

export default function(state = initialState, action) {
  switch(action.type) {
    case POST_TODO:
      return {...state}
      case FETCH_POSTS:
        return {...state, activePosts: action.payload};
      case FETCH_POST:
        return {...state, activePost: action.payload};
  }

  return state;
}
