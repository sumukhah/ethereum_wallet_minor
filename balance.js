const Web3 = require("web3");
const web3Instance = require("./web3");

// get balance
const getAccountBalance = async (address) => {
  const balance = await web3Instance.eth.getBalance(address);
  return Web3.utils.fromWei(balance, "ether");
};

module.exports = getAccountBalance;
