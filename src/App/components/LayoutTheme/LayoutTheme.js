// @flow

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SmartTopBar from '../../containers/SmartTopBar/SmartTopBar';

import { AuthPage } from '../../Pages/Auth/AuthPage';
import { DARK_LAYOUT, LIGHT_LAYOUT } from '../../store/layout/actionTypes';

const LayoutTheme = (props: any) => {
    const { layout } = props;
    
    return (
        <section className={`App layout ${layout === DARK_LAYOUT ? 'layout__dark' : (LIGHT_LAYOUT ? 'layout__light' : '')}`}>
            <SmartTopBar/>
            <section className="content">
                <Switch>
                    <Route path='/auth' component={AuthPage}/>
                </Switch>
            </section>
        </section>
    );
};

export default LayoutTheme;