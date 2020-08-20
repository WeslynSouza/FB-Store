import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import MxStore from './pages/MxStore';
import BtsStore from './pages/BtsStore';
import BpStore from './pages/BpStore';
import AboutUs from './pages/AboutUs';
import Details from './pages/Details';

export default () => {
    return (
        <BrowserRouter>
            <Route path='/' exact component={Home}/>
            <Route path='/SobreNos' component={AboutUs}/>
            <Route path='/MxStore' component={MxStore}/>
            <Route path='/BtsStore' component={BtsStore}/>
            <Route path='/BpStore' component={BpStore}/>
            <Route path='/Detalhes' component={Details}/>
        </BrowserRouter>
    )
}