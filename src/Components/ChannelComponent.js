import React, { Component } from 'react';
import FaIconPackRemoveRedEye from 'react-icons/lib/md/remove-red-eye'
import { Link } from 'react-router-dom'

class ChannelComponent extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            value: 0,
            status: props.status,
            showButtons: props.showButtons,
            volume: props.volume
        };

        // var interval = setInterval(() => {
        //     this.setState({ value: this.state.value += 1 })

        //     console.log(this.state.value, this.state.volume)
        //     if (this.state.value == this.state.volume) {
        //         clearInterval(interval);
        //     }
        // }, 80);
    }

    render() {
        let { channel, input, min, max } = this.props;
        let { value, showButtons, status } = this.state;

        if(!status) {
            status = false;
        }
    
        return (
            <div className="channel_component">

                {showButtons &&
                    <Link
                        id='channel'
                        className="view_button"
                        to={{ pathname: `/channel/${channel}/${input}/${value}/${status}` }}>
                        
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
                        value = { value }
                        className="slider"
                        onChange={(v) => this.setState({ value: v.target.value})} />
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
