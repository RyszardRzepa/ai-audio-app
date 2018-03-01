import React, { Component } from 'react';
import Wavesurfer from 'react-wavesurfer';
import logo from './logo.svg';
import './App.css';
import 'wavesurfer.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false,
      pos: 0
    };
    this.handleTogglePlay = this.handleTogglePlay.bind(this);
    this.handlePosChange = this.handlePosChange.bind(this);
  }
  handleTogglePlay() {
    this.setState({
      playing: !this.state.playing
    });
  }
  handlePosChange(e) {
    this.setState({
      pos: e.originalArgs[0]
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <Wavesurfer
            audioFile='https://wavesurfer-js.org/example/split-channels/stereo.mp3'
            pos={this.state.pos}
            onPosChange={this.handlePosChange}
            playing={this.state.playing}
          />
        </div>
        <button onClick={() => this.setState({ playing: true })} type="button">Play</button>
        <button onClick={() => this.setState({ playing: false })} type="button">Stop</button>
      </div>
    );
  }
}


export default App;
