import React from 'react';
import { Route, Switch } from 'react-router-dom';


import TasksList from './TasksList';
import Test from './Test';
import Profile from './Profile';

function Main() {
    return (      
        <Switch>
            <Route exact path = '/' component = {TasksList} />
            <Route exact path = '/test' component = {Test} />
            <Route path = '/profile' component = {Profile} />
        </Switch>        
    )
}

export default Main;