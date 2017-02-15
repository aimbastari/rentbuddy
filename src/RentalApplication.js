import React, { Component } from 'react';
import './RentalApplication.css';

import RentalApplicationForm from './RentalApplicationForm';

class RentalApplication extends Component{
  render(){
    return (
      <div className='RentalApplication-header' >
        Rental Application
        <RentalApplicationForm />

      </div>

    );
  }

}



export default RentalApplication;
