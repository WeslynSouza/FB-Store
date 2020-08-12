import React from 'react';

import menuIcon from '../../assets/img/Menu.png';
import cartIcon from '../../assets/img/Cart.png';

import './styles.css';

export default props => {
    return (
        <header>
            <nav style={{backgroundColor: props.color}}>
                <ul>
                    <li>
                        <a href='/'><img src={menuIcon} alt="Icone de menu"/></a>
                    </li>

                    <li>
                        <h2>fantastic baby store</h2>
                    </li>

                    <li>
                        <a href='/'><img src={cartIcon} alt="Icone de carrinho"/></a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}