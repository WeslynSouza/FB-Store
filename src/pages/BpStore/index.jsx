import React, { Component } from 'react';
import Menu from '../../components/Menu';
import Rodape from '../../components/Rodape';
import ProdutoCaixa from '../../components/ProdutoCaixa';
import dadosIniciais from '../../data/dados_iniciais.json';

import './styles.css';

class BpStore extends Component {

    render(){
        return (
            <div>
                <Menu color='var(--color-menu-bp)'/>
                <div className='bpStore'>
                    <div className='products-container'>
                        {dadosIniciais.coleções[2].camisas.map( camisa => {
                            return (
                                <ProdutoCaixa 
                                    key={camisa.titulo}
                                    img={camisa.imagem}
                                    alt='Camisa BlackPink'
                                    title={camisa.titulo}
                                    value={`R$ ${camisa.preço}`}
                                    bg='var(--color-caixa-bp)'
                                    color='var(--color-fonte-bp)'
                                />
                            )
                        })}
                    </div>
    
                </div>
                <Rodape color='var(--color-menu-bp)'/>
            </div>
        )
    }
}

export default BpStore;