import React, { Component } from 'react';
import './RentalApplication.css';

import { Accordion, Icon, Segment, Button } from 'semantic-ui-react';

import PersonalInfo from './PersonalInfo';
import AddressInfo from './AddressInfo';
import OccupantsInfo from './OccupantsInfo';
import PetsInfo from './PetsInfo';
import EmploymentHistory from './EmploymentHistory';

import * as actions from './actions/RentalApplicationActions';

import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import RentalApplicationForm from './RentalApplicationForm';

class RentalApplication extends Component{

  componentWillMount = () => {
    this.props.getApplication();
  }

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
