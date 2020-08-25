// Core
import { useSelector, useDispatch } from 'react-redux';

// Actions
import { setOnlineStatusAction } from './actions';

export const useSelectorUi = () => useSelector(({ ui }) => ui);

export const useUi = () => {
  const dispatch = useDispatch();

  return {
    ui: useSelectorUi(),
    setOnlineStatus: (newStatus) => dispatch(setOnlineStatusAction(newStatus)),
  };
};
