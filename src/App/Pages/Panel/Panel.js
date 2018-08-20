import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import PanelSidebar from '../../components/PanelSidebar/PanelSidebar';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

import './index.css';
import Projects from './Projects/Projects';

const Panel = () => {
    return (
        <Fragment>
            <section className="panel">
                <PanelSidebar />
                <main className="panel__content">
                    <Switch>
                        <Route name="index" exact path="/" component={Projects}/>
                        <Route name="index" path="/projects" component={Projects}/>
                        <Route name="error" component={NotFoundPage}/>
                    </Switch>
                </main>
            </section>
        </Fragment>
    );
}

export default Panel;