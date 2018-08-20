import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import PanelSidebar from '../../components/PanelSidebar/PanelSidebar';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

import './index.css';

const Panel = () => {
    return (
        <Fragment>
            <section className="panel">
                <PanelSidebar />
                <main className="panel__content">
                    <Switch>
                        <Route name="index" exact path="/" render={() => <div>HOLLA</div>}/>
                        <Route name="error" component={NotFoundPage}/>
                    </Switch>
                </main>
            </section>
        </Fragment>
    );
}

export default Panel;