import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
  render() {
      var user = {
          name: 'Damian',
          location: 'Gdynia'
      };

      function getLocation(location) {
          return location ? <p className="App-intro">Location: {location}</p>
              : undefined;
      }
      return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome {user.name} to React</h1>
        </header>
          {
              getLocation(user.location)
          }
      </div>
    );
  }
}

export default App;
