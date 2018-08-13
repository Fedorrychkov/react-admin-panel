import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';

import adminPanel from './App/store/reducers';

const store = createStore(adminPanel, applyMiddleware(thunk));


ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>

), document.getElementById('root'));
registerServiceWorker();
