import React, {Component} from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';

class CampaignShow extends Component {

    static async getInitialProps(props){
        const campaign = Campaign(props.query.address);

        const summary = await campaign.methods.getSummary().call();

        console.log(summary);
        return {
            minimumContribution: summary[0],
            balance: summary[1],
            requestsCount: summary[2],
            approversCount: summary[3],
            manager: summary[4]
            
        };
    }

    renderCards(){
        const{
            balance,
            manager,
            minimumContribution,
            approversCount
        } =this.props;
        
        const items = [
            {
                header:
                meta:
                description:
            }
        ]
    }



    render() {
        return (
       <Layout>
             <h3>Campaign Show</h3>
       </Layout>     
      
        );
    }
}


export default CampaignShow;