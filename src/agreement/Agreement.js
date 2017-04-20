import React, { Component } from 'react';
import './Agreement.css';

import * as actions from './../actions/AgreementActions';

import { connect } from 'react-redux';
import AgreementForm from './AgreementForm';

import { Icon, Label } from 'semantic-ui-react';

class Agreement extends Component{

  handleSubmit = (values) => {
    this.props.saveAgreement(values);
  }


  render(){
    return (
      <div className='Agreement-header' >
          <Label as='a' color="orange">
            <Icon name='map outline'/>Rent or Lease Agreement
          </Label>
          <AgreementForm onSubmit={this.handleSubmit} />
      </div>
    )

  }
}

export default connect(null, actions)(Agreement);
