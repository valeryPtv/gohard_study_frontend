// Instruments
import * as types from './types';

export const setTodosAction = (payload) => ({
  type: types.SET_TODOS,
  payload,
});

export const setTodoAction = (payload) => ({
  type: types.SET_TODO,
  payload,
});

export const updateTodoAction = (payload) => ({
  type: types.UPDATE_TODO,
  payload,
});

export const deleteTodoAction = (payload) => ({
  type: types.DELETE_TODO,
  payload,
});
