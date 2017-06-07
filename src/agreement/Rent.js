import React from 'react';
import { Segment, Container, Label } from 'semantic-ui-react';

import { Field } from 'redux-form';


const Rent = ({}) => {
  return (
    <Segment>
      <div className="fields">
          <div className="sixteen wide field">
            <label>
              Resident agrees to pay to Landlord, at the office of the apartment manager, monthly rental at the
              rate set forth in paragraph
                Monthly rent
                Garage/Storage
                on or before the FIRST (1st) day of each month.
                Rent is payable only by personal check, cashiers check or money order payable to:
                Romneya Apartment Management.
                No cash will be accepted. In the event Landlord is required to serve Resident with a 3-Day Notice
                to Pay Rent or Quit on two (2) or more occasions, or Resident has tendered an NSF check on two (2) or monthlyRent
                occasions, Landlord may thereafter require Resident that all future rental payments be made in the form
                of a cashier's check or money order only.
                The rent for a partial month's period shall be prorated on the basis of a 30-day month and shall be paid on
                or before the next rental due date.
                Landlord may apply any payment received from Resident, including a payment recevied after the service of a 3-Day Notice
                to Pay Rent or Quit, in any manner in which the Landlord deems appropriate, including applying such payment first
                to any unpaid late charges or other fees or charges then due and owing under this agreement, and second, applying the appropriate
                remainder of the payment to the rent then due.
            </label>
            <div>
              <Label htmlFor="ackRent">Click to Acknowledge</Label>
              <div>
                <Field name="ackRent" id="ackRent" component="input" type="checkbox"/>
              </div>
            </div>
          </div>
      </div>
    </Segment>

  );
}



export default Rent;
