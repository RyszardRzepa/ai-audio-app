import React, { Component } from 'react';
import './App.css';
import 'wavesurfer.js';

import HeaderCompoent from './Components/headerComponent';
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
        <HeaderCompoent onStop={this.onStop} onPlay={this.onPlay} />
        <div>
          <SoundWaveComponent
            play={this.state.play}
            waveColor={colors.waveColor1}
            progressColor='transparent'
            cursorColor='transparent'
            url='https://wavesurfer-js.org/example/split-channels/stereo.mp3'/>
          <div style={{ position: 'absolute', width: '100%', top: 100}}>
            <SoundWaveComponent
              play={this.state.play}
              waveColor={colors.waveColor1}
              progressColor={colors.waveColor2}
              cursorColor={colors.cursorColor}
              url='https://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3'/>
          </div>
        </div>

        <ChannelComponent/>

      </div>
    );
  }
}


export default App;
