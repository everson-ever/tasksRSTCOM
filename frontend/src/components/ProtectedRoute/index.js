import React from 'react';
import { Route, Redirect } from 'react-router-dom';
//import { isAuthenticated } from '../../services/auth'

export const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
        { ...rest }
        render={props => {
            if (true) {
                return <Component { ...props } />;
            }
            else {
                return (
                    <Redirect
                        to={{
                            pathname: '/entrar',
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