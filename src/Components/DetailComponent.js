import React from 'react';
import ChartComponent from './ChartComponent';
import ChannelComponent from './ChannelComponent';

class DetailComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      volume: props.volume,
      channel: props.channel
    }
  }
  render() {
    return (
      <div className="channel-detail">
        <div className="channel-volume">
          <ChannelComponent
            channel={this.state.channel}
            hideButtons={true}
            min={0}
            max={100}
            step="1"
            value={this.state.volume}
            status={true} />
        </div>

        <div className="eq-compression">
          <div className="eq">
            <ChartComponent />
          </div>

          <div className="compression">

          </div>
        </div>

      </div>
    )
  }
}

export default DetailComponent;