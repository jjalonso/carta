import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import { Route, Redirect } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

const PrivateRoute = ({ component: Component, ...props }) => {
  const { user } = useAuthState(firebase.auth());
  return (
    <Route
      {...props}
      render={(props) => {
        if (user) return <Component {...props} />;
        return (
          <Redirect
            to={{
              pathname: '/signin',
              state: { from: props.location },
            }}
          />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
