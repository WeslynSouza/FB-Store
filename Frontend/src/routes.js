import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Inicio from './pages/Inicio';
import Produtos from './pages/Produtos';
import SobreNos from './pages/SobreNos';
import Detalhes from './pages/Detalhes';
import Carrinho from './pages/Carrinho';

export default () => {
    return (
        <BrowserRouter>
            <Route path='/' exact component={Inicio}/>
            <Route path='/SobreNos' component={SobreNos}/>
            <Route path='/Detalhes' component={Detalhes}/>
            <Route path='/Carrinho' component={Carrinho}/>
            <Route path='/Produtos' component={Produtos}/>
        </BrowserRouter>
    )
}