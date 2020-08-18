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

    let lastScrolltop = 0;
    document.querySelector('#root').addEventListener("scroll", function() {
      let scrollTop = document.querySelector('#root').scrollTop;
      if(scrollTop < lastScrolltop){
        document.getElementById('nav').style.top="0";
      }else if(scrollTop <= 35){
        document.getElementById('nav').style.top="0";
      }else{
        document.getElementById('nav').style.top="-6rem";
      }
      lastScrolltop = scrollTop;
    })

    return (
        <header>
            <div className='nav'>
                <nav className='navbar' id="nav" style={{backgroundColor: props.color}}>
                    <ul className='menu'>
                        <li className='menu-item'>
                            <button onClick={openNav}>
                                <img src={menuIcon} alt="Icone de menu"/>
                            </button>
                        </li>

                        <li className='menu-item'>
                            <Link to='/'><h2>fantastic baby store</h2></Link>
                        </li>

                        <li className='menu-item'>
                            <a href='/'><img src={cartIcon} alt="Icone de carrinho"/></a>
                        </li>
                    </ul>
                </nav>
            </div>

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