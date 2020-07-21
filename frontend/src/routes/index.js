import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Register from '../pages/Register';


const  Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Register} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;