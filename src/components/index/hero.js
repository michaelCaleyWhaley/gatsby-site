import React from 'react';
import humberBridge from '../../images/humber_bridge.jpg';

class Hero extends React.Component {
  render(){
    return (
      <div className="hero">
        <img src={humberBridge} alt="humber bridge"></img>
      </div>
    );
  }
}

export default Hero;