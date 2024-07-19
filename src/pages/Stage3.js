
import React from 'react';
import PageNavigation from '../components/PageNavigation';
import img_four_txn from '../images/stage_3/img_four_txn.png'
const Stage3 = () => {
  return <div><h1>Stage 3</h1>
Blockchain protocols often evolve with time. The protocols change for performance issues, scalability, 
security or other improvements<a href="#reflist">[1]</a><a href="#reflist">[2]</a>.<br/>
For scaling up our chain we now include up to four transactions per block.
<h3>
  Changes
</h3>
<h4>Transaction Hash</h4>
A Block can now have up to four transactions per block instead of three.
<br/>Merkle tree with four transactions<br/>

<img src={img_four_txn} width="250px" alt = "Four transaction merkle tree"></img> 

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
9735256cc238c1ca8ce56fec40832fce9d81b761b4cfac113272698e069cf261<br/>
[['I', 'N', 500, 7], ['F', 'A', 1, 6], ['L', 'F', 30, 6], ['N', 'A', 5, 4]]<br/>
e896017093f5c35d328c8d5263475875798a8a2e16186926ad6151bf32ebde5c<br/>
2<br/>
763e35e72cd35ef1de8d9fce1f518edd73566bf3b35620159a85c016e267c2f8<br/>
[['F', 'I', 10, 4], ['N', 'F', 21, 2], ['L', 'N', 7, 2], ['A', 'N', 15, 2]]<br/>
c56bc3244da573e94563ce964d7483628d5c3cbaa3c5cdbf01dc2c6bc90ad1c8<br/>
3<br/>
6fe0597694198be1a8e1942a95733b130df3ee22fbe96d67120d13b363d7c7af<br/>
[['I', 'A', 2, 1]]<br/>
e0e6a0bb5524492cba5aa537da5d7237c23ee06590235146e38ea5d49e7bb7b5<br/>



 <h2 id = "reflist">References:</h2>
      <ul>
        <li>Ethereum: The history of Ethereum&nbsp; 
          <a href="https://ethereum.org/en/history/" target="_blank" rel="noopener noreferrer">link</a>
        </li>
        <li>
        Investopedia: A History of Bitcoin Hard Forks &nbsp; 
          <a href="https://www.investopedia.com/tech/history-bitcoin-hard-forks/" target="_blank" rel="noopener noreferrer">link</a>
        </li>
      </ul>
      <br/>
      <PageNavigation
        prevLink="/stage2"
        prevText="Previous Stage"
        nextLink="/stage4"
        nextText="Next Stage"
      />
      <br/>
      <br/>
      <br/>
      <br/>
  </div>;
};

export default Stage3;
