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

        this.storeChange = this.storeChange.bind(this);

        this.state = { dark: false, store: store.subscribe(this.storeChange) };
        this.handleChange = this.handleChange.bind(this);
        this.updateTheme = this.updateTheme.bind(this);
    }

    componentWillMount() {
        let currentValue = store.getState();
        let theme = currentValue.layoutTheme.currentLayout;
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
    }
    
    storeChange() {
    }

    updateTheme(state) {
        this.setState({ dark: state });
        let currentValue = store.getState();
        let theme = currentValue.layoutTheme.currentLayout;
        console.log(theme);
        switch (theme) {
          case DARK_LAYOUT:
            store.dispatch(changeTheme(DARK_LAYOUT));
            localStorage.setItem('f-panel.theme', LIGHT_LAYOUT);
            break;
          case LIGHT_LAYOUT:
            store.dispatch(changeTheme(LIGHT_LAYOUT));
            localStorage.setItem('f-panel.theme', DARK_LAYOUT);
            break;
          default:
            store.dispatch(changeTheme(LIGHT_LAYOUT));
            localStorage.setItem('f-panel.theme', DARK_LAYOUT);
            break;
        }
        
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

// TopBar = connect()(TopBar);

export default TopBar;
