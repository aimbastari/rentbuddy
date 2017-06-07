import React, { Component } from 'react';
import './RentalApplication.css';

import * as actions from './actions/RentalApplicationActions';

import { connect } from 'react-redux';
import RentalApplicationForm from './RentalApplicationForm';

class RentalApplication extends Component{

  handleSubmit = (values) => {
    this.props.saveApplication(values);
  }


  render(){
    return (
      <div className='RentalApplication-header' >
        Rental Application
        <RentalApplicationForm onSubmit={this.handleSubmit} />
      </div>
    )

  }
}

export default connect(null, actions)(RentalApplication);
