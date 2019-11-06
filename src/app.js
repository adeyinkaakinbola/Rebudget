import React from 'react';//importing react from the module react
import ReactDOM from 'react-dom';//importing react from the module react-dom
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


ReactDOM.render(<AppRouter/>,document.getElementById('app'));
