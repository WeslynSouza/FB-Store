import React, { Component } from 'react';
import Menu from '../../components/Menu';
import Rodape from '../../components/Rodape';
import Slide from '../../components/Slide';
import SlideItem from '../../components/slideItem';

import btsBanner from '../../assets/img/mxWalker.jpg';
import mxBanner from '../../assets/img/btsJungkook.jpg';

import './styles.css';

class Details extends Component {

    render() {
        return (
            <div>
                <Menu color='var(--color-menu-mx1)'/>
                <div className='camisa-detalhes' style={{background: 'var(--color-bg-mx1)'}}>
                    <div className='camisa-detalhes-container'>
                        
                        <Slide>
                            <SlideItem img={btsBanner} alt='bts' ativo/>
                            <SlideItem img={mxBanner} alt='mx'/>
                        </Slide>
                        
                        <div className='camisa-detalhes-box' style={{background: 'var(--color-caixa-mx1)'}}>
                            
                            <div className='camisa-detalhes-info'>
                                <h1>Titulo</h1>
                                <h1>Preço</h1>
                            </div>

                            <div className='camisa-detalhes-cor'>
                                <h2>Escolha a cor da camisa:</h2>
                            </div>

                            <div className='camisa-detalhes-tamanho'>
                                <h2>Escolha o tamanho da camisa:</h2>
                            </div>

                        </div>

                        <button className='camisa-detalhes-button'>
                            comprar
                        </button>
                    </div>
                </div>
                <Rodape color='var(--color-rodape-mx1'/>
            </div>
        )
    }
}

export default Details;