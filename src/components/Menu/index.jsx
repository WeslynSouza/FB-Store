import React from 'react';
import { Link } from 'react-router-dom';

import { FaSearch, FaBars, FaShoppingCart, FaUserCircle,
     FaHome, FaMusic, FaChessRook, FaFilm, FaGamepad,FaChevronDown } from 'react-icons/fa'; 

import './styles.css';

export default props => {

    function openNav() {
        document.querySelector('#sidenav').style.width = '24rem';
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
        document.getElementById('nav').style.top="-10.4rem";
      }
      lastScrolltop = scrollTop;
    })

    return (
        <div>
            <header>
                <nav className='navbar' id="nav">
                    <div className="logo-bar">
                        <Link to='/' className='logo'>fantastic baby store</Link>
                    </div>

                    <div className="navbar-area">
                        <button onClick={openNav} className='menu-icon'>
                            <FaBars/>
                        </button>                        

                        <ul className='menu'>
                            <li className="menu-item"><FaHome/> Início</li>
                            <li className="menu-item"><FaMusic/> K-Pop</li>
                            <li className="menu-item"><FaChessRook/> Animes</li>
                            <li className="menu-item"><FaGamepad/> Jogos</li>
                            <li className="menu-item"><FaFilm/> Series</li>
                        </ul>

                        <div className="search">
                            <input type="text" name="search" id="search" placeholder="Pesquise..."/>
                            <button>
                                <FaSearch/>
                            </button>
                        </div>

                        <div className="icons">
                            <button className='search-icon'>
                                <FaSearch/>
                            </button>

                            <Link to='/' className='user-icon'>
                                <FaUserCircle/>
                            </Link>

                            <Link to='/Carrinho' className='carrinho-icon'>
                                <FaShoppingCart/>
                            </Link>
                        </div>

                    </div>

                </nav>
            </header>

            <div className='sidenav' id='sidenav'>
                <button onClick={closeNav} className='closebtn'>X</button>
                <Link to='/'>
                    <div><FaHome/> Início</div>
                </Link>
                <Link to='#'>
                    <div><FaShoppingCart/> Carrinho</div>
                </Link>
                <Link to='#'>
                    <div><FaMusic/> K-pop</div>
                    <FaChevronDown/>
                </Link>
                <Link to='#'>
                    <div><FaChessRook/> Animes</div>
                </Link>
                <Link to='#'>
                    <div><FaFilm/> FIlmes/Series</div>
                    <FaChevronDown/>
                </Link>
                <Link to='#'>
                    <div><FaGamepad/> Jogos</div>
                    <FaChevronDown/>
                </Link>
            </div>

        </div>
    )
}