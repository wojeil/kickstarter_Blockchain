import React, {Component} from "react";
import {Form, Button, Input } from 'semantic-ui-react';
import Layout from "../../components/Layout";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";


class CampaignNew extends  Component {
    //event handlers

    state ={
        minimumContribution: '',
        errorMessage: ''
    };
//new method
    onSubmit = async (event) => {
        event.preventDefault();



        //inserting try catch err handling for better UX 

        try {
            const accounts = await web3.eth.getAccounts();
            await  factory.methods
            .createCampaign(this.state.minimumContribution)
            .send({
                from: accounts[0]
            });
        } catch (err) {
            this.setState({errorMessage: err.message});
        }
           
    };

    render(){
        return(

            <Layout>
               <h3> Create a campaign </h3>

                <Form  onSubmit={this.onSubmit}>
                    <Form.Field>
                        <label> Minimum Contribution</label>
                        <Input label="wei" labelPosition="right"
                        value={this.state.minimumContribution}
                        onChange={event => this.setState({minimumContribution: event.target.value})} />
                    </Form.Field>

                    <Button primary> Create </Button>

                </Form>
            </Layout>
         

        );
    }
}

export default CampaignNew;