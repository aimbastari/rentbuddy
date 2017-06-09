import React from 'react';
import { Segment, Container, Label } from 'semantic-ui-react';

import { Field } from 'redux-form';


const Relocation = ({}) => {
  return (
    <Segment>
      <div className="fields">
          <div className="sixteen wide field">
            <label>
              In the event Landlord deems it necessary or appropriate to make any repairs to the premises or the
              building or apartment complex in which the premises are located which, in the Landlord's sole
              discretion, require or necessitate that Resident vacate the premises on a temporary basis, then
              Resident shall vacate the premises upon reasonable notie from Landlord to do so.  Three(3) days shall
              be presumed to be reasonable notice unless the circumstances of the required repair are of a nature that 
              reasonably necessitates shorter notice. If required to temporarily vacate the premises, Resident shall have
              option to receive either a prorated rental rebate in the amount of the daily rental value of the premises
              for each day that Resident is unable to occupy the premises, or to be reimbursed for Resident's actual const
              of temporary accomodations in an amount not exceeding (2) times the daily rental value for each day the 
              Resident is required to vacate the premises.  If in Landlord's opinion, the repairs are of a nature that would
              require that Resident vacate the premises for more than ten (10) days, Landlord may, in its sole discretion,
              relocate Resident on a permanent basis to a reasonably comparable dwelling.  In that event Landlord shall 
              reimburse Resident for Resident's reasonable relocation expenses. Notwithstanding the foregoing, Landlord shall
              have no liablility or responsibility for any temporary housing accomodations, rent abatement or relocation
              expenses in the event the repairs or other condition necessitating that Resident vacate the premises
              were caused by Resident or Resident's guest or invitees.
            </label>            
            <div>
              <Label htmlFor="ackRelocation">Click to Acknowledge</Label>
              <div>
                <Field name="ackRelocation" id="ackRelocation" component="input" type="checkbox"/>
              </div>
            </div>
          </div>
      </div>
    </Segment>

  );
}

export default Relocation;
