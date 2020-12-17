import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import App from './routes/App';

const initialState = {
  'user': {},
  'topicName': 'Topic Name',
  'ssList': {
    'skills': 'false',
    'topics': 'false',
    'challenges': 'false',
    'participants': 'false',
  },
  'dynamics': [
    {
      'id': 1,
      'title': 'Challenge Time',
      'description': 'We hear the Callenges that the Participants prepare for us, they can share their Screen and you should be Muted and listenging preparing your feedback.',
    },
    {
      'id': 2,
      'title': 'Breakout Rooms',
      'description': 'Everyone goes to a room with random team mates and you can talk about the Selected Topic of the last week. There are 10 - 15 minutes to talk together about it, then we come to the general meeting and talk about your Breakout Rooms',
    },
    {
      'id': 3,
      'title': 'Topics Pool',
      'description': 'Here you can propose a Topic to talk about on next week. The Selected Topic will be what every one will talk about the next Meeting. Feel free to propose any topic you wish to talk about',
    },
    {
      'id': 4,
      'title': 'Breakout Session',
      'description': 'We finished our Session about 2 hours together, next to that you can feel free to speak in "Spanglish" orjust Spanish. This is our extra-time and is a good oportunitie to relaxing tegether',
    },
  ],
  'users': [
    {
      'id': 1,
      'name': 'Gabo',
      'lastName': 'Quevedo',
      'email': 'gabriel@gmail.com',
      'country': 'Chile',
      'gender': 'male',
      'enable': 'true',
      'profile': ['user', 'admin', 'sudoAdmin'],
      'skills': [
        {
          'title': 'listening',
          'id': 1,
          'level': ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
        },
        {
          'title': 'reading',
          'id': 2,
          'level': ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
        },
        {
          'title': 'writting',
          'id': 3,
          'level': ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
        },
        {
          'title': 'speaking',
          'id': 4,
          'level': ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
        },
      ],
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
      ],
    },
    {
      'id': 2,
      'name': 'Sandra',
      'lastName': 'Rojas',
      'email': 'sandrita@gmail.com',
      'country': 'Colombia',
      'gender': 'female',
      'enable': 'true',
      'profile': ['user', 'admin', 'sudoAdmin'],
      'skills': [
        {
          'title': 'listening',
          'id': 1,
          'level': ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
        },
        {
          'title': 'reading',
          'id': 2,
          'level': ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
        },
        {
          'title': 'writting',
          'id': 3,
          'level': ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
        },
        {
          'title': 'speaking',
          'id': 4,
          'level': ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
        },
      ],
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
          'description': 'My Hobbies s description',
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
  ],
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
