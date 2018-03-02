import React from 'react';
import ChartComponent from './ChartComponent';
import ChannelComponent from './ChannelComponent';
import CompressorComponent from './CompressorComponent';
import WaveHeadComponent from './WaveHeadComponent';

class DetailComponent extends React.Component {
  constructor(props) {
    super(props)

    let url = window.location.href.split('/')
    let urlID = url[url.length - 4]
    let urlInput = url[url.length - 3]
    let urlVolume = url[url.length - 2]
    let urlStatus = url[url.length - 1]

    urlInput = urlInput.replace(new RegExp('%20', 'g'), ' ');

    this.state = {
      volume: urlVolume,
      channel: urlID,
      input: urlInput,
      status: (urlStatus === 'true'),
      playOriginal: props.playOriginal,
      playMixed: props.playMixed
    }
  }

  render() {

    const { channel, input, volume, status, playMixed } = this.state

    return (
      <div className="channel-detail">
        <div style={{ backgroundColor: 'red'}}>
          <WaveHeadComponent
            playOriginal={this.state.playOriginal}
            playMixed={this.state.playMixed}/>
        </div>

        <div className="channel-volume">
          <ChannelComponent
            channel={channel}
            hideButtons={true}
            input={input}
            min={0}
            max={100}
            mixed={playMixed}
            step="1"
            status={status}/>
        </div>

        <div className="eq-compression">
          <div className="eq">
            <ChartComponent channel={channel} mixed={playMixed}/>
          </div>

          <div className="compression">
            <CompressorComponent/>
          </div>
        </div>
      </div>
    )
  }
}

export default DetailComponent;