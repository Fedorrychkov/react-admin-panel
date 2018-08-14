// @flow
import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import AuthPage from './Pages/Auth/AuthPage';
import TopBar from './components/TopBar/TopBar';
import { store } from './store/reducers';
import { DARK_LAYOUT, LIGHT_LAYOUT } from './store/layout/actionTypes';

type State = {
  dark: boolean,
  store: any,
};

class App extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.storeChange = this.storeChange.bind(this);
    this.state = { dark: false, store: store.subscribe(this.storeChange) };
  }

  componentWillMount() {
    this.storeChange();
  }

  storeChange() {
    let currentValue = store.getState();
    let theme = currentValue.layoutTheme.currentLayout;
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
