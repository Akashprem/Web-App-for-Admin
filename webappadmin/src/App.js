import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Main">
          <div className="App__Form">
            <div className="Form__Title">
              Administrative Login
            </div>
            <br />
            <br />
            <div className="Form">
              <div className="Username">
              Username: 
              &nbsp;
              &nbsp;
              &nbsp;
              <input type="text" name="username" />
              </div>
              <br />
              <div className="Password">
              Password: 
              &nbsp;
              &nbsp;
              &nbsp;
              <input type="text" name="password" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;