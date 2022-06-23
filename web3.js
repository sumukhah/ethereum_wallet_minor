const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider(process.env.INFURA_ENDPOINT));

module.exports = web3;
