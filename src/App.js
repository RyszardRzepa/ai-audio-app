import React, { Component } from 'react';
import './App.css';
import 'wavesurfer.js';

import HeaderComponent from './Components/HeaderComponent';
import SoundWaveComponent from './Components/SoundWaveComponent';
import ChannelComponent from './Components/ChannelComponent';


const colors = {
  waveColor1: '#6a6a6a',
  waveColor2: '#7a59af',
  cursorColor: '#759bff'
};

class App extends Component {
  state = {
    play: false,
  };

  onPlay = () => {
    this.setState({ play: !this.state.play })
  };

  onStop = () => {
    this.setState({ play: !this.state.play })
  };

  render() {
    return (
      <div className="App">
        <HeaderComponent onStop={this.onStop} onPlay={this.onPlay} />
        <div>
          <SoundWaveComponent
            play={this.state.play}
            waveColor={colors.waveColor1}
            progressColor='transparent'
            cursorColor='transparent'
            url='https://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3'/>
          <div style={{ position: 'absolute', top: 100, left: 0, right: 0 }}>
            <SoundWaveComponent
              play={this.state.play}
              waveColor={colors.waveColor1}
              progressColor={colors.waveColor2}
              cursorColor={colors.cursorColor}
              url='https://wavesurfer-js.org/example/split-channels/stereo.mp3'/>
          </div>
        </div>

        <div className="channels">
          <ChannelComponent channel = { 1 }/>
          <ChannelComponent channel = { 2 }/>
          <ChannelComponent channel = { 3 }/>
          <ChannelComponent channel = { 4 }/>
          <ChannelComponent channel = { 5 }/>
          <ChannelComponent channel = { 6 }/>
          <ChannelComponent channel = { 7 }/>
          <ChannelComponent channel = { 8 }/>
          <ChannelComponent channel = { 9 }/>
          <ChannelComponent channel = { 10 }/>
          
        </div>

      </div>
    );
  }
}


export default App;
