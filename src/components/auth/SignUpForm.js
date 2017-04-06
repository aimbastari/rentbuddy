import React from 'react'
import {Field, reduxForm} from 'redux-form';

const SignUpForm = (props) => {
  const { handleSubmit, pristine, reset, submitting} = props

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>email</label>
        <div>
          <Field name="email" component="input" type="email" placeholder="email" />
        </div>
      </div>

      <div>
        <label>password</label>
        <div>
          <Field name="password" component="input" type="password" placeholder="password" />
        </div>
      </div>

      <div>
        <label>confirm</label>
        <div>
          <Field name="confirm" component="input" type="password" placeholder="confirm" />
        </div>
      </div>


      <div>
        <button type="submit" disabled={pristine || submitting}> Submit </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}> Clear Values </button>

      </div>

    </form>

  )

}

export default reduxForm({
  form: 'signUp' //a unique identifier

})(SignUpForm)
