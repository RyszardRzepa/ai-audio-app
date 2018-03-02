import React, { Component } from 'react';
import SoundWaveComponent from './SoundWaveComponent';

const colors = {
    originalColour: '#6a6a6a',
    mixedColour: '#7a59af'
};

class WaveHeadComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            playOriginal: props.playOriginal,
            playMixed: props.playMixed

        }
    }
    render() {
        const { playOriginal, playMixed } = this.state;
        console.log('wave', this.props)
        return (
            <div>
                <SoundWaveComponent
                    play={playOriginal}
                    waveColor={colors.originalColour}
                    progressColor='transparent'
                    cursorColor='transparent'
                    url='https://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3' />

                <div style={{ position: 'absolute', top: 100, left: 0, right: 0 }}>
                    <SoundWaveComponent
                        play={playMixed}
                        waveColor={colors.originalColour}
                        progressColor={colors.mixedColour}
                        cursorColor={colors.mixedColour}
                        url='https://wavesurfer-js.org/example/split-channels/stereo.mp3' />
                </div>
            </div>
        );
    }
}

export default WaveHeadComponent;
