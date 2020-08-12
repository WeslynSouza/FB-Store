import React from 'react';
import Menu from '../../components/Menu';
import Rodape from '../../components/Rodape';

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
                    <img src={btsBanner} alt="Coleção BTS"/>
                </div>

                <div className='banner-container'>
                    <img src={mxBanner} alt="Coleção BTS"/>
                </div>
                
                <div className='banner-container'>
                    <img src={bpBanner} alt="Coleção BTS"/>
                </div>
            </main>

            <Rodape color='var(--color-rodape-principal)'/>
        </div>
    )
}