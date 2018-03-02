import React from 'react';
import ChannelComponent from './ChannelComponent';
import WaveHeadComponent from './WaveHeadComponent';

class MainComponent extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      playOriginal: props.playOriginal,
      playMixed: props.playMixed,
    }
  }
  render() {
    debugger
    return (
      <div>
        <WaveHeadComponent
          playOriginal={this.state.playOriginal}
          playMixed={this.state.playMixed}/>

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