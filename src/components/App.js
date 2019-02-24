import React, { Component } from 'react';
import Main from './Main';
import Navbar from './Navbar.js';
import '../App.css';

class App extends Component {
  render() {
      return (
          <div>
              <h1>WhaleCats IMS</h1>
              <Navbar />
              <Main/>
        </div>
    );
  }
}

export default App;
