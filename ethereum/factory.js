import web3 from './web3';
//import compiled contract abi
import CampingFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampingFactory.interface),
    '0xF2E60B634B8f3D9c73feB6102228363532b21DB6'

);

export default instance;