import React, { Fragment } from 'react';

import Switch from '@material-ui/core/Switch';
import './index.css';

const TopBar = () => {
    return (
        <Fragment>
            <aside className="topbar">
                <div className="topbar__row">
                    <div></div>
                    <label className="update">
                        <span className="text">To Dark</span>
                        <Switch defaultChecked value="checkedF" color="default" />
                    </label>
                </div>
            </aside>
        </Fragment>
    );
};

export default TopBar;
