import React from 'react';
import Menu from '../../components/Menu';
import Rodape from '../../components/Rodape';
import ProdutoCaixa from '../../components/ProdutoCaixa';

import bpLisa from '../../assets/img/bpLisa.jpg';

import './styles.css';

export default props => {
    return (
        <div>
            <Menu color='var(--color-menu-bp)'/>
            <div className='bpStore'>
                <div className='products-container'>
                    <ProdutoCaixa 
                        img={bpLisa}
                        alt='Camisa Lisa Black Pink'
                        title='Lisa'
                        value='R$ 69,99'
                        bg='var(--color-caixa-bp)'
                        color='var(--color-fonte-bp)'
                    />

                    <ProdutoCaixa 
                        img={bpLisa}
                        alt='Camisa Lisa Black Pink'
                        title='Lisa'
                        value='R$ 69,99'
                        bg='var(--color-caixa-bp)'
                        color='var(--color-fonte-bp)'
                    />

                    <ProdutoCaixa 
                        img={bpLisa}
                        alt='Camisa Lisa Black Pink'
                        title='Lisa'
                        value='R$ 69,99'
                        bg='var(--color-caixa-bp)'
                        color='var(--color-fonte-bp)'
                    />

                    <ProdutoCaixa 
                        img={bpLisa}
                        alt='Camisa Lisa Black Pink'
                        title='Lisa'
                        value='R$ 69,99'
                        bg='var(--color-caixa-bp)'
                        color='var(--color-fonte-bp)'
                    />

                    <ProdutoCaixa 
                        img={bpLisa}
                        alt='Camisa Lisa Black Pink'
                        title='Lisa'
                        value='R$ 69,99'
                        bg='var(--color-caixa-bp)'
                        color='var(--color-fonte-bp)'
                    />

                </div>

            </div>
            <Rodape color='var(--color-menu-bp)'/>
        </div>
    )
}