import React, { Component } from 'react';
import {Table, Label } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';


import * as actions from './actions/MaintenanceActions';

/**
 * represents a list of Maintenance requests
 */
class Maintenance extends Component {

    componentWillMount() {
       this.props.getMaintenanceRequests(); 
    }

    displayDate(date){
        return moment(date).format('MM/DD/YYYY');

    }

    renderMaintenanceRequests = () => {
       return (
        <div>
            <Label color="orange" ribbon>Maintenance</Label>
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
                                <Link to={`/maintenance/${row._id}`}>select</Link>
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
                {this.renderMaintenanceRequests()}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
  return {
    maintenance : state.maintenance.list
  }
}

export default connect(mapStateToProps, actions)(Maintenance);