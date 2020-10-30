import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

function render() {
  ReactDOM.render(<App />, document.getElementById('app'));
}
render();

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    render();
  });
}
