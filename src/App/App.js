// @flow
import React, {Fragment} from 'react';

import SmartLayoutTheme from './containers/SmartLayoutTheme/SmartLayoutTheme';
import { Switch, Route } from 'react-router-dom';
import { AuthPage } from './Pages/Auth/AuthPage';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';

const App = () => {
    return (
      <Fragment>
        {/* <SmartLayoutTheme/> */}
        <Switch>
          <Route name="root" exact path='/' component={SmartLayoutTheme}/>
          <Route name="auth" path='/auth' component={SmartLayoutTheme} render={() => <AuthPage />}/>
          <Route name="error" component={SmartLayoutTheme} render={() => <NotFoundPage />}/>
        </Switch>
      </Fragment>
    );
  }

export default App;
