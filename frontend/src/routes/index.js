import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ProtectedRoute from '../components/ProtectedRoute';
import GuestRoute from '../components/GuestRoute';
import Register from '../pages/Register';
import Login from '../pages/Login';
import PersonalData from '../pages/PersonalData';
import Todo from '../pages/Todo';


const  Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <GuestRoute path="/" exact={true} component={Register} />
                <GuestRoute path="/login" exact={true} component={Login} />
                <ProtectedRoute path="/dados-pessoais" exact={true} component={PersonalData} />
                <ProtectedRoute path="/todolist" exact={true} component={Todo} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;