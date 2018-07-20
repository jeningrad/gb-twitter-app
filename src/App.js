import React, { Component } from 'react';
import { View } from './view';
import './styles/App.scss';

if (!(window.location.href.indexOf('oauth_token') > -1)) {
  window.location.replace("/signin.html");
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <View/>
      </div>
    );
  }
}

export default App;
