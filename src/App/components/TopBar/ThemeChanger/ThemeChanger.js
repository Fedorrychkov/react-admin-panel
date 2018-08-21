// @flow
import React from 'react';
import Switch from '@material-ui/core/Switch';

import '../index.css';
import { DARK_LAYOUT, LIGHT_LAYOUT } from '../../../store/actionTypes';

const ThemeChanger = (props: any) => {
    const { layout, onChange } = {...props};
    
    let dark = layout === DARK_LAYOUT ? true : ( LIGHT_LAYOUT ? false: false);
    return (
        <label className="update">
            <span className="text">
                {layout === DARK_LAYOUT ? 'To Light' : ( LIGHT_LAYOUT ? 'To Dark': '')}
            </span>
            <Switch checked={dark} color="default" onChange={e => {onChange(e)}}/>
        </label>
    )
};

export default ThemeChanger;