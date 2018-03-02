import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import 'wavesurfer.js';

import HeaderComponent from './Components/HeaderComponent';
import MainComponent from './Components/MainComponent';
import DetailComponent from './Components/DetailComponent';

class App extends Component {
  state = {
    playOriginal: false,
    playMixed: false,
    selectedChannel: -1
  };

  onPlay = (original) => {
    if(original){
      this.setState({
        playOriginal: true,
        playMixed: false
      })
    }else{
      this.setState({
        playOriginal: false,
        playMixed: true
      })
    }
  };

  onStop = () => {
    this.setState({
      playOriginal: false,
      playMixed: false
    })
  };

  onChannelSelect = (channel) => {
    this.setState({ selectedChannel: channel })
  };

  render() {
    return (
      <Router>
        <div className="App">
          <HeaderComponent onStop={this.onStop} onPlay={this.onPlay} />
          
          <Switch>
            <Route
              exact
              path='/'
              component={MainComponent}
              playMixed={this.state.playMixed}
              playOriginal={this.state.playOriginal} />

            <Route
              exact
              path='/channel/:id/:input/:volume/:status'
              component={DetailComponent} />
          </Switch>
        </div>
      </Router>      
    );
  }
}


export default App;
