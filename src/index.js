import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import App from './routes/App';

const initialState = {
  hola: 'jamon',
};

const store = createStore(reducer, initialState);

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    , document.getElementById('app'),
  );
}
render();

if (module.hot) {
  module.hot.accept('./reducers', () => {
    store.replaceReducer(nextRootReducer);
  });
}
