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


beforeEach(async ()=>{
    accounts = await web3.eth.getAccounts();

    factory= await new web3.eth.Contract(JSON.parse(compiledFactory.interface)).deploy({data: compiledFactory.bytecode}).send({ from: accounts[0], gas: '1000000'});

    //deploy the instance via chaining deploy


    //create an instance of a campaign 
    await factory.methods.createCampaign('100').send({from: accounts[0],
    gas: '1000000'});

    [campaignAddress] = await factory.methods.getDeployedCampaigns().call();

    campaign = await new web3.eth.Contract(
JSON.parse(compiledCampaign.interface), campaignAddress
    );
});


describe('Campaigns', () => {
it('deploys a factory and a campaign',()=>{

assert.ok(factory.options.address);
assert.ok(campaign.options.address);

});


//This test will confirm that the person creating the campaign is the manager 
it('marks caller as the campaign manager', async () =>{
    const manager = await campaign.methods.manager().call();

    assert.equal(accounts[0], manager)
});


it('allows people to contribute money and marks them as approvers', async()=>{

    await campaign.methods.contribute().send({
        value:'200',
        from: accounts[1]
    });

    const isContributor = await campaign.methods.approvers(accounts[1]).call();

    assert(isContributor);
});


it('Minimum amount contribution is required', async()=>{

    try {
        await campaign.methods.contribute().send({
            value: '5',
            from: accounts[1]
        });
        assert(false);
    } catch(err) {
        assert(err);
    }

});

it('Allows a manager to make a payment request',async()=>{

    await campaign.methods.createRequest('Buy Batts', '100', accounts[1]).send({
        from: accounts[0],
        gas: '1000000'
    });

    const request = await campaign.methods.requests(0).call();

    assert.equal('Buy Batts', request.description);

});


});