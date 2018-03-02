import React, { Component } from 'react';

class CompressorSliderComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            value: props.value,
            status: props.status
        }
    }

    render() {
        let { slider, input, min, max } = this.props;
        let { value } = this.state;

        return (
            <div className="compressor_slider_component">
                <p>{ slider } </p>
                <input 
                    type="range"
                    min = { min }
                    max = { max }
                    value = { value }
                    className="compressor_slider_input"
                    onChange={(v) => this.setState({ value: v.target.value})} />
            </div>
        );
    }
}

export default CompressorSliderComponent;
