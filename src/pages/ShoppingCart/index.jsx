import React from 'react';
import Menu from '../../components/Menu';
import Rodape from '../../components/Rodape'; 

import imgTeste from '../../assets/img/btsJungkook.jpg';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

import './styles.css';


export default props => {

    return (
        <div>
            <Menu color='var(--color-menu-principal)'/>
            
            <main>
                <div className="cards">
                    <div className="card">
                        <img src={imgTeste} alt="Teste"/>
                        <div className="card-detalhes">
                            <h3>Nome da camisa</h3>
                            <h3>Preto</h3>
                            <h3>M</h3>
                            <h3>
                                Quantidade: <button className='quantidade-btn'><FaChevronDown/></button> 2 <button className='quantidade-btn'><FaChevronUp/></button>
                            </h3>
                            <div className="preco-remover">
                                <h3>R$ 49,99</h3>
                                <button className='remover'>Remover</button>
                            </div>
                        </div>
                    </div>

                    <div className="card-linha"></div>
                </div>

                <div className="detalhes">
                    <div className="total">
                        <h2>Subtotal</h2>
                        <h2>R$ 100,00</h2>
                    </div>
                    <div className="entrega">
                        <h2>entrega</h2>
                        <h2 className='cep-titulo'>CEP: <div className='cep'>22222-222</div></h2>
                    </div>
                    <button className='calcular-btn'>calcular</button>

                    <div className="card-linha"></div>
                </div>

                <div className="formulario">
                    <form>

                    </form>
                </div>
            </main>

            <Rodape color='var(--color-menu-principal)'/>
        </div>
    )
}