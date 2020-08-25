// Core
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

// Middlewares
import { middlewares } from './middleware';

// Instruments
import { uiReducer as ui } from '../bus/ui/reducer';

export const rootReducer = combineReducers({
  ui,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));
