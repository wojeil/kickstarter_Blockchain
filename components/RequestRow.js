import React, {Component} from 'react';
import {Table} from 'semantic-ui-react';



class RequestRow extends Component{

    render(){

        const{ Row, Cell }= Table;

        return(
            <Row>
                <Cell>{this.props.id}</Cell>
                <Cell>{this.props.request.description}</Cell>
                <Cell></Cell>
                <Cell></Cell>
                <Cell></Cell>
                <Cell></Cell>
                <Cell></Cell>
            </Row>
        );
    }
}


export default RequestRow;