import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './scss/app.scss';
import '!file-loader?name=[name].[ext]!./assets/images/favicon.png'; // load favicon and dont change the name

render(<App />, document.getElementById("react-container")
);