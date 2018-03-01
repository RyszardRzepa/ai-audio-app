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
          <ChannelComponent 
            channel = { 1 } 
            input = "Snare Drum"
            min = { 0 }
            max = { 100 }
            step="1"
            value = { 70 }/>
          <ChannelComponent 
            channel = { 2 } 
            input = "Snare Drum"
            min = { 0 }
            max = { 100 }
            step="1"
            value = { 80 }/>
          <ChannelComponent 
            channel = { 3 } 
            input = "Hi Hat"
            min = { 0 }
            max = { 100 }
            step="1"
            value = { 50 }/>
          <ChannelComponent 
            channel = { 4 } 
            input = "Tom Drum"
            min = { 0 }
            max = { 100 }
            step="1"
            value = { 10 }/>
          <ChannelComponent 
            channel = { 5 } 
            input = "Kick Drum"
            min = { 0 }
            max = { 100 }
            step="1"
            value = { 30 }/>
          <ChannelComponent 
            channel = { 6 } 
            input = "Ride Cymbal"
            min = { 0 }
            max = { 100 }
            step="1"
            value = { 40 }/>
          <ChannelComponent 
            channel = { 7 } 
            input = "Crash Cymbal"
            min = { 0 }
            max = { 100 }
            step="1"
            value = { 30 }/>
          <ChannelComponent 
            channel = { 8 } 
            input = "Cowbell"
            min = { 0 }
            max = { 100 }
            step="1"
            value = { 100 }/>
          <ChannelComponent 
            channel = { 9 } 
            input = "Off"
            min = { 0 }
            max = { 100 }
            step="1"
            value = { 0 }/>
          <ChannelComponent 
            channel = { 10 } 
            input = "Off"
            min = { 0 }
            max = { 100 }
            step="1"
            value = { 0 }/>
          
        </div>

      </div>
    );
  }
}


export default App;
