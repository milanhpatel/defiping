const Web3 = require('web3');
const web3 = new Web3('https://mainnet.infura.io/v3/ca53d4f9eb5546b8904071d6ddb1fb98');

const decoder = (string) => {
  let result = web3.utils.toAscii(string);
  console.log("RESULT IS: ", result)
}

decoder('0x7342544300000000000000000000000000000000000000000000000000000000');
// 0x7355534400000000000000000000000000000000000000000000000000000000
