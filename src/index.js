import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './js/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import allReducers from './js/reducers/comb-reducers';

const store = createStore(allReducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
