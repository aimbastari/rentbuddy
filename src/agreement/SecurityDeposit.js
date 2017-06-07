import React from 'react';
import { Segment, Container, Label } from 'semantic-ui-react';

import { Field } from 'redux-form';


const SecurityDeposit = ({}) => {
  return (
    <Segment>
      <div className="fields">
          <div className="sixteen wide field">
            <label>
              Resident shall pay to Landlord the Security Deposit set forth in the Basic Lease Terms of this Agreement to SecurityDeposit
              Resident's compliance with all of the conditions of this Agreement and Landlord's rules and regulations. Unless otherwise
              requires by law, Resident is not entitled to any interest on the security deposit. No portion of the deposit shall be deemed
              rent for any rental month, nor shall it constitute a measure of Landlord's damages in the event of a default. Resident agrees
              that no portion of the deposit shall be a reduction of or offset against rent or any other payment due Landlord.  Within 
              twenty-one (21) daysafter Resident vacates the premises, the deposit shall be returned by mail to Resident at Resident's last known 
              address, less the amount of any unpaid rent, the amount reasonably necessary to compensate Landlord for cleaning and repair of 
              damages to the premises to meet Landlord's re-rental standards, over and above normal wear and tear, and any other amounts due
              Landlord.  The refund of the deposit shall be accompanied with an itemized statement showing the total amount of the deposit and 
              the deductions therefrom, if any. If the deposit is insufficient to cover said amounts, Resident shall promptly pay the difference 
              to Landlord.
            </label>
            
            <div>
              <Label htmlFor="ackSecurityDeposit">Click to Acknowledge</Label>
              <div>
                <Field name="ackSecurityDeposit" id="ackSecurityDeposit" component="input" type="checkbox"/>
              </div>
            </div>
          </div>
      </div>
    </Segment>

  );
}

export default SecurityDeposit;
