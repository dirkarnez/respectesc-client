import "core-js/stable";
import "regenerator-runtime/runtime";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import AOS from 'aos';

AOS.init({once: true, duration: 1000});

ReactDOM.render(<App />, document.getElementById('app'));

import "./app.css";