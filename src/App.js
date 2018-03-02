import React, { Component } from 'react';
import './App.css';
import 'wavesurfer.js';

import HeaderComponent from './Components/HeaderComponent';
import SoundWaveComponent from './Components/SoundWaveComponent';
import ChannelComponent from './Components/ChannelComponent';
import ChartComponent from './Components/ChartComponent';
import CompressorSliderComponent from './Components/CompressorSliderComponent';

const colors = {
  originalColour: '#6a6a6a',
  mixedColour: '#7a59af'
};

class App extends Component {
  state = {
    playOriginal: false,
    playMixed: false,
  };

  onPlay = (original) => {
    if(original){
      this.setState({
        playOriginal: true,
        playMixed: false
      })
    }else{
      this.setState({
        playOriginal: false,
        playMixed: true
      })
    }
  };

  onStop = () => {
    this.setState({
      playOriginal: false,
      playMixed: false
    })
  };

  render() {
    return (
      <div className="App">
        <HeaderComponent onStop={this.onStop} onPlay={this.onPlay} />
        {/*<ChartComponent />*/}
        <div>
          <SoundWaveComponent
            play={this.state.playOriginal}
            waveColor={colors.originalColour}
            progressColor='transparent'
            cursorColor='transparent'
            url='https://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3'/>

          <div style={{ position: 'absolute', top: 100, left: 0, right: 0 }}>
            <SoundWaveComponent
              play={this.state.playMixed}
              waveColor={colors.originalColour}
              progressColor={colors.mixedColour}
              cursorColor={colors.mixedColour}
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
            value = { 70 }
            status = { true }/>
          <ChannelComponent 
            channel = { 2 } 
            input = "Hi Hat"
            min = { 0 }
            max = { 100 }
            step="1"
            value = { 50 }
            status={true}/>
          <ChannelComponent 
            channel = { 3 } 
            input = "Tom Drum"
            min = { 0 }
            max = { 100 }
            step="1"
            value = { 10 }
            status={true}/>
          <ChannelComponent 
            channel = { 4 } 
            input = "Kick Drum"
            min = { 0 }
            max = { 100 }
            step="1"
            value = { 30 }/>
          <ChannelComponent 
            channel = { 5 } 
            input = "Ride Cymbal"
            min = { 0 }
            max = { 100 }
            step="1"
            value = { 40 }/>
          <ChannelComponent 
            channel = { 6 } 
            input = "Crash Cymbal"
            min = { 0 }
            max = { 100 }
            step="1"
            value = { 30 }/>
          <ChannelComponent 
            channel = { 7 } 
            input = "Cowbell"
            min = { 0 }
            max = { 100 }
            step="1"
            value = { 100 }/>
          <ChannelComponent 
            channel = { 8 } 
            input = "Off"
            min = { 0 }
            max = { 100 }
            step="1"
            value = { 0 }/>
          <ChannelComponent 
            channel = { 9 } 
            input = "Off"
            min = { 0 }
            max = { 100 }
            step="1"
            value = { 0 }/>
          <ChannelComponent
            channel={ 10 }
            input="Off"
            min={0}
            max={100}
            step="1"
            value={0} />
          
        </div>

      </div>
    );
  }
}


export default App;
