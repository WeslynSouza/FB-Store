import React from 'react';
import { Link } from 'react-router-dom';

import menuIcon from '../../assets/img/Menu.png';
import cartIcon from '../../assets/img/Cart.png';

import './styles.css';

export default props => {

    function openNav() {
        document.querySelector('#sidenav').style.width = '27rem';
        document.querySelector("nav").style.opacity = '0.9';
    }

    function closeNav() {
        document.querySelector('#sidenav').style.width = '0';
        document.querySelector("nav").style.opacity = '1';
    }

    return (
        <header>
            <nav style={{backgroundColor: props.color}}>
                <ul>
                    <li>
                        <button onClick={openNav}>
                            <img src={menuIcon} alt="Icone de menu"/>
                        </button>
                    </li>

                    <li>
                        <Link to='/'><h2>fantastic baby store</h2></Link>
                    </li>

                    <li>
                        <a href='/'><img src={cartIcon} alt="Icone de carrinho"/></a>
                    </li>
                </ul>
            </nav>

            <div className='sidenav' id='sidenav' style={{background: props.color}}>
                <button onClick={closeNav} className='closebtn'>X</button>
                <Link to='/'>Início</Link>
                <Link to='#'>Carrinho</Link>
                <Link to='/SobreNos'>Sobre nós</Link>
                <Link to='/btsStore'>Map Of The Soul: 7</Link>
                <Link to='/mxStore'>Yeah! We Rock the Show</Link>
                <Link to='/bpStore'>How You Like That</Link>
            </div>

        </header>
    )
}