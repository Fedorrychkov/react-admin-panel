// @flow

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { DARK_LAYOUT, LIGHT_LAYOUT } from '../../store/actionTypes';
import SmartTopBar from '../../containers/SmartTopBar/SmartTopBar';

import PrivateRoute from '../../services/PrivateRoute';

import { AuthPage } from '../../Pages/Auth/AuthPage';
import Panel from '../../Pages/Panel/Panel';

const LayoutTheme = (props: any) => {
    const { layout, token } = props;
    return (
        <section className={`App layout ${layout === DARK_LAYOUT ? 'layout__dark' : (LIGHT_LAYOUT ? 'layout__light' : '')}`}>
            <SmartTopBar/>
            <section className="content">
                <Switch>
                    <Route name="auth" path='/auth' component={AuthPage} />
                    <PrivateRoute authed={token} name="panel" exact path='/' component={Panel} />
                    <PrivateRoute authed={token} name="error" component={Panel} />
                </Switch>
            </section>
        </section>
    );
};

export default LayoutTheme;