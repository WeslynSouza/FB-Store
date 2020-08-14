import React from 'react';

import Menu from '../../components/Menu';
import Rodape from '../../components/Rodape';

import perfilPaula from '../../assets/img/Paula.jpg';
import perfilMalu from '../../assets/img/Malu.jpg';
import perfilNanda from '../../assets/img/Nanda.jpg';

import './styles.css';

export default props => {
    return (
        <div className='conteudo'>
            <Menu color='var(--color-menu-principal)'/>
            <main className='sobre-nos'>

                <h1>Quem somos</h1>

                <h2>Conheça as pessoas por trás da loja</h2>

                <div className='perfils-container'>
                    <div className='perfil-container'>
                        <img src={perfilPaula} alt="Paula"/>
                        <h3>Paula</h3>
                    </div>

                    <div className='perfil-container'>
                        <img src={perfilMalu} alt="Malu"/>
                        <h3>Malu</h3>
                    </div>

                    <div className='perfil-container'>
                        <img src={perfilNanda} alt="Nanda"/>
                        <h3>Nanda</h3>
                    </div>
                </div>
            </main>
            <Rodape color='var(--color-rodape-principal'/>
        </div>
    )
}