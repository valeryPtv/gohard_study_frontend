// Types
import * as types from './types';

const initialState = [];

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_TODOS:
      return action.payload;

    case types.SET_TODO:
      return [action.payload, ...state];

    case types.UPDATE_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return action.payload;
        }

        return todo;
      });

    case types.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
};
