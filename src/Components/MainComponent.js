import React from 'react';
import ChannelComponent from './ChannelComponent';
import WaveHeadComponent from './WaveHeadComponent';

class MainComponent extends React.Component {
  constructor(props){
    super(props)
    console.log('props', props)
    this.state = {
      playOriginal: props.playOriginal,
      playMixed: props.playMixed,
    }
  }
  render() {
    return (
      <div>
        <WaveHeadComponent
          playOriginal={this.state.playOriginal}
          playMixed={this.state.playMixed}/>

        <div className="channels">
          <ChannelComponent 
            showButtons={true}
            channel = { 1 } 
            input= "Floor Tom"
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
            input = "Bass Drum"
            min = { 0 }
            max = { 100 }
            step="1"
            value = { 10 }
            status={true}/>
          <ChannelComponent 
            showButtons={true}
            channel = { 4 } 
            input = "Overhead"
            min = { 0 }
            max = { 100 }
            step="1"
            value = { 30 }
            status={true} />
          <ChannelComponent 
            showButtons={true}
            channel = { 5 } 
            input = "Snare"
            min = { 0 }
            max = { 100 }
            step="1"
            value = { 40 }
            status={true}/>
          <ChannelComponent 
            showButtons={true}
            channel = { 6 } 
            input = "Bass Drum"
            min = { 0 }
            max = { 100 }
            step="1"
            value = { 30 }
            status={true} />
          <ChannelComponent 
            showButtons={true}
            channel = { 7 } 
            input = "Rack Tom"
            min = { 0 }
            max = { 100 }
            step="1"
            value = { 100 }
            status={true} />
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