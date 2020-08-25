// Core
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// Store
import { store, persistor } from './@init';

// Containers
import { App } from './containers';

// Service worker
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

if (navigator.serviceWorker && process.env.NODE_ENV === 'production') {
  serviceWorker.register();
}
