import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Spinner from '../Spinner/Spinner';

const AdminRoute = ({children, ...rest}) => {
    const {user, isLoading, admin} = useAuth();

    if ( isLoading ) {
        return <Spinner />
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;