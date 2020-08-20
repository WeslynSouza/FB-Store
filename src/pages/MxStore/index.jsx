import React, { Component } from 'react';
import Menu from '../../components/Menu';
import Rodape from '../../components/Rodape';
import ProdutoCaixa from '../../components/ProdutoCaixa';
import dadosIniciais from '../../data/dados_iniciais.json';

import './styles.css';

class MxStore extends Component {

    render(){
        return (
            <div>
                <Menu color='var(--color-menu-mx1)'/>
                <div className='mxStore'>
                    <div className='products-container'>
                        {dadosIniciais.coleções[1].camisas.map( camisa => {
                            return (
                                <ProdutoCaixa 
                                    key={camisa.titulo}
                                    img={camisa.imagem}
                                    alt='Camisa Monsta X'
                                    title={camisa.titulo}
                                    value={`R$ ${camisa.preço}`}
                                    bg='var(--color-caixa-mx1)'
                                    color='var(--color-fonte-mx1)'
                                    href='/Detalhes'
                                />
                            )
                        })}
                    </div>
    
                </div>
                <Rodape color='var(--color-rodape-mx1)'/>
            </div>
        )
    }
}

export default MxStore;