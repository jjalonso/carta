import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route as RouterRoute, Redirect } from 'react-router-dom';
import { AuthContext } from '../App';

const Route = ({
  component: Component,
  auth,
  ...props
}) => {
  const { initialising, user, signIn } = useContext(AuthContext);

  const isSignInPage = () => window.location.pathname === '/signin';

  useEffect(() => {
    if (isSignInPage()) {
      signIn();
    }
  }, [signIn]);

  return (
    <RouterRoute
      {...props}
      render={({ location }, childrenProps) => {
        if (user && isSignInPage()) {
          return (
            <Redirect
              to={{
                pathname: '/',
                state: { from: location },
              }}
            />
          );
        }
        if (!initialising && !user && auth) {
          return (
            <Redirect
              to={{
                pathname: '/signin',
                state: { from: location },
              }}
            />
          );
        }

        if (user || !auth) return <Component {...childrenProps} />;
      }}
    />
  );
};

Route.propTypes = {
  component: PropTypes.func.isRequired,
  auth: PropTypes.bool,
};

Route.defaultProps = {
  auth: false,
};

export default Route;
