import React, { Component } from 'react';
import FaIconPackRemoveRedEye from 'react-icons/lib/md/remove-red-eye'

class ChannelComponent extends Component {
    render() {
        let { channel } = this.props;

        return (
            <div className="ChannelComponent">
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
                    <input type="range" className="slider" />
                </div>

                <button className="toggle_on_off_button">test</button>
            </div>
        );
    }
}

export default ChannelComponent;
