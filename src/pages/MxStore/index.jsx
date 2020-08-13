import React from 'react';
import Menu from '../../components/Menu';
import Rodape from '../../components/Rodape';
import ProdutoCaixa from '../../components/ProdutoCaixa';

import mxWalker from '../../assets/img/mxWalker.jpg';

import './styles.css';

export default props => {
    return (
        <div>
            <Menu color='var(--color-menu-mx1)'/>
            <main className='mxStore'>
                <div className='products-container'>
                    <ProdutoCaixa 
                        img={mxWalker}
                        alt='Camisa Monsta X'
                        title='Walker'
                        value='R$ 69,99'
                    />

                    <ProdutoCaixa 
                        img={mxWalker}
                        alt='Camisa Monsta X'
                        title='Walker'
                        value='R$ 69,99'
                    />

                    <ProdutoCaixa 
                        img={mxWalker}
                        alt='Camisa Monsta X'
                        title='Walker'
                        value='R$ 69,99'
                    />

                    <ProdutoCaixa 
                        img={mxWalker}
                        alt='Camisa Monsta X'
                        title='Walker'
                        value='R$ 69,99'
                    />

                    <ProdutoCaixa 
                        img={mxWalker}
                        alt='Camisa Monsta X'
                        title='Walker'
                        value='R$ 69,99'
                    />
                </div>

            </main>
            <Rodape color='var(--color-rodape-mx1)'/>
        </div>
    )
}