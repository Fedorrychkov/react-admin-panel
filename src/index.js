import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';

import { store } from './App/store/reducers';



ReactDOM.render((
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>

), document.getElementById('root'));
registerServiceWorker();
