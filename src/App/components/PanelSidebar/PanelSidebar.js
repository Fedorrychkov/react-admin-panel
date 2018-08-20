// @flow

import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import './index.css';

const PanelSidebar = () => {
    return (
        <Fragment>
            <aside className="sidebar">
                <div className="sidebar__top">
                    <div className="sidebar__logo">Control Panel</div>
                    <nav className="sidebar__nav">
                        <ul className="sidebar__nav-list">
                            <li className="sidebar__nav-item">
                                <NavLink to={`/projects`} activeClassName="active" className="link sidebar__nav-link">Проекты</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="sidebar__bottom">
                    <nav className="sidebar__nav">
                        <ul className="sidebar__nav-list">
                            <li className="sidebar__nav-item">
                                <NavLink to={`/auth`} className="link sidebar__nav-link">Выход</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>

            </aside>
        </Fragment>
    );
}

export default PanelSidebar;