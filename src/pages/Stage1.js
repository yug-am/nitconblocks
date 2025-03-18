import React from 'react';
import img_one_txn from '../images/stage_1/img_one_txn.png';
import img_two_txn from '../images/stage_1/img_two_txn.png';
import img_three_txn from '../images/stage_1/img_three_txn.png';
import blc_diag from '../images/stage_1/blockchain_diagram_detailed.jpg';
import BottomPageLink from '../components/BottomPageLink.js';
const Stage1 = () => {

  return <div><h1>Stage 1</h1>
<br/>
Blockchain may be defined as a distributed ledger<a href="#reflist">[1]</a>. It is a distributed database
 that is maintained by multiple devices across the network, who maintain and agree upon the identical copies of that database.<br/>
As a data structure, blockchain may be defined as a chain of blocks where information is 
organized into a block structure and the data in the block along with the hash of the previous block is hashed into the block hash<a href="#reflist">[2]</a>.<br/>
These block chain up like a linked list and due to use of the hash of the previous block 
(which already had the hash of the previous block), as we move ahead in the change it becomes
 difficult to change the past blocks because all blocks ahead will change. <br/>
 <img src={blc_diag} width="500px" alt = "Blockchain diagram"></img> 

<h3>
  Setup
</h3>
Our chain NITChained has some accounts with initial balance. 
Blockchain has blocks which can have at most three transactions and has other attributes like block number, hash of previous block, root of merkle tree constructed from transactions in the block. 
Transactions are given, the transactions contain to, from, amount and extra data. 
If the Transaction can be executed update the balances and added to the merkle tree, else it is discarded. Transactions are included in the given order.
<h4>Accounts (acc)</h4>
char: Characters represent accounts i.e. 'A' to 'Z' 
example: 'V', 'W', 'X', 'Y'
<h4>Balances(bal)</h4>
map(char={'>'}int): acc[char] as key and account balance(bal)[int] as value
acc ={'>'} bal
example:{"{'V': 107, 'W': 135, 'X': 70, 'Y': 88}"}
<h4>Transaction(txn)</h4>
char char int int: Format: From(acc) To(acc) Amount(amt) extra_data(int)<br/>
<b>Transaction Execute</b>
<br/>If From.balance{'>'}=amt:&emsp;						//from has sufficient balance
<br/>&emsp;	from_bal-=amt&emsp;							//execute txn
<br/>&emsp;	to_bal+=amt&emsp;

<br/>else
<br/>&emsp;	continue&emsp;						// discard txn

<h4>Example 1 </h4>
<h5>Initial Balances:</h5>
  <table>
        <thead>
          <tr>
            <th>Account</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>V</td>
            <td>₹100</td>
          </tr>
          <tr>
            <td>Y</td>
            <td>₹100</td>
          </tr>
        </tbody>
      </table>
<h5>Transaction</h5>
V Y 10 200
<br/>
<h5>Result</h5>
✅ Executed
<h5>Updated Balances:</h5>
  <table>
        <thead>
          <tr>
            <th>Account</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>V</td>
            <td>₹90</td>
          </tr>
          <tr>
            <td>Y</td>
            <td>₹110</td>
          </tr>
        </tbody>
      </table>

      <h4>Example 2 </h4>
<h5>Initial Balances:</h5>
  <table>
        <thead>
          <tr>
            <th>Account</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>V</td>
            <td>₹100</td>
          </tr>
          <tr>
            <td>Y</td>
            <td>₹100</td>
          </tr>
        </tbody>
      </table>
<h5>Transaction</h5>
V Y 200 404
<br/>
<h5>Result</h5>
 ❌ Not executed
<h4>Block</h4>
<h5> Attributes</h5>
<ul>
  <li>
    <b>block_numnber:</b> current block number
  </li>
  <li>
    <b>merkle_root:</b>  root of <a href="https://www.shiksha.com/online-courses/articles/merkle-tree-in-blockchain/">merkle_tree</a> 
  </li>
  <li>
    <b>block_hash:</b> SHA3(<a href="https://www.techopedia.com/definition/sha-256">sha256</a>) hash hexadecimal string of previous block hash, current block_number and current merkle root i.e.
    <br/>prev_block_hash+curr_block_number+current_merkle_root in utf-8 encoding 
     <br/>prevBlockHash = #(prev_block_hash+curr_block_number+current_merkle_root)
  
  </li>
  <li>
    <b>transactions:</b> array of transactions(at most 3)
  </li>
</ul>

For first block(genesis block) prev_block_hash is '0' and curr_block_number ='1'.
<br/>Example<br/>
First block:
<ul>
  <li>
  prev_block_hash='0'
  </li>
  <li>
  curr_block_number ='1'
  </li>
  <li>
  current_merkle_root = '06db389df413034fc043dad173d3f8f1f993de4bec3ee456d4f5863e1fa331c7'

  </li>
  <li>
  block_hash = #('0106db389df413034fc043dad173d3f8f1f993de4bec3ee456d4f5863e1fa331c7')

  </li>
  </ul>
<h4>Merkle Tree</h4>
<h5>Hash</h5>
Hash(#t) of a transaction(txn) is SHA256 Hash of utf-8 encoding concatenation of sender, receiver and amount in string
<br/>Hash of a transaction = sender + receiver + amount(in string) {"{concatenate}"}
<br/>for transaction V Y 80 4
<br/>#t = SHA3_256('VY80')
<br/>Hash of leaf node is Hash of transaction(#t)
<br/>Hash(#n) of non leaf node is SHA 3 256 Hash of child node or concatenation of hashes of children nodes utf-8 encoding<a href="#reflist">[3]</a>.
<br/>if node(Nd) is leaf node:
<br/>&emsp;Nd.node_hash = #t(txn)
<br/>if node(Nd) has single child(Ch):
<br/>&emsp;Nd.node_hash = #n(Ch)
<br/>if node(Nd) has two children(Lf and Rt):
<br/>&emsp;Nd.node_hash = #n(Lf+Rt)

<br/><b>Example:</b>
<br/>+ is concatenation
<br/>One Transaction<br/>
<img src={img_one_txn} width="250px" alt = "Single transaction merkle tree"></img> 
<br/>Two Transaction<br/>
<img src={img_two_txn} width="250px" alt = "Two transaction merkle tree"></img> 
<br/>Three Transaction<br/>
<img src={img_three_txn} width="250px" alt = "Three transaction merkle tree"></img> 


<h5>Input Format</h5>
num_acc(int): number of account<br/>

num_acc lines each having space separated Acc and bal<br/>

&emsp;char(space)int<br/>

num_txn(int): number of transactions num_acc lines each having space separated from Acc, to Acc, amount and extra data<br/>

&emsp;char(space)char(space)int(space)int<br/>


<h4>Input example</h4>
4<br/>
N 40<br/>
I 30<br/>
T 50<br/>
C 60<br/>
6<br/>
N T 5 3<br/>
I C 8 5<br/>
N C 37 100<br/>
T I 12 7<br/>
C I 16 15<br/>
T C 45 3<br/>
<h4>Output Format</h4>
for each block:
<ul>
 <li>block_number </li>
 <li>block_hash </li>
 <li>transactions </li>
 <li>merkle_root </li> 
</ul>
<br/>Hashes in hexadecimal format without 0x
<h4>Output example</h4>
1<br/>
d0f8ab12955d1d64ce5a6fda8caf11846ad5470abff2e04f5fa0b9f5147b4e12<br/>
[['N', 'T', 5, 3], ['I', 'C', 8, 5], ['T', 'I', 12, 7]]<br/>
f43c8dc371d5680eaa5fd97be71534e48a9efba24ee9b901c02320b9a19a15d6<br/>
2<br/>
8d51c93605f73c9d86ba124b1c1387a8974b8b65467c01a0a31e7668b2144987<br/>
[['C', 'I', 16, 15]]<br/>
1f6754ebc362477459b7255c537a3c54d9ac127baf1208b30601cd807b5d9db50<br/>
<h4>Example</h4>
<h5>Input</h5>
4<br/>
N 40<br/>
I 30<br/>
T 50<br/>
C 60<br/>
6<br/>
N T 5 3<br/>
I C 8 5<br/>
N C 37 100<br/>
T I 12 7<br/>
C I 16 15<br/>
T C 45 3<br/>

<h5>Output</h5>
1<br/>
d0f8ab12955d1d64ce5a6fda8caf11846ad5470abff2e04f5fa0b9f5147b4e12<br/>
[['N', 'T', 5, 3], ['I', 'C', 8, 5], ['T', 'I', 12, 7]]<br/>
f43c8dc371d5680eaa5fd97be71534e48a9efba24ee9b901c02320b9a19a15d6<br/>
2<br/>
8d51c93605f73c9d86ba124b1c1387a8974b8b65467c01a0a31e7668b2144987<br/>
[['C', 'I', 16, 15]]<br/>
1f6754ebc362477459b7255c537a3c54d9ac127baf1208b30601cd807b5d9db50<br/>





 <h2 id = "reflist">References:</h2>
      <ul>
        <li>Forbes: What Is Blockchain?&nbsp; 
          <a href="https://www.forbes.com/sites/digital-assets/article/what-is-a-blockchain/" target="_blank" rel="noopener noreferrer">link</a>
        </li>
        <li>
        Investopedia: Blockchain Facts&nbsp; 
          <a href="https://www.investopedia.com/terms/b/blockchain.asp" target="_blank" rel="noopener noreferrer">link</a>
        </li>
        <li>
        SHA3-256 - Browser Ling&nbsp;
          <a href="https://www.browserling.com/tools/sha3-hash" target="_blank" rel="noopener noreferrer">link</a>
        </li>
      </ul>
      <br/>
      <div style={{ display: 'flex' }}>
      <BottomPageLink to="/stage2" text="Next Section" />
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
  </div>;
};

export default Stage1;
