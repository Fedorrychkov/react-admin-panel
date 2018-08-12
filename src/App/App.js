// @flow
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AuthPage from './Pages/Auth/AuthPage';
import TopBar from './components/TopBar/TopBar';

const App = () => {
  return (
    <section className="App layout__light">
      <TopBar/>
      <Switch>
        <Route path='/auth' component={AuthPage}/>
      </Switch>
    </section>
  );
}

export default App;
