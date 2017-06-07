import React from 'react';
import { Segment, Container, Label } from 'semantic-ui-react';

import { Field } from 'redux-form';


const EntryByLandlord = ({}) => {
  return (
    <Segment>
      <div className="fields">
          <div className="sixteen wide field">
            <label>
              Landlord may enter the premises (a) in case of emergency; (b) to make necessary or agreed repairs, decorations, alterations
              or improvements, supply necessary or agreed services, or exhibit the premises to prospective or actual purchasers, mortgagees,
              residents, workmen or contractors; (c) when the Resident has abandoned or surrendered the premises; (d) pursuant to court order;
              (e) for any other purpose now or hereafter allowed by law. Except in emergencies or when the Resident has abandoned or surrendered
              the premises, entry may not be made during other than normal business hours unless the Resident consents at the time of entry.
              Except in cases of emergency or when impracticable to do so, the Landlord shall give the Resident reasonable notice of his intent
              to enter. Twenty four hours shall be presumed to be reasonable notice. 
            </label>            
            <div>
              <Label htmlFor="ackLandlordEntry">Click to Acknowledge</Label>
              <div>
                <Field name="ackLandlordEntry" id="ackLandlordEntry" component="input" type="checkbox"/>
              </div>
            </div>
          </div>
      </div>
    </Segment>

  );
}

export default EntryByLandlord;
