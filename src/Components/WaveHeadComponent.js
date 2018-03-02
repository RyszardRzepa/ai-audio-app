import React, { Component } from 'react';
import SoundWaveComponent from './SoundWaveComponent';

const colors = {
  originalColour: '#6a6a6a',
  mixedColour: '#7a59af'
};

class WaveHeadComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      playOriginal: props.playOriginal,
      playMixed: props.playMixed,
      url: {
        original: 'https://firebasestorage.googleapis.com/v0/b/ai-audio-5966c.appspot.com/o/unmixed.wav?alt=media&token=562aacc3-d723-418e-839b-7c708e54efdf',
        mixed: 'https://firebasestorage.googleapis.com/v0/b/ai-audio-5966c.appspot.com/o/rock.wav?alt=media&token=bff548e8-b1b3-4047-bd7c-3d190961f977'
      }
    }
  }

  render() {
    const { playOriginal, playMixed, play } = this.props;
    return (
        <SoundWaveComponent
          mixed={this.props.mixed}
          play={play}
          waveColor={colors.originalColour}
          progressColor={colors.mixedColour}
          cursorColor={colors.mixedColour}/>

    );
  }
}

export default WaveHeadComponent;
