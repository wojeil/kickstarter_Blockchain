const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');


//listing of all the accounts in the ganach network
let accounts;
//deployed instance of the factory 
let factory;

let campaignAddress;
let campaign;


