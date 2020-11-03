import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/Home';

function render() {
  ReactDOM.render(<App />, document.getElementById('app'));
}
render();

if (module.hot) {
  module.hot.accept('./containers/Home', () => {
    render();
  });
}
