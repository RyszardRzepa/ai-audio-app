import React, { Component } from 'react';
import Wavesurfer from 'react-wavesurfer';
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
      <div className='App'>
        <div>
          <div style={{ backgroundColor: '#4a4a4a', marginLeft: 20, marginRight: 20, marginTop: 20 }}>
            <Wavesurfer
              options={{
                height: 200,
                waveColor: this.props.waveColor,
                progressColor: this.props.progressColor,
                cursorColor: this.props.cursorColor
              }}
              audioFile={this.props.url}
              pos={this.state.pos}
              onPosChange={this.handlePosChange}
              playing={this.state.playing}
            />
          </div>
        </div>
        <button onClick={() => this.setState({ playing: true })} type="button">Play</button>
        <button onClick={() => this.setState({ playing: false })} type="button">Stop</button>
      </div>
    );
  }
}


export default App;
