import React from 'react';

const Navigation = (): JSX.Element => {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%', zIndex: '10' }}>
        <a href="/" style={{ position: 'absolute', top: 40, left: 90, fontSize: '13px' }}>
        Nick Achee
        <br />
        Building in Public
        </a>
        <div style={{ position: 'absolute', top: 40, right: 40, fontSize: '13px' }}><a href='mailto:nick.achee@compass.com'> email </a></div>
      </div>
  );
};

export default Navigation;
