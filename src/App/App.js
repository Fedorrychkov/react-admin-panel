// @flow
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AuthPage from './Pages/Auth/AuthPage';

import './App.css';

const App = () => {
  return (
    <section className="App">
      <Switch>
        <Route path='/auth' component={AuthPage}/>
      </Switch>
    </section>
  );
}

export default App;
