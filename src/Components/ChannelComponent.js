import React, { Component } from 'react';
import FaIconPackRemoveRedEye from 'react-icons/lib/md/remove-red-eye'
import { Link } from 'react-router-dom'

const zero = 50
const floorTom = 50+(100*-0.019515865678277677)
const hHat = 50+(100*-0.12915695245804137)
const bDrum = 50+(100*0.02234711094073738)
const overhead = 50+(100*0.3787342423532589)
const snare = 50+(100*-0.02446831985537301)
const bassD = 50+(100*-0.196680429519688)
const rackTom = 50+(100*-0.07297467173392569)

class ChannelComponent extends Component {

    constructor(props){
        super(props);
        
        this.state = {
          channel: props.channel,
          status: props.status,
          showButtons: props.showButtons,
          mixed: props.mixed
        };
    }

    componentWillReceiveProps(nextProps) { 
      this.setState({
        // channel: nextProps.channel,
        mixed: nextProps.mixed
      })
    }

    render() {
        let { channel, input, min, max } = this.props;
        let { showButtons, status } = this.state;

        if(!status) {
            status = false;
        }

        var volume = zero
        if (this.state.mixed) {
          switch(parseInt(this.state.channel)) {
            case 1:
              volume = floorTom
              break;
            case 2:
              volume = hHat
              break;
            case 3:
              volume = bDrum
              break;
            case 4:
              volume = overhead
              break;
            case 5:
              volume = snare
              break;
            case 6:
              volume = bassD
              break;
            case 7:
              volume = rackTom
              break;
          }
        }

        console.log(this.state.channel, this.state.mixed, volume)
        
        return (
            <div className="channel_component">

                {showButtons &&
                    <Link
                        id='channel'
                        className="view_button"
                        to={{ pathname: `/channel/${channel}/${input}/${volume}/${status}` }}>
                        
                        <FaIconPackRemoveRedEye
                            style={{
                                padding: 10,
                                fontSize: 18,
                                color: '#858585'
                            }} />

                    </Link>
                }
                
                <div className="slider">
                    <div className="channel_number">
                        {channel}
                    </div>
                    <input 
                        type="range"
                        min = { min }
                        max = { max }
                        value = { volume }
                        className="slider"
                        onChange={(v) => this.setState({ volume: v.target.value })} />
                </div>

                <button className="toggle_on_off_button" onClick={() => this.setState({ status: !status })}>
                    {input}

                    {status ?
                        <div className="indicator on"></div>
                        :
                        <div className="indicator off"></div>
                    }
                </button>
            </div>
        );
    }
}

export default ChannelComponent;
