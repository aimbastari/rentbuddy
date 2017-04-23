import React from 'react';
import { Segment, Label, Container, Input, Header, Icon } from 'semantic-ui-react';
import { Field, FieldArray } from 'redux-form';

import DateTimePicker from 'react-widgets/lib/DateTimePicker'
import moment from 'moment'
import momentLocaliser from 'react-widgets/lib/localizers/moment'
import 'react-widgets/dist/css/react-widgets.css'

const BasicLeaseTerms = ({}) => {

    const renderDateTimePicker = ({ input: { onChange, value }, showTime }) =>
      <DateTimePicker
        onChange={onChange}
        format="DD MMM YYYY"
        time={showTime}
        value={!value ? null : new Date(value)}
      />

      const renderParkings = ({ fields, meta: { error } }) => (
        <ul>
          {fields.map((parking, index) =>
            <li key={index}>
              <Input>
                <Icon name="car" />
              <Field disabled
                name={parking}
                type="text"
                component="input"
                label={`Parking #${index + 1}`}/>
              </Input>  
            </li>
          )}
        </ul>
      )
    
  return (
    <Segment>
      <Label color='blue' ribbon>A.Term</Label>

    <div>

        <div className="fields">
          <div className="ten wide field">
            <label htmlFor="basicLeaseTerms">
              The term of the rental shall begin on Begin Date below, and shall continue as follows subject to the payment
              of rent for one month abd security deposit in the form of a cashier's check or money orer and Residents's faithful
              perfromance of this Agreement:
            </label>
          </div>

          <div className="six wide field">
            <label htmlFor="beginDate">Begin Date:</label>
            <Field
              name="beginDate"
              showTime={false}
              component={renderDateTimePicker}
            />
          </div>

        </div>


        <div className="fields">
          <div className="ten wide field">
           <label><Field name="term" component="input" type="radio" value="fixed"/> 
              For a fixed term commencing on the Begin Date above and expiring on the Expire Date
              (a fixed term lease). Renewal of th lease and continued occupancy following expiration shall
              be as provided in Paragraph 23 of this Agreement.
           </label>
           <label><Field name="term" component="input" type="radio" value="monthly"/> 
            On a month to month basis, the residency being terminable at will by either Landlord or 
            Resident giving a written notice to the other (A Month-to-Month Tenancy). Termination shall be provided in 
            Paragraph 24 of this lease.
           </label>
          </div>

          <div className="six wide field">
            <label htmlFor="expireDate">Expire Date:</label>
            <Field
              name="expireDate"
              showTime={false}
              component={renderDateTimePicker}
            />
          </div>

        </div>

        <Segment>
          <div className="fields">
            <div className="twelve wide field">
              <label htmlFor="basicLeaseTerms.address">Address</label>
              <Field name="basicLeaseTerms.address" placeholder="address" component="input" type="text"/>
            </div>
            <div className="four wide field">
              <label htmlFor="basicLeaseTerms.aptNumber">Apart #</label>
              <Field name="basicLeaseTerms.aptNumber" placeholder="basicLeaseTerms.aptNumber" component="input" type="text"/>
            </div>
          </div>

        <div className="fields">
          <div className="four wide field">
            <label htmlFor="basicLeaseTerms.monthlyRent" icon="dollar">Monthly Rent</label>
            <Input labelPosition='right' type='text' placeholder='Monthly Rent'>
              <Label basic>$</Label>
              <Field name="basicLeaseTerms.monthlyRent" placeholder="monthly rent" component="input" type="text"/>
               <Label>.00</Label>
            </Input>
          </div>

          <div className="four wide field">
            <label htmlFor="basicLeaseTerms.securityDeposit">Security Deposit</label>
            <Input labelPosition='left' type='text' placeholder='Monthly Rent'>
              <Label basic>$</Label>
              <Field name="basicLeaseTerms.securityDeposit" placeholder="security deposit" component="input" type="text"/>
              <Label>.00</Label>
            </Input>
          </div>

          <div className="four wide field">
            <label htmlFor="basicLeaseTerms.remoteDeposit">Remote Deposit</label>
            <Input labelPosition='left' type='text' placeholder='Monthly Rent'>
              <Label basic>$</Label>
              <Field name="basicLeaseTerms.remoteDeposit" placeholder="remote deposit" component="input" type="text"/>
              <Label>.00</Label>
            </Input>
          </div>
 
          <div className="four wide field">
            <label htmlFor="basicLeaseTerms.garageOrStorage">Garage Or Storage</label>
            <Input labelPosition='left' type='text' placeholder='Monthly Rent'>
              <Label basic>$</Label>
              <Field name="basicLeaseTerms.garageOrStorage" placeholder="garage Or Storage" component="input" type="text"/>
              <Label>.00</Label>
            </Input>
          </div>
 
         <div className="four wide field">
            <label htmlFor="basicLeaseTerms.lateRentCharge">Late Charge</label>
            <Input labelPosition='left' type='text' placeholder='Late Charge'>
              <Label basic>$</Label>
              <Field name="basicLeaseTerms.lateRentCharge" placeholder="late Charge" component="input" type="text"/>
              <Label>.00</Label>
            </Input>
          </div>
 

         <div className="four wide field">
            <label htmlFor="basicLeaseTerms.dishonoredCheck">Dishonored Check</label>
            <Input labelPosition='left' type='text' placeholder='Dishonored Check'>
              <Label basic>$</Label>
              <Field name="basicLeaseTerms.dishonoredCheck" placeholder="Dishonored Check" component="input" type="text"/>
              <Label>.00</Label>
            </Input>
          </div>
 
        </div>

        </Segment>

         <Header as='h5' attached='top'>
            Utilities provided by landlord
        </Header>
        <Segment attached>
          <div className="fields">
            <div className="three wide field">
              <label htmlFor="hotWater">Hot Water</label>
              <Field name="basicLeaseTerms.hotWater" id="hotWater" component="input" type="checkbox"/>
           </div>

            <div className="three wide field">
              <label htmlFor="coldWater">Cold Water</label>
              <Field name="basicLeaseTerms.coldWater" id="coldWater" component="input" type="checkbox"/>
           </div>

            <div className="three wide field">
              <label htmlFor="gas">Gas</label>
              <Field name="basicLeaseTerms.gas" id="gas" component="input" type="checkbox"/>
           </div>

            <div className="three wide field">
              <label htmlFor="electrical">Electrical</label>
              <Field name="basicLeaseTerms.electrical" id="electrical" component="input" type="checkbox"/>
           </div>

            <div className="three wide field">
              <label htmlFor="gardening">Gardening</label>
              <Field name="basicLeaseTerms.gardening" id="gardening" component="input" type="checkbox"/>
           </div>

            <div className="three wide field">
              <label htmlFor="trash">Trash</label>
              <Field name="basicLeaseTerms.trash" id="trash" component="input" type="checkbox"/>
           </div>

         </div>   

        </Segment>

         <Header as='h5' attached='top'>
            Assigned Parking
        </Header>
        <Segment attached>
          <FieldArray name="basicLeaseTerms.parkingAssignments" component={renderParkings} />

        </Segment>


      </div>    


    </Segment>

  );
}



export default BasicLeaseTerms;
