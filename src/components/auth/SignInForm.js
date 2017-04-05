import React from 'react'
import {Field, redux-form} from 'redux-form';

const SignInForm = (props) => {
  const { handleSubmit, pristine, reset, submitting} = props

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>email</label>
        <div>
          <Field name="email" component="input" type="email" placeholder="Email" />
        </div>
      </div>

      <div>
        <label>password</label>
        <div>
          <Field name="password" component="input" type="email" placeholder="Email" />
        </div>
      </div>

      <div>
        <button type="submit" disabled={pristine || submitting}> Submit </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}> Clear Values </button>

      </div>

    </form>

  )

}

export default reduxform({
  form: 'signIn' //a unique identifier

})(SignInForm)
