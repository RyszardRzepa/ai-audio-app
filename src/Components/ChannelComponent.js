import React, { Component } from 'react';
import FaIconPackRemoveRedEye from 'react-icons/lib/md/remove-red-eye'

class ChannelComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            value: props.value,
            status: props.status
        }
    }

    render() {
        let { channel, input, min, max } = this.props;
        let { value } = this.state;

        return (
            <div className="channel_component">
                <button className="view_button">
                    <FaIconPackRemoveRedEye
                    style={{
                        padding: 10,
                        fontSize: 18,
                        color: '#858585'
                    }} />
                </button>
                
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

                <button className="toggle_on_off_button" onClick={() => this.setState({ status: !this.state.status })}> 
                    { input }

                    {this.state.status ?
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
