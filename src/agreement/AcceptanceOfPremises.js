import React from 'react';
import { Segment, Container, Label } from 'semantic-ui-react';

import { Field } from 'redux-form';


const AcceptanceOfPremises = ({}) => {
  return (
    <Segment>
      <div className="fields">
          <div className="sixteen wide field">
            <label>
              Resident has inspected the premises, furnishings and equipment, and has found them to be satisfactory. All plumbing
              heating and electrical systems are operative and deemed satisfactory. Resident agrees to sign a statement of unit 
              condition following such inspection and acknowledges that this statment is an accurate description of the condition 
              of the unit at the time of occupancy.  Resident agrees that the unit will be delivered to Landlord int he same condition
              at the termination of tenancy, normal wear and tear excepted. Further, Resident has inspected the premises, common areas and
              surrounding neighborhood prior to taking possession and knows of their condition and the potential hazards they present to 
              Resident, Residents children and guests. Resident accepts the premises and common areas in present condition.  Resident
              acknowledges that Landlord has made no representation or warrant about the surrounding community where the apartment complex 
              and/or residence is located and that Landlord provides no assurance regarding the security or protection of Resident or 
              Residents personal property within the premises. Resident acknowledges that Resident is satisfied as to all matters of concern 
              with respect to the surrounding community, including but not limited to conditions which may create excessive
              noise, the location of schools, shopping and commercial enterprises, and the proximity and adequacy of police and 
              fire protection.
            </label>
            
            <div>
              <Label htmlFor="ackAcceptanceOfPremises">Click to Acknowledge</Label>
              <div>
                <Field name="ackAcceptanceOfPremises" id="ackAcceptanceOfPremises" component="input" type="checkbox"/>
              </div>
            </div>
          </div>
      </div>
    </Segment>

  );
}

export default AcceptanceOfPremises;
