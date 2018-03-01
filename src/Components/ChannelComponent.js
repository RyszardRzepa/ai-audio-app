import React, { Component } from 'react';

class ChannelComponent extends Component {
    render() {
        return (
            <div className="ChannelComponent">
                <button className="view_button">test</button>
                
                <div className="slider">
                    <input type="range" className="slider" />
                </div>

                <button className="toggle_on_off_button">test</button>
            </div>
        );
    }
}

export default ChannelComponent;
