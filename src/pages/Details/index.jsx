import React, { Component } from 'react';
import Menu from '../../components/Menu';
import Rodape from '../../components/Rodape';

import './styles.css';

class Details extends Component {

    render() {
        return (
            <div>
                <Menu color='var(--color-menu-mx1)'/>
                <main className='camisa-detalhes'>
                    <div className='camisa-detalhes-container'>
                        {/*Slide*/}
                        <div className='camisa-detalhes-box'>
                            
                            <div className='camisa-detalhes-info'>
                                <h1>Titulo</h1>
                                <h1>Preço</h1>
                            </div>

                            <div className='camisa-detalhes-cor'>
                                <h2>Escolha a cor da camisa:</h2>
                            </div>

                            <div className='camisa-detalhes-cor'>
                                <h2>Escolha a cor da camisa:</h2>
                            </div>

                        </div>

                        <button>
                            comprar
                        </button>
                    </div>
                </main>
                <Rodape color='var(--color-rodape-mx1'/>
            </div>
        )
    }
}

export default Details;