import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Inicio from './pages/Inicio';
import MxProdutos from './pages/Colecoes/MxProdutos';
import BtsProdutos from './pages/Colecoes/BtsProdutos';
import BpProdutos from './pages/Colecoes/BpProdutos';
import Produtos from './pages/Produtos';
import SobreNos from './pages/SobreNos';
import Detalhes from './pages/Detalhes';
import Carrinho from './pages/Carrinho';

export default () => {
    return (
        <BrowserRouter>
            <Route path='/' exact component={Inicio}/>
            <Route path='/SobreNos' component={SobreNos}/>
            <Route path='/MxStore' component={MxProdutos}/>
            <Route path='/BtsStore' component={BtsProdutos}/>
            <Route path='/BpStore' component={BpProdutos}/>
            <Route path='/Detalhes' component={Detalhes}/>
            <Route path='/Carrinho' component={Carrinho}/>
            <Route path='/Produtos' component={Produtos}/>
        </BrowserRouter>
    )
}