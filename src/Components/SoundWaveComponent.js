import React, { Component } from 'react';
import Wavesurfer from 'react-wavesurfer';
import 'wavesurfer.js';
// import rock from '../../rock.wav';

class SoundWaveComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false,
      pos: 0,
      url: {
        mixed: 'https://firebasestorage.googleapis.com/v0/b/ai-audio-5966c.appspot.com/o/unmixed.wav?alt=media&token=562aacc3-d723-418e-839b-7c708e54efdf',
        original: 'https://firebasestorage.googleapis.com/v0/b/ai-audio-5966c.appspot.com/o/rock.wav?alt=media&token=bff548e8-b1b3-4047-bd7c-3d190961f977'
      }
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
    const { mixed } = this.props;
    return (
      <div className="SoundWaveComponent">
        <div style={{ width: '100%', height: '10%', backgroundColor: '#4a4a4a' }}>
          <Wavesurfer
            options={{
              height: 150,
              waveColor: this.props.waveColor,
              progressColor: this.props.progressColor,
              cursorColor: this.props.cursorColor
            }}
            audioFile={this.props.mixed ? this.state.url.original : this.state.url.mixed}
            pos={this.state.pos}
            onPosChange={this.handlePosChange}
            playing={this.props.play}
          />
        </div>
      </div>
    );
  }
}


export default SoundWaveComponent;
