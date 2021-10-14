const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');



//logic to delete the build folder 
const buildPath = path.resolve(__dirname, 'build');
//removeSync comes from fs extra 
fs.removeSync(buildPath);


//Read the Campaign.sol from the contract folder 

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');

//read in source code 

const source = fs.readFileSync(campaignPath, 'utf8');


//Compile both contracts with solidity compiler 

