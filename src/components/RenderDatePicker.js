
import {DatePicker} from 'react-datepicker';
import {moment} from 'moment';
import 'react-datepicker/dist/react-datepicker.css'
import {React} from 'react';

const renderDatePicker = ({input, placeholder, defaultValue, meta: {touched, error} }) => (
  <div>
        <DatePicker {...input} dateForm="MM/DD/YYYY" selected={input.value ? moment(input.value) : null} />
        {touched && error && <span>{error}</span>}
  </div>
);

export default renderDatePicker
