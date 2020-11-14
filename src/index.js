import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import App from './routes/App';

const initialState = {
  'user': {
    'id': 1,
    'name': 'Gabo',
    'lastName': 'Quevedo',
    'email': 'gabriel@gmail.com',
    'country': 'Chile',
    'gender': 'male',
    'enable': 'true',
    'profile': ['user', 'admin', 'sudoAdmin'],
    'skills': {
      'listening': ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
      'reading': ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
      'writting': ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
      'speaking': ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
    },
    'topics': [
      {
        'id': 1,
        'title': 'Games',
        'description': 'Games description',
        'situation': {
          'enable': 'true',
          'request': {
            'inQue': 'true',
            'accepted': 'false',
            'rejected': 'false',
            'deleted': 'false',
            'done': 'false',
          },
        },
      },
      {
        'id': 2,
        'title': 'Dance',
        'description': 'Dance description',
        'situation': {
          'enable': 'true',
          'request': {
            'inQue': 'true',
            'accepted': 'false',
            'rejected': 'false',
            'deleted': 'false',
            'done': 'false',
          },
        },
      },
      {
        'id': 3,
        'title': 'Work',
        'description': 'Work description',
        'situation': {
          'enable': 'true',
          'request': {
            'inQue': 'true',
            'accepted': 'false',
            'rejected': 'false',
            'deleted': 'false',
            'done': 'false',
          },
        },
      },
    ],
    'challenges': [
      {
        'id': 1,
        'title': 'My Family',
        'minutes': 8,
        'description': 'My Family description',
        'situation': {
          'enable': 'true',
          'request': {
            'inQue': 'true',
            'accepted': 'false',
            'rejected': 'false',
            'deleted': 'false',
            'done': 'false',
          },
        },
      },
      {
        'id': 2,
        'title': 'My Food',
        'minutes': 7,
        'description': 'My Food description',
        'situation': {
          'enable': 'true',
          'request': {
            'inQue': 'true',
            'accepted': 'false',
            'rejected': 'false',
            'deleted': 'false',
            'done': 'false',
          },
        },
      },
      {
        'id': 3,
        'title': 'My Hobbies',
        'minutes': 5,
        'description': 'My Hobbies description',
        'situation': {
          'enable': 'true',
          'request': {
            'inQue': 'true',
            'accepted': 'false',
            'rejected': 'false',
            'deleted': 'false',
            'done': 'false',
          },
        },
      },
    ],
  },
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
