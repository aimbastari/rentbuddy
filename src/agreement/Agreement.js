import React, { Component } from 'react';
import './Agreement.css';

import * as actions from './../actions/AgreementActions';

import { connect } from 'react-redux';
import AgreementForm from './AgreementForm';

class Agreement extends Component{

  handleSubmit = (values) => {
    this.props.saveAgreement(values);
  }


  render(){
    return (
      <div className='Agreement-header' >
        Rent or Lease Agreement
        {/*
          <AgreementForm onSubmit={this.handleSubmit} />
        */}

          <AgreementForm onSubmit={this.handleSubmit} />
      </div>
    )

  }
}

export default connect(null, actions)(Agreement);
