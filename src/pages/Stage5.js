
import React from 'react';
import PageNavigation from '../components/PageNavigation';
const Stage5 = () => {
  return <div><h1>Stage 5</h1>
  Transactions in blockchains are broadcasted to all and added to the transaction pool, Validators or Miners are responsible for processing transactions, adding them to blocks and finally adding new blocks to the blockchain. Some blockchains work on Staking while others on Mining. 
Staking refers to the  use of funds of the chain's cryptocurrency at stake to propose blocks to the network; malicious actors are penalized by reduction in funds<a href="#reflist">[1]</a>. <br/>
Mining works on the computation to solve a complex cryptographic puzzle, since the computation requires electricity, this makes it costly for malicious actors to tweak the chain<a href="#reflist">[2]</a>.<br/>
Our chain has some miners with computation score(com) and block_hash_score_array(bhsa).
block hash score(bhs) is  block numbers MOD 8 index in bhsa.<br/> i.e. bhs = block_hash_score_array[block_number%8]. <br/>
For each block miner with max block sealing score(bss) seals the block. bss[i] = com[i]*bhs. Bhs  miner is i such that bss[i] = max(bss of all miners)<br/>


<h3>
  Changes
</h3>
After transactions a number m is given, that is number of miners<br/>
m lines are given with miner_name(lower case alphabet){"<space>"}computation score{"<space>"}8 spaced values of block_hash_score_array<br/>  
Miner line example: <br/>
y 30 77 16 20 26 19 60 22 15<br/>
example<br/>
x 80 27 22 23 25 28 20 29 24<br/>
y 30 77 16 20 26 19 60 22 15<br/>
z 50 27 38 23 25 28 20 48 24<br/>
block_number 1:<br/> 
block_index  = block_number %8 // 1%8 = 8<br/>
Miner x with score 1760(22*80) // computation score*block_hash_score_array [block_index]<br/>
Miner y with score 480(16*30)<br/>
Miner z with score 1900(38*50)<br/>
selected z with score 1900<br/>
block_number 2:<br/> 
block_index = 2<br/>
Miner x with score 1840<br/>
Miner y with score 600<br/>
Miner z with score 1150<br/>
selected x with score 1840<br/>

<h4>Input Format</h4>
num_acc(int): number of account<br/>

num_acc lines each having space separated Acc and bal<br/>

&emsp;char(space)int<br/>

num_txn(int): number of transactions num_acc lines each having space separated from Acc, to Acc, amount and incentive<br/>
&emsp;char(space)char(space)int(space)int<br/>

char(space)char(space)int(space)int<br/>
num_miners(int)number of miners num_miner lines each having space separated miner_id computation_score, block_hash_score_array space separated 8 values<br/>


char(space)int(space)int(space)int(space)int(space)int(space)int(space)int(space)int(space)int(space) // all int values in range 1 to 100



<h4>Input example</h4>
4<br/>
C 100<br/>
S 90<br/>
E 15<br/>
D 87<br/>
6<br/>
D C 99 2<br/>
C S 5 90<br/>
E C 50 10<br/>
S D 3 90<br/>
S E 60 70<br/>
S D 4 90<br/>
3<br/>
x 80 27 22 23 25 28 20 29 24<br/>
y 30 77 16 20 26 19 60 22 15<br/>
z 50 27 38 23 25 28 20 48 24<br/>

<h4>Output Format</h4>
for each block:
<ul>
 <li>block_number </li>
 <li>block_hash </li>
 <li>transactions </li>
 <li>merkle_root </li> 
 <li>nonce{"<space>"}miner_id</li> 
</ul>
<br/>Hashes in hexadecimal format without 0x
<h4>Output example</h4>
1<br/>
eb1c57dea5abcbca803c58f6d1c38c8296712d2b796c5c8c1d35cefa48226a9f<br/>
[['S', 'D', 3, 90], ['S', 'D', 4, 90], ['C', 'S', 5, 90], ['S', 'E', 60, 70]]<br/>
cc1684adcafdcdf02c975b1408f70d680956f92c6525d630e917caf32a76a909<br/>
33 z<br/>
2<br/>
7da9dcda10f1330e9197e5f98ec9b483ec08c97bcfd4b1dbb3bdea7d70cf3c1f<br/>
[['E', 'C', 50, 10]]<br/>
361aa9b14907c36df985445a178864dd8504062915a592c84cf01335905b2e3e<br/>
6 x<br/>

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
3<br/>
x 80 27 22 23 25 28 20 29 24<br/>
y 30 77 16 20 26 19 60 22 15<br/>
z 50 27 38 23 25 28 20 48 24<br/>





<h5>Output</h5>
1<br/>
9735256cc238c1ca8ce56fec40832fce9d81b761b4cfac113272698e069cf261<br/>
[['I', 'N', 500, 7], ['F', 'A', 1, 6], ['L', 'F', 30, 6], ['N', 'A', 5, 4]]<br/>
e896017093f5c35d328c8d5263475875798a8a2e16186926ad6151bf32ebde5c<br/>
16 z<br/>
2<br/>
763e35e72cd35ef1de8d9fce1f518edd73566bf3b35620159a85c016e267c2f8<br/>
[['F', 'I', 10, 4], ['N', 'F', 21, 2], ['L', 'N', 7, 2], ['A', 'N', 15, 2]]<br/>
c56bc3244da573e94563ce964d7483628d5c3cbaa3c5cdbf01dc2c6bc90ad1c8<br/>
4 x<br/>
3<br/>
6fe0597694198be1a8e1942a95733b130df3ee22fbe96d67120d13b363d7c7af<br/>
[['I', 'A', 2, 1]]<br/>
e0e6a0bb5524492cba5aa537da5d7237c23ee06590235146e38ea5d49e7bb7b5<br/>
4 x<br/>




 <h2 id = "reflist">References:</h2>
      <ul>
        <li>Ethereum: Earn rewards while securing Ethereum &nbsp; 
          <a href="https://ethereum.org/en/staking/" target="_blank" rel="noopener noreferrer">link</a>
        </li>
        <li>
        Bitcoin: Running A Full Node   &nbsp; 
          <a href="https://bitcoin.org/en/full-node#what-is-a-full-node" target="_blank" rel="noopener noreferrer">link</a>
        </li>
      </ul>
      <br/>
      <PageNavigation
        prevLink="/stage4"
        prevText="Previous Stage"
        nextLink="/stage6"
        nextText="Next Stage"
      />
      <br/>
      <br/>
      <br/>
      <br/>
  </div>;
};

export default Stage5;
