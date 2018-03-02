import React from 'react';

import CompressoeSlideComponent from './CompressorSliderComponent';
import LeftLine from './LeftLines';

export default class CompressorComponent extends React.Component {
  render() {
    return (
      <div style={styles.MainContainer}>
        <div style={{ flex: 0.5, marginTop: -50, marginLeft: -50  }}>
          <p style={{ fontSize: 20, color: '#929292' }}>Compressor</p>
        </div>
        <div>
          <p style={{ color: '#fff', marginBottom: -30, marginLeft: -40 }}>Threshold</p>
          <div style={styles.container}>
            <LeftLine/>
            <div style={{ marginTop: -50 }}>
              <CompressoeSlideComponent/>
            </div>
          </div>
        </div>
        <div>
          <p style={{ color: '#fff', marginBottom: -30, marginLeft: -40 }}>Gain</p>
          <div style={styles.container}>
            <LeftLine/>
            <div style={{ marginTop: -50 }}>
              <CompressoeSlideComponent/>
            </div>
          </div>
        </div>
        <div>
          <p style={{ color: '#fff', marginBottom: -30, marginLeft: -40 }}>Ratio</p>
          <div style={styles.container}>
            <LeftLine/>
            <div style={{ marginTop: -50 }}>
              <CompressoeSlideComponent/>
            </div>
          </div>
        </div>
        <div>
          <p style={{ color: '#fff', marginBottom: -30, marginLeft: -40 }}>Attack</p>
          <div style={styles.container}>
            <LeftLine/>
            <div style={{ marginTop: -50 }}>
              <CompressoeSlideComponent/>
            </div>
          </div>
        </div>
        <div>
          <p style={{ color: '#fff', marginBottom: -30, marginLeft: -40 }}>Release</p>
          <div style={styles.container}>
            <LeftLine/>
            <div style={{ marginTop: -50 }}>
              <CompressoeSlideComponent/>
            </div>
          </div>
        </div>
        <div style={{ flex: 1 }} />
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    margin: 50,
  },
  MainContainer: {
    justifyContent: 'center',
    padding: 80,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#4A4A4A',
  }
}