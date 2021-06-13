import React from 'react'; //like jqurey import hook
import ReactDOM from 'react-dom'; // DOM render
import './index.css';
//import reportWebVitals from './reportWebVitals';
import Home from './pages/Home'

ReactDOM.render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>,
  document.getElementById('root')
);

//reportWebVitals();
