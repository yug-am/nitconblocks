
import React from 'react';
import PageNavigation from '../components/PageNavigation';
const Stage4 = () => {
  return <div><h1>Stage 4</h1>
Blockchain being a decentralized distributed database, requires an agreement on its current state. 
Participants require a consensus on a state, which is done by a protocol i.e. a set of rules called 
consensus mechanism to decide the state of blockchain<a href="#reflist">[1]</a>.<br/>
A consensus mechanism is the system a network’s nodes use to establish agreement between each other.<br/>
Our chain follows a custom Proof Of Work where a number called nonce is added to block properties such that Computed_hash(CH) has zero in the last hexadecimal digit.<br/>
CH = #(block_hash+to_string(nonce)).<br/>

<h3>
  Changes
</h3>
Find minimum nonce {">"}=0, such that CH has zero as the last hexadecimal digit.<br/>
Example:<br/>
block_hash(bh) = 6fe0597694198be1a8e1942a95733b130df3ee22fbe96d67120d13b363d7c7af<br/>
nonce = 4<br/>
Ch = #(bh+to_string(0)) has 0 in the last<br/>
Nonce to_hash + nonce  = one zero in the end<br/>
<h4>Output Format</h4>
for each block:
<ul>
 <li>block_number </li>
 <li>block_hash </li>
 <li>transactions </li>
 <li>merkle_root </li> 
 <li>nonce</li> 
</ul>
<br/>Hashes in hexadecimal format without 0x
<h4>Output example</h4>
1<br/>
9735256cc238c1ca8ce56fec40832fce9d81b761b4cfac113272698e069cf261<br/>
[['I', 'N', 500, 7], ['F', 'A', 1, 6], ['L', 'F', 30, 6], ['N', 'A', 5, 4]]<br/>
e896017093f5c35d328c8d5263475875798a8a2e16186926ad6151bf32ebde5c<br/>
16<br/>
2<br/>
763e35e72cd35ef1de8d9fce1f518edd73566bf3b35620159a85c016e267c2f8<br/>
[['F', 'I', 10, 4], ['N', 'F', 21, 2], ['L', 'N', 7, 2], ['A', 'N', 15, 2]]<br/>
c56bc3244da573e94563ce964d7483628d5c3cbaa3c5cdbf01dc2c6bc90ad1c8<br/>
4<br/>
3<br/>
6fe0597694198be1a8e1942a95733b130df3ee22fbe96d67120d13b363d7c7af<br/>
[['I', 'A', 2, 1]]<br/>
e0e6a0bb5524492cba5aa537da5d7237c23ee06590235146e38ea5d49e7bb7b5<br/>
4<br/>


<h4>Example</h4>
<h5>Input</h5>

5<br/>
F 10<br/>
I 1337<br/>
N 420<br/>
A 39<br/>
L 80<br/>
10<br/>
F I 10 4<br/>
I N 500 7<br/>
N F 21 2<br/>
A L 500 5<br/>
L F 30 6<br/>
L N 7 2<br/>
A N 15 2<br/>
N A 5 4<br/>
F A 1 6<br/>
I A 2 1<br/>




<h5>Output</h5>
1<br/>
9735256cc238c1ca8ce56fec40832fce9d81b761b4cfac113272698e069cf261<br/>
[['I', 'N', 500, 7], ['F', 'A', 1, 6], ['L', 'F', 30, 6], ['N', 'A', 5, 4]]<br/>
e896017093f5c35d328c8d5263475875798a8a2e16186926ad6151bf32ebde5c<br/>
16<br/>
2<br/>
763e35e72cd35ef1de8d9fce1f518edd73566bf3b35620159a85c016e267c2f8<br/>
[['F', 'I', 10, 4], ['N', 'F', 21, 2], ['L', 'N', 7, 2], ['A', 'N', 15, 2]]<br/>
c56bc3244da573e94563ce964d7483628d5c3cbaa3c5cdbf01dc2c6bc90ad1c8<br/>
4<br/>
3<br/>
6fe0597694198be1a8e1942a95733b130df3ee22fbe96d67120d13b363d7c7af<br/>
[['I', 'A', 2, 1]]<br/>
e0e6a0bb5524492cba5aa537da5d7237c23ee06590235146e38ea5d49e7bb7b5<br/>
4<br/>



 <h2 id = "reflist">References:</h2>
      <ul>
        <li>Faster Capital: Consensus Mechanisms Unveiled: PoS vs: PoW vs: PoA&nbsp; 
          <a href="https://fastercapital.com/content/Consensus-Mechanisms-Unveiled--PoS-vs--PoW-vs--PoA.html" target="_blank" rel="noopener noreferrer">link</a>
        </li>
        <li>
        CoinDesk: A (Short) Guide to Blockchain Consensus Protocols  &nbsp; 
          <a href="https://www.coindesk.com/markets/2017/03/04/a-short-guide-to-blockchain-consensus-protocols/" target="_blank" rel="noopener noreferrer">link</a>
        </li>
      </ul>
      <br/>
      <PageNavigation
        prevLink="/stage3"
        prevText="Previous Stage"
        nextLink="/stage5"
        nextText="Next Stage"
      />
      <br/>
      <br/>
      <br/>
      <br/>
  </div>;
};

export default Stage4;
