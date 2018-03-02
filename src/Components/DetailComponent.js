import React from 'react';
import ChartComponent from './ChartComponent';
import ChannelComponent from './ChannelComponent';
import CompressorComponent from './CompressorComponent';

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
      status: (urlStatus === 'true')
    }
  }

  render() {

    const { channel, input, volume, status } = this.state

    return (
      <div className="channel-detail">
        <div className="channel-volume">
          <ChannelComponent
            channel={channel}
            hideButtons={true}
            input={input}
            min={0}
            max={100}
            step="1"
            value={volume}
            status={status}/>
        </div>

        <div className="eq-compression">
          <div className="eq">
            <ChartComponent/>
          </div>

          <div className="compression">

          </div>
          <CompressorComponent/>
        </div>
      </div>
    )
  }
}

export default DetailComponent;