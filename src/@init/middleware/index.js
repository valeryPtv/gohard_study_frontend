/* eslint-disable no-unused-expressions */

// Middlewares
import { createLogger } from 'redux-logger';

const isDev = process.env.NODE_ENV === 'development';
const middlewares = [];

isDev && middlewares.push(
  createLogger({
    duration: true,
    collapsed: true,
    colors: {
      title: () => '#139BFE',
      prevState: () => '#1C5FAF',
      action: () => '#149945',
      nextState: () => '#A47104',
      error: () => '#ff0005',
    },
  }),
);

export { middlewares };
