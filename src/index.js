import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// import  './Image';

// const App = () => <h1> React Router</h1>;

ReactDOM.render(
  <BrowserRouter>
    <App />
  {/* <Image /> */}
  </BrowserRouter>,
  document.getElementById('root')
);



