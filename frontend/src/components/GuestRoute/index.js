import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const GuestRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated } = useSelector(state => state.security.auth)

    return (
        <Route
            {...rest}
            render={props => {
                if (!isAuthenticated) {
                    return <Component {...props} />;
                }
                else {
                    return (
                        <Redirect
                            to={{
                                pathname: '/todolist',
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    )
                }
            }

            }
        />
    )
}

export default GuestRoute;