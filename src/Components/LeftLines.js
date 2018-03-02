import React from 'react';

const LeftLines = () => {
  return (
    <div style={{ height: 265,  display: 'flex', flexDirection: 'row' }}>
      <div style={{ height: 266, backgroundColor: '#929292', width: 2, }}/>
      <div>
        <div style={{ marginTop: 0,
          height: 2,
          backgroundColor: '#929292',
          width: 10, }}/>
        <div style={styles.leftLineLong}/>
        <div style={styles.leftLineShort}/>
        <div style={styles.leftLineLong}/>
        <div style={styles.leftLineShort}/>
        <div style={styles.leftLineLong}/>
        <div style={styles.leftLineShort}/>
        <div style={styles.leftLineLong}/>
        <div style={styles.leftLineShort}/>
        <div style={styles.leftLineLong}/>
        <div style={styles.leftLineShort}/>
        <div style={styles.leftLineLong}/>
        <div style={styles.leftLineShort}/>
      </div>
    </div>
  )
};

const styles = {
  leftLineLong: {
    marginTop: 20,
    height: 2,
    backgroundColor: '#929292',
    width: 20,
  },

  leftLineShort: {
    marginTop: 20,
    height: 2,
    backgroundColor: '#929292',
    width: 13,
  }
}

export default LeftLines;