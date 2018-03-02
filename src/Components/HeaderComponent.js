import React from 'react';
import FaIconPack from 'react-icons/lib/fa/play'
import FaIconPackPause from 'react-icons/lib/fa/pause'
import FaIconPackSquare from 'react-icons/lib/fa/square'
import FaIconPackFolder from 'react-icons/lib/md/create-new-folder'
import FaIconPackFace from 'react-icons/lib/md/face'

class HeaderComonent extends React.Component {
  state = {
    play: false,
  };

  render() {
    return (
      <div style={{
        display: 'flex',
        width: '100%',
        backgroundColor: '#4A4A4A',
        height: 80,
        justifyContent: 'center',
        marginBottom: 20
      }}>
        <div style={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: 10 }}>
            <FaIconPackFace
              style={{
                padding: 10,
                fontSize: 35,
                color: '#858585'
              }}/>
            <p style={{ color: '#858585', paddingRight: 5 }}>Hey, I see the input genre is</p> <p
            style={{ color: '#adadad', fontWeight: 'bold' }}> Rock</p>
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: '#858585',
            width: 147,
            margin: 20,
            borderRadius: 5,
            cursor: 'pointer'
          }}>
            <div className='rightButton'>
              Original
            </div>
            <div className='leftButton'>
              Mixed
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingRight: 10 }}>
          <FaIconPack
            className="button"
            onClick={() => this.props.onPlay(!this.state.play)}
            style={{
              padding: 10,
              fontSize: 30,
              color: '#7a59af',
              cursor: 'pointer'
            }}/>
          <FaIconPackPause className="button"  style={styles.iconStyle}onClick={() => this.props.onPlay(!this.state.play)}/>
          <FaIconPackSquare className="button" style={styles.iconStyle} />
          <FaIconPackFolder className="button" style={styles.iconStyle}/>
        </div>
      </div>
    )
  }
};

const styles = {
  iconStyle: {
    padding: 10,
    fontSize: 30,
    color: '#858585',
    cursor: 'pointer'
  }
};

export default HeaderComonent;