import React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/RentalApplicationActions';


class Dashboard extends React.Component{

  render(){
    return (
      <div>
        Dashboard
      </div>
    )

  }
}

export default connect(null, actions)(Dashboard);
