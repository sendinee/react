import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import app from './app';
import * as home from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

home.unregister();
