// @flow
import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import AuthPage from './Pages/Auth/AuthPage';
import TopBar from './components/TopBar/TopBar';

type State = {
  isLight: boolean,
};

class App extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = { isLight: true };
  }


  render() {
    return (
      <section className={`App ${this.state.isLight? 'layout__light' : 'layout__dark'}`}>
        <TopBar/>
        <Switch>
          <Route path='/auth' component={AuthPage}/>
        </Switch>
      </section>
    );
  }
}

export default App;
