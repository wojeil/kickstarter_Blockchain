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

const output = solc.compile(source, 1).contracts;

// Create build folder and write output to the build directory 

fs.ensureDirSync(buildPath);

//loop over output to place both contracts in seperate files inside the build folder 


// console.log(output);

for (let contract in output) {
    fs.outputJsonSync(
        path.resolve(buildPath, contract.replace(':', '') + '.json'),output[contract]
    );
}