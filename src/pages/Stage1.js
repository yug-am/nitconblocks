// src/pages/Stage1.js
import React from 'react';
import { Link } from 'react-scroll';
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

<h4>Example</h4>
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
Result ✅ Executed
 
 <h2 id = "reflist">References:</h2>
      <ul>
        <li>Forbes: What Is Blockchain?&nbsp; 
          <a href="https://www.forbes.com/what-is-blockchain" target="_blank" rel="noopener noreferrer">link</a>
        </li>
        <li>
        Investopedia: Blockchain Facts&nbsp; 
          <a href="https://www.investopedia.com/blockchain-facts" target="_blank" rel="noopener noreferrer">link</a>
        </li>
        <li>
        SHA3-256 - Online Tools&nbsp;
          <a href="https://www.tools4noobs.com/sha256" target="_blank" rel="noopener noreferrer">link</a>
        </li>
      </ul>
      <br/>
      <br/>
      
  </div>;
};

export default Stage1;
