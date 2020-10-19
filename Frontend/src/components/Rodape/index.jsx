import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

import visa from '../../assets/img/visa.png';
import master from '../../assets/img/master.png';
import elo from '../../assets/img/elo.png';
import hiper from '../../assets/img/hipercard.png';
import ae from '../../assets/img/ae.png';
import dc from '../../assets/img/dc.png';
import boleto from '../../assets/img/boleto.png';

import './styles.css';

export default props => {
    return (
        <footer>
            <h1>fantastic baby store</h1>

            <h2>Entre em contato</h2>
            <p>Tel.:(00) 92222-1111</p>
            <p>Email: Fbs@gmail.com</p>

            <h2>Sobre a loja</h2>
            <Link to='#'>Sobre nós</Link>
            <Link to='#'>Pedidos custumizados</Link>
            <Link to='#'>FAQ(Perguntas frequentes)</Link>

            <h2>FBS nas redes sociais</h2>

            <div className="redes">
                <FaInstagram/>
                <FaFacebook/>
                <FaTwitter/>
            </div>

            <h2>Formas de pagamento (wirecard)</h2>

            <div className="pagamento">
                <div className="cartao">
                    <h3>Cartões de credito</h3>
                    <div className="pag-icons">
                        <img src={visa} alt="visa"/>
                        <img src={master} alt="mastercard"/>
                        <img src={elo} alt="elo"/>
                        <img src={hiper} alt="hipercard"/>
                        <img src={ae} alt="amercian express"/>
                        <img src={dc} alt="diner club"/>
                    </div>
                </div>
                <div className="boleto">
                    <h3>Boleto</h3>
                    <img src={boleto} alt="boleto"/>
                </div>
            </div>

            <h4>Soft Systems &copy; 2020</h4>
        </footer>
    )
}