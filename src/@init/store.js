// Core
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

// Middlewares
import { middlewares } from './middleware';

// Instruments
import { uiReducer as ui } from '../bus/ui/reducer';
import { togglersReducer as togglers } from '../bus/togglers';
import { todosReducer as todos } from '../bus/todos/reducer';

export const rootReducer = combineReducers({
  ui,
  togglers,
  todos,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));
