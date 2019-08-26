import React from 'react';
import ReactDOM from 'react-dom';

import Info from './components/Info/Info'
import Splash from './components/Splash/Splash'

import './index.scss';

ReactDOM.render(
  <div className="App">
    <Info />
    <Splash />
  </div>,
  document.getElementById('root')
);
