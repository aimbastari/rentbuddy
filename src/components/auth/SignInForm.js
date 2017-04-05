import React from 'react'
import {Field, reduxForm} from 'redux-form';

const SignInForm = (props) => {
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
        <button type="submit" disabled={pristine || submitting}> Submit </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}> Clear Values </button>

      </div>

    </form>

  )

}

export default reduxForm({
  form: 'signIn' //a unique identifier

})(SignInForm)
