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
    const id = this.props.id;

    return (
      <div className='Agreement-header' >
          <AgreementForm onSubmit={this.handleSubmit} id={id}/>
      </div>
    )

  }
}

export default connect(null, actions)(Agreement);
