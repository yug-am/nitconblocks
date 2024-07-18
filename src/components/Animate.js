import React from 'react';
import './AnimateComponent.css'; // Import your CSS for styling
import hammerSvg from '../images/svg/hammer-svgrepo-com_no_color.svg'
import blcSvg from '../images/svg/blockchain-icon.svg'
const AnimateComponent = () => {
  return (
    <center>
        <br/>
        <br/>
    <div className="hammer-container" >
      <svg className="hammer-svg">
        <image xlinkHref={hammerSvg} width="50" height="50" x="40%" y="10%" className="hammer-swing"  />
        <image xlinkHref={blcSvg} width="100" height="100" x="30%" y="25%"  />
              </svg>
              Work in Progress
      
    </div>

    </center>
  );
};

export default AnimateComponent;
