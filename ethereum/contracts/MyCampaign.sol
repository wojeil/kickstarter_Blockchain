pragma solidity ^0.4.17;

contract CampaignFactory {
    //array that will store all the deployed campaigns
    address[] public deployedCampaigns;
    
    
    // Function that will allow users to create a new instance of a Campaign
    function createCampaign(uint minimum) public {
        //call out the contract below to deploy in the blockchain
       address newCampaign = new Campaign(minimum, msg.sender);
       //push deploy address into the array
       deployedCampaigns.push(newCampaign);
    }
    
    
    //adding a function to deploy campaigns 
    function getDeployedCampaigns() public view returns (address[]){
        
        return deployedCampaigns;
    }
    
}



contract Campaign {
   //struct definition 
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }
    
    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    // address[] public approvers; replacing with mapping 
    mapping(address => bool) public approvers;
    //new var to track number of addresses
    uint public approversCount;


    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
    
    function Campaign(uint minimum, address creator) public {
        manager = creator;
        minimumContribution = minimum;
    }
    
    function contribute() public payable {
        require(msg.value > minimumContribution);
        
        // approvers.push(msg.sender); refactor to work with a mapping 
        // msg.sender doesnt get stored in the mapping only the value true
        approvers[msg.sender] = true;
        
        approversCount++;
    }
    
    function createRequest(string description, uint value, address recipient) public restricted {

        Request memory newRequest = Request({
            description: description,
            value: value,
            recipient: recipient,
            complete: false,
            approvalCount: 0
        
        });
        
        requests.push(newRequest);
    }
    
    
    
    function approveRequest(uint index) public {
        
        //create a local var for requests
        
        Request storage request = requests[index];
        
        
        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);
        
        
        request.approvals[msg.sender]= true;
        request.approvalCount++;
    }
    
    
    
    function finalizeRequest(uint index) public restricted {
        
        Request storage request = requests[index];
        
        //check request is not marked as complete 
        require(!request.complete);
        
         //make sure it can be finalized 
        require(request.approvalCount > (approversCount/2));
       
        // make sure to update the flag to true after paying money to recipient 
        request.complete = true;
        
        request.recipient.transfer(request.value);
        
    }   
    
}