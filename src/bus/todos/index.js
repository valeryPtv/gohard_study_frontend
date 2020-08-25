// Core
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Redux
import { useSelectorUi } from '../ui';
import { useTogglers } from '../togglers';

// Api
import {
  getTodosAsync, createTodoAsync, updateTodoAsync, deleteTodoAsync,
} from './api';

// Actions
import {
  setTodosAction, setTodoAction, updateTodoAction, deleteTodoAction,
} from './actions';

const useSelectorTodos = () => useSelector(({ todos }) => todos);

export const useTodosQuery = () => {
  const dispatch = useDispatch();
  const { togglers, setTogglerAction } = useTogglers();
  const { isOnline } = useSelectorUi();

  useEffect(() => {
    if (isOnline) {
      getTodosAsync({
        setTodos: (todos) => void dispatch(setTodosAction(todos)),
        loadingAction: (value) => void setTogglerAction({ type: 'isTodosLoading', value }),
      });
    }
  }, [isOnline]);  // eslint-disable-line

  return {
    data: useSelectorTodos(),
    loading: togglers.isTodosLoading,
  };
};

export const useTodosMutations = () => {
  const dispatch = useDispatch();
  const { togglers, setTogglerAction } = useTogglers();
  const { isOnline } = useSelectorUi();
  const loadingAction = (value) => void setTogglerAction({ type: 'isTodosLoading', value });

  const createMutation = async (body) => isOnline && void createTodoAsync({
    body,
    setTodo: (newTodo) => void dispatch(setTodoAction(newTodo)),
    loadingAction,
  });

  const updateMutation = async (body, todoId) => isOnline && void updateTodoAsync({
    todoId,
    body,
    updateTodo: (newTodo) => void dispatch(updateTodoAction(newTodo)),
    loadingAction,
  });

  const deleteMutation = async (todoId) => isOnline && void deleteTodoAsync({
    todoId,
    deleteTodo: (newTodo) => void dispatch(deleteTodoAction(newTodo)),
    loadingAction,
  });

  return {
    createMutation,
    updateMutation,
    deleteMutation,
    loading: togglers.isTodosLoading,
  };
};
