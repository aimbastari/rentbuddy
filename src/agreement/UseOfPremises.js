import React from 'react';
import { Segment, Container, Label } from 'semantic-ui-react';

import { Field } from 'redux-form';


const UseOfPremises = ({}) => {
  return (
    <Segment>
      <div className="fields">
          <div className="sixteen wide field">
            <label>
              Residents and Guests shall not disturb, annoy, endanger or inconvenience other residents of the complex or neighbors,
              nor use the premises for any unlawful purposes, or violate any law or ordinance, nor commit waste or nuisances upon or
              about the premises and/or apartment community. Resident shall be solely responsible for the supervision of Resident's
              guests and minor children while such persons are within the premises, recreational facilities  or common areas of the 
              residence and/or apartment complex, and shall assure that the minor children and guests obey all applicable rules 
              and regulations and the provisions of this Agreement.  Failure to do so constitutes an incurable breach of this lease
              any may lead to the immediate termination of this Agreement.  Resident agrees not to use the premises for any business
              or commercial enterprise.  Resident shall not use, store or dispose of any hazardous ot toxic materials in, on or 
              about the premises. Except as provided by law, change of locks, decorating or alterations will not be allowed without
              Landlord's prior written consent. Resident shall keep the premises clean, in good order and repair and free of trash
              and unsightly material and to immediately notify Landlord in writing, of any defects or dangerous conditions in or about
              the premises, particularly any water penetration.  All refuse and garbage shall be wrapped and deposited by Resident in the
              receptacles provided.  Resident shall be responsible for disposing of articles of a size and nature not acceptable to the 
              rubbish hauler for the apartment complex or residence. If minor children reside at the premises, Resident shall be 
              solely responsible for the supervision of their activities while in the premises, recreational areas or common areas.
              Resident agrees to immediately report to the residential manager and/or Landlord any condition which Resident perceives to
              present a safety hazard.  Resident asumes the risk of injury to Resident's minor children and agrees to hold Landlord
              harmless from any injury, liability or loss resulting from the use of the Premises, recreational facilities or common areas.
            </label>
            
            <div>
              <Label htmlFor="ackUseOfPremises">Click to Acknowledge</Label>
              <div>
                <Field name="ackUseOfPremises" id="ackUseOfPremises" component="input" type="checkbox"/>
              </div>
            </div>
          </div>
      </div>
    </Segment>

  );
}

export default UseOfPremises;
