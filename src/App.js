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
    mixed: false,
    selectedChannel: -1,
    play: false,
  };


  handleMixed = (val) => {
    this.setState({
      mixed: val,
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
          <HeaderComponent handlePlay={this.handlePlay} handleMixed={this.handleMixed} />

          <Switch>
            <Route
              exact
              path='/'
              render={routeProps => <MainComponent play={this.state.play} mixed={this.state.mixed}  {...routeProps} />}/>

            <Route
              exact
              path='/channel/:channel/:input/:volume/:status'
              render={routeProps => <DetailComponent play={this.state.play} mixed={this.state.mixed} {...routeProps} />}/>
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;
