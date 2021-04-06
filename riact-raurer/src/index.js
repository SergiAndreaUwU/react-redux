import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from "react-router-dom"
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const store = configureStore();

const render=()=>{
ReactDOM.render(
  <React.StrictMode>
      <ReduxProvider store={store}>
    <Router>
    <App />
    </Router>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

}

setInterval(render, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
