import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './js/reducers/index';
import thunk from "redux-thunk";
import './css/index.css';
import 'react-day-picker/lib/style.css';
import App from './js/App';
import registerServiceWorker from './registerServiceWorker2';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();