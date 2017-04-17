import React, { Component } from 'react';
import './Agreement.css';

import { Accordion, Icon, Segment, Button } from 'semantic-ui-react';


import Residents from './Residents'
import BasicLeaseTerms from './BasicLeaseTerms'
import PosessionOfPremises from './PosessionOfPremises'



import * as actions from './../actions/AgreementActions';

import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';


class AgreementForm extends Component{


  render(){
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit} className="ui form">
        <Accordion>

          <Accordion.Title>
            <Icon name='dropdown' />
            Residents
          </Accordion.Title>
          <Accordion.Content>
            <Segment>
              <Residents />
            </Segment>
          </Accordion.Content>

          <Accordion.Title>
            <Icon name='dropdown' />
            Basic Lease Terms
          </Accordion.Title>
          <Accordion.Content>
            <Segment>
              <BasicLeaseTerms />
            </Segment>
          </Accordion.Content>

          <Accordion.Title>
            <Icon name='dropdown' />
            Possesion of Premises
          </Accordion.Title>
          <Accordion.Content>
            <Segment>
              <PosessionOfPremises />
            </Segment>
          </Accordion.Content>


        </Accordion>

        <Segment basic textAlign="right">
          <Button type="button" onClick={reset} disabled={pristine || submitting}>Reset</Button>
          <Button type="submit" disabled={pristine || submitting}>Submit</Button>
        </Segment>

      </form>
    );
  }

}

// Decorate the form component
AgreementForm = reduxForm({
  form: 'agreement' // a unique name for this form
})(AgreementForm);


// You have to connect() to any reducers that you wish to connect to yourself
AgreementForm = connect(
  state => ({
    initialValues: {} // pull initial values from account reducer
  }),
   actions                // bind account loading action creator
)(AgreementForm)

export default AgreementForm;
