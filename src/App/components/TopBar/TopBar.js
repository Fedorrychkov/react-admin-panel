// @flow

import React, { Fragment } from 'react';

import ThemeChanger from './ThemeChanger/ThemeChanger';

import './index.css';

const TopBar = (props: any) => {
    const { updateTheme, layout } = props;

    const handleChange = name => (event) => {
        updateTheme(layout);
    };

    return (
        <Fragment>
            <aside className="topbar">
                <div className="topbar__row">
                    <div></div>
                    <ThemeChanger layout={layout} onChange={handleChange()}/>
                </div>
            </aside>
        </Fragment>
    );
}

export default TopBar;
