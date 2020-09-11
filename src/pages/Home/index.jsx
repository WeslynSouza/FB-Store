import React, { Component } from 'react';
import Menu from '../../components/Menu';
import Rodape from '../../components/Rodape';
import ColeçãoContainer from '../../components/ColecaoContainer';
import Slide from '../../components/Slide';
import SlideItem from '../../components/slideItem';

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

                    <div className='banner-container'>
                        <Slide>
                            <SlideItem img={btsBanner} alt='bts' ativo='true'/>
                            <SlideItem img={mxBanner} alt='Mx'/>
                            <SlideItem img={bpBanner} alt='Bp'/>
                        </Slide>

                        <div className="colecoes">
                            <ColeçãoContainer 
                                img={btsBanner}
                                alt="Coleção bts"
                                titulo="BTS Map Of The Soul 7"
                                href="/BtsStore"               
                            />
        
                            <ColeçãoContainer 
                                img={mxBanner}
                                alt="Coleção Monsta X"
                                titulo="Yeah! We Rock The Show"
                                href="/MxStore"               
                            />
        
                            <ColeçãoContainer 
                                img={bpBanner}
                                alt="Coleção BlackPink"
                                titulo="How You Like That"
                                href="/BpStore"                 
                            />
                        </div>
                    </div>
                </main>
                <Rodape color='var(--color-rodape-principal)'/>
            </div>
        )
    }
}

export default Home;