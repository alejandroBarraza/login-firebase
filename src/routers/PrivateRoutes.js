import React from 'react';
import { Route, useLocation, Redirect } from 'react-router';
import PropTypes from 'prop-types';

export const PrivateRoutes = ({ isLoggedIn, component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            component={(props) =>
                isLoggedIn ? <Component {...props} /> : <Redirect to='/auth/login' />
            }
        />
    );
};
PrivateRoutes.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
};
