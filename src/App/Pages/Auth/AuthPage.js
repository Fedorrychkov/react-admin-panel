//@flow

import React, { Fragment } from 'react';
import './index.css';
import AuthForm from '../../components/Auth/AuthForm';

export class AuthPage extends React.Component<{}, {}> {

    render() {
        return (
            <Fragment>
                <main className="auth container">
                    <div className="auth__box">
                        <h1 className="auth__title">Admin Panel</h1>
                        <aside className="formbox">
                            <AuthForm />
                        </aside>
                    </div>
                </main>
            </Fragment>
        );
    }
}

export default AuthPage;
