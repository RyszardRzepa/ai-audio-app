import React from 'react';
import SoundWaveComponent from './SoundWaveComponent';
import ChannelComponent from './ChannelComponent';

const colors = {
  originalColour: '#6a6a6a',
  mixedColour: '#7a59af'
};

class MainComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      playOriginal: props.playOriginal,
      playMixed: props.playMixed,
    }
  }
  render() {
    return (
      <div>
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
            showButtons={true}
            channel = { 1 } 
            input = "Snare Drum"
            min = { 0 }
            max = { 100 }
            step="1"
            value = { 70 }
            status={true}/>
          <ChannelComponent 
            showButtons={true}
            channel = { 2 } 
            input = "Hi Hat"
            min = { 0 }
            max = { 100 }
            step="1"
            value = { 50 }
            status={true}/>
          <ChannelComponent 
            showButtons={true}
            channel = { 3 } 
            input = "Tom Drum"
            min = { 0 }
            max = { 100 }
            step="1"
            value = { 10 }
            status={true}/>
          <ChannelComponent 
            showButtons={true}
            channel = { 4 } 
            input = "Kick Drum"
            min = { 0 }
            max = { 100 }
            step="1"
            value = { 30 }/>
          <ChannelComponent 
            showButtons={true}
            channel = { 5 } 
            input = "Ride Cymbal"
            min = { 0 }
            max = { 100 }
            step="1"
            value = { 40 }/>
          <ChannelComponent 
            showButtons={true}
            channel = { 6 } 
            input = "Crash Cymbal"
            min = { 0 }
            max = { 100 }
            step="1"
            value = { 30 }/>
          <ChannelComponent 
            showButtons={true}
            channel = { 7 } 
            input = "Cowbell"
            min = { 0 }
            max = { 100 }
            step="1"
            value = { 100 }/>
          <ChannelComponent 
            showButtons={true}
            channel = { 8 } 
            input = "Off"
            min = { 0 }
            max = { 100 }
            step="1"
            value = { 0 }/>
          <ChannelComponent 
            showButtons={true}
            channel = { 9 } 
            input = "Off"
            min = { 0 }
            max = { 100 }
            step="1"
            value = { 0 }/>
          <ChannelComponent
            showButtons={true}
            channel={ 10 }
            input="Off"
            min={0}
            max={100}
            step="1"
            value={0} />
        </div>
      </div>
    )
  }
}

export default MainComponent;