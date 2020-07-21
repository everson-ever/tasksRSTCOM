import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Register from '../pages/Register';
import Login from '../pages/Login';
import PersonalData from '../pages/PersonalData';
import Todo from '../pages/Todo';


const  Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Register} />
                <Route path="/login" exact={true} component={Login} />
                <Route path="/dados-pessoais" exact={true} component={PersonalData} />
                <Route path="/todolist" exact={true} component={Todo} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;