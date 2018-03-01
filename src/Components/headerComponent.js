import React from 'react';

const HeaderComonent = () => {
  return (
    <div style={{ display: 'flex', width: '100%', backgroundColor: '#4A4A4A', height: 80, justifyContent: 'center' }}>
      <div style={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
        <div style={{ backgroundColor: 'red', margin: 20 }}>
          sss
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ backgroundColor: 'red', margin: 20 }}>
            sds
          </div>
          <div style={{ backgroundColor: 'blue', margin: 20 }}>
            sdsd
          </div>
        </div>
      </div>
    </div>
  )
};

export default HeaderComonent;