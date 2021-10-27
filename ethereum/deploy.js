const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  'forward history amazing cause attend world ticket strong prison manual skin cost', 'https://rinkeby.infura.io/v3/c3233d34ba6446749916d2373f37a87e'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '1000000', gasPrice: '5000000000', from: accounts[0] });
   
  console.log("Contract deployed to", result.options.address);

  //deployed to 0xF2E60B634B8f3D9c73feB6102228363532b21DB6 - 0x2400764807f8b62702365ef7Dd54777053D645A9
};
deploy();