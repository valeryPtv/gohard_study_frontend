import { queryCache, useQuery, useMutation } from 'react-query';
import { useTogglers } from '../togglers';
import { useSelectorUi } from '../ui';
import {
  getTodosAsync, createTodoAsync, deleteTodoAsync, updateTodoAsync,
} from './api';

const GET_TODOS = 'GET_TODOS';

export const useTodosQuery = () => {
  const { isLoading, data } = useQuery(GET_TODOS, getTodosAsync, {
    staleTime: 10000,
  });

  return {
    data,
    loading: isLoading,
  };
};

export const useTodosMutations = () => {
  const { isOnline } = useSelectorUi();
  const { togglers, setTogglerAction } = useTogglers();
  const loadingAction = (value) => void setTogglerAction({ type: 'isTodosLoading', value });

  const useMutationWrapper = (fn) => useMutation(async (args) => {
    if (isOnline) {
      await fn.call(this, args);
      await queryCache.invalidateQueries(GET_TODOS);
    }
  }, {
    onMutate: () => void loadingAction(true),
    onSettled: () => void loadingAction(false),
  });

  return {
    createMutation: useMutationWrapper(createTodoAsync)[0],
    updateMutation: useMutationWrapper(updateTodoAsync)[0],
    deleteMutation: useMutationWrapper(deleteTodoAsync)[0],
    loading: togglers.isTodosLoading,
  };
};
