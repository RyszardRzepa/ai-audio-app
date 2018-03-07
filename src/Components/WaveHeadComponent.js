import React, { Component } from 'react';
import SoundWaveComponent from './SoundWaveComponent';

const colors = {
  originalColour: '#6a6a6a',
  mixedColour: '#7a59af'
};

const url = {
  original: 'https://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3',
  mixed: 'https://wavesurfer-js.org/example/split-channels/stereo.mp3'
};

class WaveHeadComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      playOriginal: props.playOriginal,
      playMixed: props.playMixed,
      url: {
        original: 'https://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3',
        mixed: 'https://wavesurfer-js.org/example/split-channels/stereo.mp3'
      }
    }
  }

  render() {
    const { playOriginal, playMixed, play } = this.props;
    return (
      <div>
        <SoundWaveComponent
          mixed={this.props.mixed}
          play={play}
          waveColor={colors.originalColour}
          progressColor={colors.mixedColour}
          cursorColor={colors.mixedColour}/>
      </div>
    );
  }
}

export default WaveHeadComponent;
