require("dotenv").config();
const web3 = require("./web3.js");
const getAccountBalance = require("./balance");
const getPrivateKey = require("./getPrivateKey");
const colors = require("colors");
const moment = require("moment");

const timeLimit = 300000;
let isTimeUp = false;
const foundEthers = [];
let checkCount = 0;

// starts with 2^0, You can give upto 2^256
// this is a decimal equivalent
let currentAddress = BigInt("1158898938490089100834791898982198749187290910012940187629301810397741093829");

setTimeout(() => {
  isTimeUp = true;
}, timeLimit);

const generateResult = () => {
  console.log("\n\n\n");
  console.log(colors.bold("FOUND ETHERS IN").magenta);
  console.table(foundEthers);
  console.log("\n\n");
  console.log(
    `In ${timeLimit / 1000} seconds, You've checked for ${checkCount} addresses`
      .bgBlue
  );
  let timeRequired = String((timeLimit * 16 ** 64) / checkCount);
  timeRequired = BigInt(moment.duration(timeRequired).years() / 100);
  // converting to 100% -> 1%, years -> century
  console.log(
    `It would take around ${
      timeRequired / BigInt(100)
    } centuries to access 1% wallet addresses...`.bgYellow
  );

  console.log("So no luck huh?".red);
};

const init = async () => {
  const privateKey = getPrivateKey(currentAddress);
  const account = web3.eth.accounts.privateKeyToAccount(privateKey);
  const balance = await getAccountBalance(account.address);

  if (balance > 0) {
    foundEthers.push({ privateKeyAddress: privateKey, ethers: balance });
    console.log(
      `${privateKey} -> ${account.address} - has ${balance} ethers`.green
    );
  } else {
    console.log(
      `${privateKey} -> ${account.address} - has ${balance} ethers`.gray
    );
  }
  checkCount++;
  currentAddress++;

  if (!isTimeUp) {
    init();
  } else {
    generateResult();
  }
};

init();
