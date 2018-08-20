// @flow
import React, {Fragment} from 'react';

import SmartLayoutTheme from './containers/SmartLayoutTheme/SmartLayoutTheme';
import { Switch, Route } from 'react-router-dom';

const App = () => {
    return (
      <Fragment>
        {/* <SmartLayoutTheme/> */}
        <Switch>
          <Route name="root" exact path='/' component={SmartLayoutTheme}/>
          <Route name="auth" path='/auth' component={SmartLayoutTheme}/>
          <Route name="error" component={SmartLayoutTheme}/>
        </Switch>
      </Fragment>
    );
  }

export default App;
