import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Switch from '@material-ui/core/Switch';

import './index.css';
import { changeTheme } from '../../store/layout/actions';
import { LIGHT_LAYOUT, DARK_LAYOUT } from '../../store/layout/actionTypes';
import { store } from '../../store/reducers';

class TopBar extends React.Component<{}, {}> {
    
    constructor(props) {
        super(props);
        this.state = {
            currentTheme: LIGHT_LAYOUT,
            dark: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.updateTheme = this.updateTheme.bind(this);
    }

    componentWillMount() {
        let theme = localStorage.getItem('f-panel.theme');
        switch (theme) {
            case DARK_LAYOUT:
              this.setState({dark: true});
              break;
            case LIGHT_LAYOUT:
              this.setState({dark: false});
              break;
            default:
              this.setState({dark: false});
              break;
          }
        this.setState({ currentTheme: theme});
    }

    updateTheme(state) {
        const theme = changeTheme(this.state.currentTheme);
        console.log(theme);
        // localStorage.setItem('f-panel.theme', theme.type);
        this.setState({ currentTheme: theme.type, dark: state });
        store.dispatch(changeTheme(this.state.currentTheme));
    };

    handleChange = name => event => {
        this.updateTheme(event.target.checked);
    };

    render() {
        return (
            <Fragment>
                <aside className="topbar">
                    <div className="topbar__row">
                        <div></div>
                        <label className="update">
                            <span className="text">
                                {this.state.dark ? 'To Light': 'To Dark'}
                            </span>
                            <Switch checked={this.state.dark} color="default" onChange={this.handleChange()}/>
                        </label>
                    </div>
                </aside>
            </Fragment>
        );
    }
};

TopBar = connect()(TopBar);

export default TopBar;
