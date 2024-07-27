import React from 'react';
import nitc_blc from '../images/introduction/logo_nitc_blc.jpg'
import BottomPageLink from '../components/BottomPageLink';
const Introduction = () => {
  return (
    <div>
      <h1>Introduction</h1>
      <img src={nitc_blc} width="250px" alt = "Four transaction merkle tree"></img> 

      <p>
      NITC on blocks is a custom blockchain implementation project aimed at understanding blockchains.
The project is planned in six stages and is programming language independent.
The end result is a custom blockchain with native cryptocurrency with miners and simulated block sealing by miners 
with transactions stored in Merkle Tree.<br/>
The blockchain is Proof of Work based with simulated miner block sealing and block reward system.
<br/>
<br/>
<br/>
     </p>
     <div style={{ display: 'flex' }}>
      <BottomPageLink to="/about-us" text="About Us" />
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
    
  );
};

export default Introduction;
