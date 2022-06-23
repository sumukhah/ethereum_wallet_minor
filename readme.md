### Have you ever wondered why blockchain wallet is secured?

# Ethereum Wallet Miner

Using this library you can access others private keys!!! sounds fishy? Yeah it should. It just start checking for ethers from private key address starting from 2^0 (i.e 1) and runs for some time(default to 30 seconds, but can be changeable in index.js).It checks the balance in ethereum mainnet and reports it in the console.

Create a project in [infura](http://infura.io/) and get the credentials, replace it in `.env` file

```nodejs
git clone git@github.com:sumukhah/ethereum_wallet_minor.git && cd ethereum_wallet_minor
npm install
node index.js
```

Output

```sh
➜  ethereum_security_check git:(master) ✗ node index.js
0x0000000000000000000000000000000000000000000000000000000000000001 -> 0x7E5F4552091A69125d5DfCb7b8C2659029395Bdf - has 0 ethers
0x0000000000000000000000000000000000000000000000000000000000000002 -> 0x2B5AD5c4795c026514f8317c7a215E218DcCD6cF - has 0.000000000000014 ethers
0x0000000000000000000000000000000000000000000000000000000000000003 -> 0x6813Eb9362372EEF6200f3b1dbC3f819671cBA69 - has 0 ethers
0x0000000000000000000000000000000000000000000000000000000000000004 -> 0x1efF47bc3a10a45D4B230B5d10E37751FE6AA718 - has 0 ethers
0x0000000000000000000000000000000000000000000000000000000000000005 -> 0xe1AB8145F7E55DC933d51a18c793F901A3A0b276 - has 0.000000000000018 ethers
0x0000000000000000000000000000000000000000000000000000000000000006 -> 0xE57bFE9F44b819898F47BF37E5AF72a0783e1141 - has 0.0001 ethers
0x0000000000000000000000000000000000000000000000000000000000000007 -> 0xd41c057fd1c78805AAC12B0A94a405c0461A6FBb - has 0.000000000000014006 ethers
0x0000000000000000000000000000000000000000000000000000000000000008 -> 0xF1F6619B38A98d6De0800F1DefC0a6399eB6d30C - has 0 ethers




FOUND ETHERS IN
┌─────────┬──────────────────────────────────────────────────────────────────────┬────────────────────────┐
│ (index) │                          privateKeyAddress                           │         ethers         │
├─────────┼──────────────────────────────────────────────────────────────────────┼────────────────────────┤
│    0    │ '0x0000000000000000000000000000000000000000000000000000000000000002' │  '0.000000000000014'   │
│    1    │ '0x0000000000000000000000000000000000000000000000000000000000000005' │  '0.000000000000018'   │
│    2    │ '0x0000000000000000000000000000000000000000000000000000000000000006' │        '0.0001'        │
│    3    │ '0x0000000000000000000000000000000000000000000000000000000000000007' │ '0.000000000000014006' │
└─────────┴──────────────────────────────────────────────────────────────────────┴────────────────────────┘



In 30 seconds, You've checked for 80 addresses
It would take around 137598946387450759266255031161047708399235596626833029717859657318 centuries to access 1% wallet addresses...
1454534316992079907677114494302829898512004192672653 light years to complete 1% of search
```

### Caution ⚠️⚠️⚠️:

This project is done only for learning purpose, doesn't promote cyber crimes. If you accidently find some ethers in a wallet don't try to transfer it to your account. It might be dangerous, especially if they have less amount than gas fee(don't transfer to these accounts, they might be running automated scripts which will transfer all your money to their accounts).
