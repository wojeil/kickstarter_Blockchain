import web3 from './web3';
//import compiled contract abi
import CampingFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampingFactory.interface),
    '0x2400764807f8b62702365ef7Dd54777053D645A9'

);

export default instance;