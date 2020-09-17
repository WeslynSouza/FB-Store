import React from 'react';
import { Link } from 'react-router-dom';

import { AiOutlineMenu } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';
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
        <div>
            <header>
                <nav className='navbar' id="nav">
                    
                    <div className="navbar-area">
                        <button onClick={openNav} className='dropdown-button'>
                            <AiOutlineMenu/>
                        </button>

                        <Link to='/' className='logo'>fantastic baby store</Link>

                        <ul className='menu'>
                            <li className="menu-item">Início</li>
                            <li className="menu-item">K-Pop</li>
                            <li className="menu-item">Animes</li>
                            <li className="menu-item">Jogos</li>
                            <li className="menu-item">Series</li>
                        </ul>

                        <div className="search">
                            <input type="text" name="search" id="search" placeholder="Pesquise..."/>
                            <button>
                                <FaSearch/>
                            </button>
                        </div>

                        <Link to='/Carrinho' className='icon-carrinho'><img src={cartIcon} alt="Icone de carrinho"/></Link>
                    </div>

                </nav>
            </header>

            <div className='sidenav' id='sidenav'>
                <button onClick={closeNav} className='closebtn'>X</button>
                <Link to='/'>Início</Link>
                <Link to='#'>Carrinho</Link>
                <Link to='/SobreNos'>Sobre nós</Link>
                <Link to='/btsStore'>Map Of The Soul: 7</Link>
                <Link to='/mxStore'>Yeah! We Rock the Show</Link>
                <Link to='/bpStore'>How You Like That</Link>
            </div>

        </div>
    )
}