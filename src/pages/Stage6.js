
import React from 'react';
import BottomPageLink from '../components/BottomPageLink';
const Stage6 = () => {
  return <div><h1>Stage 6</h1>
Since Validators or Miners either stake or do computation while also maintaining the full copy of the blockchain.
 They are rewarded for adding blocks<a href="#reflist">[1]</a>.<br/>
Our chain has a block reward, which is added to the balance of the block adder(who also has an account) after every block.<br/>
That transaction is not added in the transaction list, only the balance is updated.



<h3>
  Changes
</h3>
miner_id is now in capital letters and belongs to accounts list<br/>
block_reward(int) is after transaction and before num_miners<br/>

<h4>Input Format</h4>
num_acc(int): number of account<br/>

num_acc lines each having space separated Acc and bal<br/>

&emsp;char(space)int<br/>

num_txn(int): number of transactions num_acc lines each having space separated from Acc, to Acc, amount and incentive<br/>
&emsp;char(space)char(space)int(space)int<br/>
block_reward(int)
char(space)char(space)int(space)int<br/>
num_miners(int)number of miners num_miner lines each having space separated miner_id computation_score, block_hash_score_array space separated 8 values<br/>


&emsp;char(space)int(space)int(space)int(space)int(space)int(space)int(space)int(space)int(space)int(space) // all int values in range 1 to 100



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
1<br/>
3<br/>
D 80 27 22 23 25 28 20 29 24<br/>
E 30 77 16 20 26 19 60 22 15<br/>
C 50 27 38 23 25 28 20 48 24<br/>

<br/>In above example, 1 is block reward<br/>
If C adds the first block then after adding block 1, 
increase balance of C by 1 and use the updated balance for transaction after adding block 1.<br/>

<h4>Example</h4>
<h5>Input</h5>

7<br/>
B 35<br/>
L 20<br/>
O 12<br/>
C 40<br/>
K 13<br/>
E 100<br/>
D 50<br/>
11<br/>
E B 10 12<br/>
O K 20 9<br/>
D B 3 12<br/>
L O 25 3<br/>
B K 100 8<br/>
K L 15 7<br/>
L C 12 1<br/>
L D 25 12<br/>
C E 3 8<br/>
B C 8 9<br/>
C O 5 10<br/>
10<br/>
3<br/>
L 80 27 22 23 25 28 20 29 24<br/>
E 30 77 16 20 26 19 60 22 15<br/>
O 50 27 38 23 25 28 20 48 24<br/>



<h5>Output</h5>
1<br/>
e85b466dc8244a2f46a8fa26adc852359e9abedfee88a5222e176d254c4f500a<br/>
[['E', 'B', 10, 12], ['D', 'B', 3, 12], ['C', 'O', 5, 10], ['B', 'C', 8, 9]]<br/>
e3785c5ca960fc032da650adb4e52d5ffbdfdcd63bca50b83e82e1d7e5a3ce03<br/>
0 O<br/>
2<br/>
746ffaccd9a4ce2d4397cb7d90ef648cbbad23a57d6fb12db0783df265927d6e<br/>
[['O', 'K', 20, 9], ['C', 'E', 3, 8], ['K', 'L', 15, 7], ['L', 'O', 25, 3]]<br/>
06b810c7e67eb1fb1106661f47b2b2d27226459826d9b2a4853cc399c01aba48<br/>
4 L<br/>
3<br/>
b65fa9c290b863dd1b11ab8a420b27e5a4a916cd76d3696158df37c337af27e4<br/>
[['L', 'C', 12, 1]]<br/>
e216d3b5e508e470da1f572d49cf9628c34a1dd7310653c40ebdb15b5ec847d2<br/>
10 L<br/>

<br/>Sealer incentive added to balance after the update
<br/>



 <h2 id = "reflist">References:</h2>
      <ul>
        <li>Investopedia: Block Reward: Definition, How They Provide Incentive, and Future &nbsp; 
          <a href="https://www.investopedia.com/terms/b/block-reward.asp" target="_blank" rel="noopener noreferrer">link</a>
        </li>
        
      </ul>
      <br/>
      <BottomPageLink to="/stage5" text="Previous Section" />
     
      <br/>
      <br/>
      <br/>
      <br/>
  </div>;
};

export default Stage6;
