import React, { PropTypes } from 'react'
import { Redirect } from 'react-router-dom'

const PrivateRoute = ({ component, ...rest }) => (
  <Route {...rest} render={props => (
    fakeAuth.isAuthenticated ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

export default PrivateRoute;
