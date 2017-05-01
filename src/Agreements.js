import React, { Component } from 'react';
import {Table, Label } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';


import * as actions from './actions/AgreementActions';

/**
 * represents a list of agreements
 */
class Agreements extends Component {

    componentWillMount() {
       this.props.getAgreements(); 
    }

    displayDate(date){
        return moment(date).format('MM/DD/YYYY');

    }

    renderAgreements = () => {
       return (
        <div>
            <Label color="orange" ribbon>Agreements</Label>
            <Table celled striped>
                <Table.Header>
                    <Table.Row> 
                        <Table.HeaderCell>name</Table.HeaderCell>
                        <Table.HeaderCell>begin date</Table.HeaderCell>
                        <Table.HeaderCell>expire date</Table.HeaderCell>
                        <Table.HeaderCell>status</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>                    
                </Table.Header> 

               {
                 this.props.agreements &&  this.props.agreements.map( (row, key) => 
                        <Table.Row key={key}>
                            <Table.Cell>
                                {row.name}
                            </Table.Cell>          
                            <Table.Cell>
                                {this.displayDate(row.beginDate)}
                            </Table.Cell>          
                            <Table.Cell>
                                {this.displayDate(row.expireDate)}
                            </Table.Cell>          
                            <Table.Cell>
                                {row.status}
                            </Table.Cell>          
                            <Table.Cell>
                                <Link to={`/agreement/${row._id}`}>select</Link>
                            </Table.Cell>          
                            
                        </Table.Row>

                    )  
               
               }     
            </Table>

        </div>

       )
            
    }

    render() {
        return (
            <div>
                {this.renderAgreements()}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
  return {
    agreements : state.agreement.list
  }
}

export default connect(mapStateToProps, actions)(Agreements);