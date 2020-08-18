import React from 'react';
import Menu from '../../components/Menu';
import Rodape from '../../components/Rodape';
import ColeçãoContainer from '../../components/ColecaoContainer';

import btsBanner from '../../assets/img/Slide-MOTS7.png';
import mxBanner from '../../assets/img/Slide-MX.png';
import bpBanner from '../../assets/img/Slide-HYLT.png';

import './styles.css';

export default props => {
    return (
        <div>
            <Menu color='var(--color-menu-principal)'/>

            <main>
                <div className='banner-container'>
                    <ColeçãoContainer 
                        img={btsBanner}
                        alt="Coleção bts"
                        titulo="BTS Map Of The Soul 7"
                        href="/BtsStore"
                        color='var(--color-menu-principal)'                    
                    />

                    <ColeçãoContainer 
                        img={mxBanner}
                        alt="Coleção Monsta X"
                        titulo="Monsta X Yeah! We Rock The Show"
                        href="/MxStore"
                        color='var(--color-rodape-mx1)'                    
                    />

                    <ColeçãoContainer 
                        img={bpBanner}
                        alt="Coleção BlackPink"
                        titulo="BlackPink How You Like That"
                        href="/BpStore"
                        color='var(--color-fonte-bp)'                    
                    />
                </div>
            </main>

            <Rodape color='var(--color-rodape-principal)'/>
        </div>
    )
}