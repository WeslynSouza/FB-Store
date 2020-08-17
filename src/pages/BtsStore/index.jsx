import React from 'react';
import Menu from '../../components/Menu';
import Rodape from '../../components/Rodape';
import ProdutoCaixa from '../../components/ProdutoCaixa';
import dadosIniciais from '../../data/dados_iniciais.json';

import './styles.css';

export default props => {
    return (
        <div>
            <Menu color='var(--color-menu-bts)'/>
            <div className='btsStore'>
                <div className='products-container' >
                    {dadosIniciais.coleções[0].camisas.map( camisa => {
                        return (
                            <ProdutoCaixa 
                                key={camisa.titulo}
                                img={camisa.imagem}
                                alt='Camisa bts'
                                title={camisa.titulo}
                                value={`R$ ${camisa.preço}`}
                                bg='var(--color-caixa-bts)'
                                color='var(--color-menu-bts)'
                            />
                        )
                    })}
                </div>
            </div>
            <Rodape color='var(--color-rodape-bts)'/>
        </div>
    )
}