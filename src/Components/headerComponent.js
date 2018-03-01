import React from 'react';
import FaIconPack from 'react-icons/lib/fa/play'
import FaIconPackPause from 'react-icons/lib/fa/pause'
import FaIconPackSquare from 'react-icons/lib/fa/square'
import FaIconPackFolder from 'react-icons/lib/md/create-new-folder'
import FaIconPackFace from 'react-icons/lib/md/face'

const HeaderComonent = () => {
  return (
    <div style={{ display: 'flex', width: '100%', backgroundColor: '#4A4A4A', height: 80, justifyContent: 'center' }}>
      <div style={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: 10 }}>
          <FaIconPackFace
            style={{
              padding: 10,
              fontSize: 35,
              color: '#858585'
            }}/>
          <p style={{ color: '#858585', paddingRight: 5 }}>Hye, I see the input genre is</p> <p style={{ color: '#adadad', fontWeight: 'bold'}}> Rock</p>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: '#858585',
          width: 147,
          margin: 20,
          borderRadius: 5
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
        <FaIconPack style={{
          padding: 10,
          fontSize: 30,
          color: '#7a59af'
        }}/>
        <FaIconPackPause style={styles.iconStyle}/>
        <FaIconPackSquare style={styles.iconStyle}/>
        <FaIconPackFolder style={{
          padding: 10,
          fontSize: 35,
          color: '#858585'
        }}/>
      </div>
    </div>
  )
};

const styles = {
  iconStyle: {
    padding: 10,
    fontSize: 30,
    color: '#858585'
  }
};

export default HeaderComonent;