import React from 'react';
import Menu from '../../components/Menu';
import Rodape from '../../components/Rodape';
import { Link } from 'react-router-dom';

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
                    <Link to='/'>
                        <img src={btsBanner} alt="Coleção BTS" className='homeBanner'/>
                    </Link>
                </div>

                <div className='banner-container'>
                    <Link to='/MxStore'>
                        <img src={mxBanner} alt="Coleção Monsta X" className='homeBanner'/>
                    </Link>
                </div>
                
                <div className='banner-container'>
                    <Link to='/'>
                        <img src={bpBanner} alt="Coleção Black Pink" className='homeBanner'/>
                    </Link>
                </div>
            </main>

            <Rodape color='var(--color-rodape-principal)'/>
        </div>
    )
}