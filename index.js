// or import { newKit } from '@celo/contractkit/lib/mini-kit'
const { newKit } = require('@celo/contractkit'); 
// Remotely connect to the Alfajores testnet
const kit = newKit('https://alfajores-forno.celo-testnet.org');
// console.log("celo kit",kit);
const generateWallet = async () =>{
    const account = await kit.web3.eth.accounts.create();
    console.log("kit",account);
}

generateWallet();

const getBalance = async (address) =>{
    const balance = await kit.web3.eth.getBalance(address);
    console.log("balance", balance);
}

const address = '0xa6D9710Ab605175bEce1828Fb155Bd158D9D7A0C'

getBalance(address);

