import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Route as RouterRoute, Redirect } from 'react-router-dom';
import { AuthContext } from '../App';

const Route = ({
  component: Component,
  auth,
  ...props
}) => {
  const { initialising, user } = useContext(AuthContext);
  const isSignInPage = window.location.pathname === '/signin';

  return (
    <RouterRoute
      {...props}
      render={(routeProps) => {
        if (user && isSignInPage) {
          return (
            <Redirect
              to={{
                pathname: '/',
                state: { from: routeProps.location },
              }}
            />
          );
        }
        if (!initialising && !user && auth) {
          return (
            <Redirect
              to={{
                pathname: '/signin',
                state: { from: routeProps.location },
              }}
            />
          );
        }
        if (user || !auth) return <Component {...routeProps} />;
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
