// Core
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// Store
import { store } from './@init';

// Containers
import { App } from './containers';

// Service worker
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

if (navigator.serviceWorker && process.env.NODE_ENV === 'production') {
  serviceWorker.register();
}
