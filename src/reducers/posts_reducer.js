import {POST_TODO, FETCH_POST} from '../actions/types'

const initialState = {
  activePosts: [],
}

export default function(state = initialState, action) {
  switch(action.type) {
    case POST_TODO:
      return {...state}
      case FETCH_POST:
        return {...state, activePosts: action.payload};
  }

  return state;
}
