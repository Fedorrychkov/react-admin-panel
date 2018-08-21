import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
    
    return (
        <Switch>
            <Route {...rest} render={(props) => (
                !!authed === true
                ? <Component {...props} />
                : <Redirect to={{
                    pathname: '/auth',
                    state: { from: props.location }
                }} />
            )} />
        </Switch>
    );
}

export default PrivateRoute;