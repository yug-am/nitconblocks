
import React from 'react';
import PageNavigation from '../components/PageNavigation';
const Stage2 = () => {
  return <div><h1>Stage 2</h1>
Blockchain transactions travel across networks and thus may not be received in the same order.
Whenever a user initiates a transaction, the transaction goes to an unconfirmed pool. 
Once they are confirmed and validated they are added to the Blockchain<a href="#reflist">[1]</a>.<br/>
Since Blockchains require computation, transactions often have some incentive to be added to the next block like some transaction fees <a href="#reflist">[2]</a>.<br/>
 field described in the previous stage can be renamed are incentive field.
In our chain, transactions are ordered by incentive in descending, then receiver in ascending, in case of tie by the given order.<br/>
Transaction Hash is now calculated in the way described below.<br/>
<h3>
  Changes
</h3>
<h4>Transaction Hash</h4>
Hash(#t) of a transaction(txn) is SHA256 Hash of utf-8 encoding concatenation of sender, receiver and amount in string
<br/>Hash of a transaction = sender + incentive(in string) + receiver + amount(in string) {"{concatenate}"}
<br/>for transaction V Y 80 4
<br/>#t = SHA256('V4Y80')

<h4>Transaction order</h4>
<ul>
 <li>First order by Incentive(Highest first)
</li>
 <li>If same Incentive, order by Receiver(Lowest ASCII value first)
</li>
 <li>If both are same, use the given order as tie-breaker
</li> 
</ul>




<h5>Input Format</h5>
num_acc(int): number of account<br/>

num_acc lines each having space separated Acc and bal<br/>

&emsp;char(space)int<br/>

num_txn(int): number of transactions num_acc lines each having space separated from Acc, to Acc, amount and extra data<br/>

&emsp;char(space)char(space)int(space)int<br/>


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
4becd06c9078e137cfc0df4e39bcf4e69a31dead7396a74c64b35eb567127bdd<br/>
[['S', 'D', 3, 90], ['S', 'D', 4, 90], ['C', 'S', 5, 90]]<br/>
400c77ac72d9006f223a5f219597a05d2c7950e97cbe899cd525e414af25fbb0<br/>
2<br/>
2a12231b95b012d6aaf9bbdf7c7aba920a47463d5de1a9980c35f896e8141a3e<br/>
[['S', 'E', 60, 70], ['E', 'C', 50, 10]]<br/>
7f3bcea5a7fc091e3b630f35f2e326806794d1a6399b4fbce4668423ee5fe0f0<br/>

<h4>Example</h4>
<h5>Input</h5>
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


<h5>Output</h5>
1<br/>
4becd06c9078e137cfc0df4e39bcf4e69a31dead7396a74c64b35eb567127bdd<br/>
[['S', 'D', 3, 90], ['S', 'D', 4, 90], ['C', 'S', 5, 90]]<br/>
400c77ac72d9006f223a5f219597a05d2c7950e97cbe899cd525e414af25fbb0<br/>
2<br/>
2a12231b95b012d6aaf9bbdf7c7aba920a47463d5de1a9980c35f896e8141a3e<br/>
[['S', 'E', 60, 70], ['E', 'C', 50, 10]]<br/>
7f3bcea5a7fc091e3b630f35f2e326806794d1a6399b4fbce4668423ee5fe0f0<br/>


 <h2 id = "reflist">References:</h2>
      <ul>
        <li>Medium, Karthik Margabandu :Order of Transactions and How Blockchain avoids Double Spend
        &nbsp; 
          <a href="https://medium.com/@karthikmargabandu7/order-of-transactions-and-how-blockchain-avoids-double-spend-9daf9f697b8f" target="_blank" rel="noopener noreferrer">link</a>
        </li>
        <li>
        Investopedia: Gas (Ethereum): How Gas Fees Work on the Ethereum Blockchain &nbsp; 
          <a href="https://www.investopedia.com/terms/g/gas-ethereum.asp" target="_blank" rel="noopener noreferrer">link</a>
        </li>
        <li>
        River: How Bitcoin Fees Work&nbsp;
          <a href="https://river.com/learn/how-bitcoin-fees-work/" target="_blank" rel="noopener noreferrer">link</a>
        </li>
      </ul>
      <br/>
      <PageNavigation
        prevLink="/stage1"
        prevText="Previous Stage"
        nextLink="/stage3"
        nextText="Next Stage"
      />
      <br/>
      <br/>
      <br/>
      <br/>
  </div>;
};

export default Stage2;
