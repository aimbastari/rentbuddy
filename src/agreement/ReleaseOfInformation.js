import React from 'react';
import { Segment, Container, Label } from 'semantic-ui-react';

import { Field } from 'redux-form';


const ReleaseOfInformation = ({}) => {
  return (
    <Segment>
      <div className="fields">
          <div className="sixteen wide field">
            <label>
              Resident acknowledges that it is Landlord's practice to disclose information contained
              in Landlord's files regarding Resident or this lease in response to a request for information
              from a law enforcement agency.  In addition, landlord may release to third parties, either during
              the term of this lease or after its termination, (i) where Resident has authorized such release in
              writing; (ii) in connection with the filing of negative credit report information as a result of Resident's
              breach of this Agreement; (iii) where necessary for Landlord's accountants, insurers and attorneys in 
              connection with Landlord's business operations; and (iv) pursuant to subpoena, court order, or
              applicable law or regulation. Further, Landlord will release the following factual information regarding
              Resident to prospective landlords or creditors: (a) the length of Resident's occupancy, (b) the amount of rent and
              (c) the timeliness of payment under this Agreement.  Resident hereby consents to the release of information in  
              accordance to this paragraph.

            </label>
            
            <div>
              <Label htmlFor="ackReleaseOfInformation">Click to Acknowledge</Label>
              <div>
                <Field name="ackReleaseOfInformation" id="ackReleaseOfInformation" component="input" type="checkbox"/>
              </div>
            </div>
          </div>
      </div>
    </Segment>

  );
}

export default ReleaseOfInformation;
