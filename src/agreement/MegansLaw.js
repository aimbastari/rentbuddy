import React from 'react';
import { Segment, Container, Label } from 'semantic-ui-react';

import { Field } from 'redux-form';


const MegansLaw = ({}) => {
  return (
    <Segment>
      <div className="fields">
          <div className="sixteen wide field">
            <label>
              Sheriff's departments, police departments serving jurisdictions of 200000 or more and many other
              local law enforcement authorities maintain for public access a database of the location of persons
              required to register pursuant to paragraph (1) of subdivision (a) of Section 290.4 of the Penal Code.
              The database is updated on a quarterly basis and a source of information about the presence of these individuals in 
              any neighborhood. The Department of Justice also maintains a Sex Offender Identification Line through
              which inquiries about individuals may be made. This is a "900" telephone service.  Callers must have
              specific information about individuals they are checking. 
            </label>
            
            <div>
              <Label htmlFor="ackMegansLaw">Click to Acknowledge</Label>
              <div>
                <Field name="ackMegansLaw" id="ackMegansLaw" component="input" type="checkbox"/>
              </div>
            </div>
          </div>
      </div>
    </Segment>

  );
}

export default MegansLaw;
