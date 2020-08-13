import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import MxStore from './pages/MxStore';

export default () => {
    return (
        <BrowserRouter>
            <Route path='/' exact component={Home}/>
            <Route path='/MxStore' component={MxStore}/>
        </BrowserRouter>
    )
}