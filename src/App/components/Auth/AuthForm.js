import React, { Fragment } from 'react';
import { TextField, Button } from '@material-ui/core';
// import { auth } from '../../store/auth/reducer';

class AuthForm extends React.Component {
    // const state = {
    //     login: '',
    //     password: ''
    // }
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: ''
        }
    }

    handleChange = (name: any) => (event: any) => {
        this.setState({
          [name]: event.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
    }

    // const auth = () => {
        
    // }
    render() {
    return (
        <Fragment>
            <form className="form-box auth__form" noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                <TextField
                    id="login"
                    label="Логин"
                    className=""
                    autoFocus={true}
                    value={this.state.login}
                    onChange={this.handleChange('login')}
                    margin="normal"
                />
                <TextField
                    id="password"
                    label="Пароль"
                    className=""
                    value={this.state.password}
                    onChange={this.handleChange('password')}
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
        </Fragment>
    );
    }
}

export default AuthForm;