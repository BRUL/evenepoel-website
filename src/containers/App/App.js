import React, { Component } from 'react';
import './App.scss';
import Info from '../../components/Info/Info'
import Splash from '../../components/Splash/Splash'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Info />
        <Splash />
      </div>
    );
  }
}

export default App;
