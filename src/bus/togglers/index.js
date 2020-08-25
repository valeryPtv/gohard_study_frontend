// Core
import { useDispatch, useSelector } from 'react-redux';

const initialState = {
  isTodosLoading: false,
};

export const togglersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TOGGLER_STATE':
      return { ...state, [action.payload.type]: action.payload.value };

    default: return state;
  }
};

export const togglerCreatorAction = ({ type, value }) => ({
  type: 'SET_TOGGLER_STATE',
  payload: { type, value },
});

export const useTogglers = () => {
  const dispatch = useDispatch();

  return {
    togglers: useSelector(({ togglers }) => togglers),
    setTogglerAction: (options) => void dispatch(togglerCreatorAction(options)),
  };
};
