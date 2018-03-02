import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import 'wavesurfer.js';

import HeaderComponent from './Components/HeaderComponent';
import ChannelComponent from './Components/ChannelComponent';
import ChartComponent from './Components/ChartComponent';
import CompressorSliderComponent from './Components/CompressorSliderComponent';
import CompressorComponent from './Components/CompressorComponent';
import MainComponent from './Components/MainComponent';
import DetailComponent from './Components/DetailComponent';

const colors = {
  originalColour: '#6a6a6a',
  mixedColour: '#7a59af'
};


class App extends Component {
  state = {
    playOriginal: false,
    playMixed: false,
    selectedChannel: -1,
    play: false,
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

  handleMixed = () => {
    this.setState({
      playOriginal: false,
      playMixed: false
    })
  };

  onChannelSelect = (channel) => {
    this.setState({ selectedChannel: channel })
  };

  handlePlay = (val) => {
    this.setState({
      play: val
    });
  }



  render() {
    const { playMixed, playOriginal } = this.state;
    return (
      <Router>
        <div className="App">
          <HeaderComponent handlePlay={this.handlePlay} onStop={this.onStop} onPlay={this.onPlay} />

          <Switch>
            <Route
              exact
              path='/'
              render={routeProps => <MainComponent play={this.state.play}  {...routeProps} playMixed={playMixed} playOriginal={playOriginal}  />}/>

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
