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
  render() {
    return (
      <div className="App">
        <div>
          <SoundWaveComponent
            style={{ position: 'relative', top: 0 }}
            waveColor={colors.waveColor1}
            progressColor='transparent'
            cursorColor='transparent'
            url='https://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3'/>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
            <SoundWaveComponent
              waveColor={colors.waveColor1}
              progressColor={colors.waveColor2}
              cursorColor={colors.cursorColor}
              url='https://wavesurfer-js.org/example/split-channels/stereo.mp3'/>
          </div>
        </div>

        <div className="channels">
          <ChannelComponent />
          <ChannelComponent />
          <ChannelComponent />
          <ChannelComponent />
          <ChannelComponent />
          <ChannelComponent />
          <ChannelComponent />
          <ChannelComponent />
          <ChannelComponent />
          <ChannelComponent/>
        </div>

      </div>
    );
  }
}


export default App;
