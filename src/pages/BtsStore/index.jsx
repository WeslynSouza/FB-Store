import React from 'react';
import Menu from '../../components/Menu';
import Rodape from '../../components/Rodape';
import ProdutoCaixa from '../../components/ProdutoCaixa';

import btsJungkook from '../../assets/img/btsJungkook.jpg';

import './styles.css';

export default props => {
    return (
        <div>
            <Menu color='var(--color-menu-bts)'/>
            <div className='btsStore'>
                <div className='products-container'>
                    <ProdutoCaixa 
                        img={btsJungkook}
                        alt='Camisa Monsta bts'
                        title='Jungkook'
                        value='R$ 69,99'
                        bg='var(--color-caixa-bts)'
                        color='var(--color-menu-bts)'
                    />

                    <ProdutoCaixa 
                        img={btsJungkook}
                        alt='Camisa Monsta bts'
                        title='Jungkook'
                        value='R$ 69,99'
                        bg='var(--color-caixa-bts)'
                        color='var(--color-menu-bts)'
                    />

                    <ProdutoCaixa 
                        img={btsJungkook}
                        alt='Camisa Monsta bts'
                        title='Jungkook'
                        value='R$ 69,99'
                        bg='var(--color-caixa-bts)'
                        color='var(--color-menu-bts)'
                    />

                    <ProdutoCaixa 
                        img={btsJungkook}
                        alt='Camisa Monsta bts'
                        title='Jungkook'
                        value='R$ 69,99'
                        bg='var(--color-caixa-bts)'
                        color='var(--color-menu-bts)'
                    />

                    <ProdutoCaixa 
                        img={btsJungkook}
                        alt='Camisa Monsta bts'
                        title='Jungkook'
                        value='R$ 69,99'
                        bg='var(--color-caixa-bts)'
                        color='var(--color-menu-bts)'
                    />
                </div>

            </div>
            <Rodape color='var(--color-rodape-bts)'/>
        </div>
    )
}