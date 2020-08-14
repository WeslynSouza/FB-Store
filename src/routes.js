import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import MxStore from './pages/MxStore';
import BtsStore from './pages/BtsStore';
import BpStore from './pages/BpStore';
import QuemSomos from './pages/SobreNos';

export default () => {
    return (
        <BrowserRouter>
            <Route path='/' exact component={Home}/>
            <Route path='/SobreNos' component={QuemSomos}/>
            <Route path='/MxStore' component={MxStore}/>
            <Route path='/BtsStore' component={BtsStore}/>
            <Route path='/BpStore' component={BpStore}/>
        </BrowserRouter>
    )
}