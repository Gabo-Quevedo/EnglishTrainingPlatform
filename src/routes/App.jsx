import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import SubSection from '../containers/SubSection';
import Layout from '../components/Layout';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/topics' component={SubSection} />
        <Route exact path='/ss' component={SubSection} />
        <Route component={Home} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
