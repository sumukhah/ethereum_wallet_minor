const getPrivateKey = (decimal) => {
  let hexaEq = String(decimal.toString(16));
  return "0x" + hexaEq.padStart(64, "0");
};

module.exports = getPrivateKey;
