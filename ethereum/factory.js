import web3 from './web3';
//import compiled contract abi
import CampingFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampingFactory.interface),
    '0xA404af092BBBA1A6840DcBC2317eb2727298DB86'

);

export default instance;