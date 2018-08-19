//@flow

import React, { Fragment } from 'react';
import './index.css';
import { TextField, Button } from '@material-ui/core';

export class AuthPage extends React.Component<{}, {}> {

    handleChange = (name: any) => (event: any) => {
        this.setState({
          [name]: event.target.value,
        });
    };
    
    render() {
        return (
            <Fragment>
                <main className="auth container">
                    <div className="auth__box">
                        <h1 className="auth__title">Admin Panel</h1>
                        <aside className="formbox">
                            <form className="form-box auth__form" noValidate autoComplete="off">
                                <TextField
                                    id="login"
                                    label="Логин"
                                    className=""
                                    // value={this.state.name}
                                    // onChange={this.handleChange('name')}
                                    margin="normal"
                                />
                                <TextField
                                    id="password"
                                    label="Пароль"
                                    className=""
                                    // value={this.state.name}
                                    // onChange={this.handleChange('name')}
                                    autoComplete="current-password"
                                    type="password"
                                    margin="normal"
                                />
                                <div className="form-box__control">
                                    <Button type="submit" variant="contained" className="">
                                        Войти
                                    </Button>
                                </div>
                            </form>
                        </aside>
                    </div>
                </main>
            </Fragment>
        );
    }
}

export default AuthPage;
