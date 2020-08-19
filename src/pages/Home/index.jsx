import React, { Component } from 'react';
import Menu from '../../components/Menu';
import Rodape from '../../components/Rodape';
import ColeçãoContainer from '../../components/ColecaoContainer';
//import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import btsBanner from '../../assets/img/Slide-MOTS7.png';
import mxBanner from '../../assets/img/Slide-MX.png';
import bpBanner from '../../assets/img/Slide-HYLT.png';

import './styles.css';

class Home extends Component{

    render() {
        return (
            <div>
                <Menu color='var(--color-menu-principal)'/>
                <main>

                    {/*
                    <div className='carousel'>
                        <button className='carousel-prev'><FiChevronLeft/></button>
                        <button className='carousel-next'><FiChevronRight/></button>
    
                        <div className='carousel-item '>
                            <img src={btsBanner} alt="Slide 1"/>
                        </div>
    
                        <div className='carousel-item active'>
                            <img src={mxBanner} alt="Slide 2"/>
                        </div>
    
                        <div className='carousel-item'>
                            <img src={bpBanner} alt="Slide 3"/>
                        </div>
    
                    </div>
                    */}
    
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
}

export default Home;