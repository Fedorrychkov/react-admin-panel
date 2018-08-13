// @flow
import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import AuthPage from './Pages/Auth/AuthPage';
import TopBar from './components/TopBar/TopBar';
import { DARK_LAYOUT, LIGHT_LAYOUT } from './store/layout/actionTypes';

type State = {
  dark: boolean,
};

class App extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = { dark: false };
  }

  componentWillMount() {
    const theme = localStorage.getItem('f-panel.theme');
    switch (theme) {
      case DARK_LAYOUT:
        this.setState({dark: true});
        break;
      case LIGHT_LAYOUT:
        this.setState({dark: false});
        break;
      default:
        this.setState({dark: false});
        break;
    } 
  }

  shouldComponentUpdate(nextProps: any, nextState: any) {
    console.log(nextProps, nextState);
    if (nextState !== this.state)
      return true;
    return false;
  }

  render() {
    return (
      <section className={`App ${this.state.dark? 'layout__dark' : 'layout__light'}`}>
        <TopBar/>
        <Switch>
          <Route path='/auth' component={AuthPage}/>
        </Switch>
      </section>
    );
  }
}

export default App;
