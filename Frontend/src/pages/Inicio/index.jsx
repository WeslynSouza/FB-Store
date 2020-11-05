import React, { Component } from 'react';
import Menu from '../../components/Menu';
import Rodape from '../../components/Rodape';
import ColeçãoContainer from '../../components/ColecaoContainer';

import btsBanner from '../../assets/img/Slide-MOTS7.png';
import mxBanner from '../../assets/img/Slide-MX.png';
import bpBanner from '../../assets/img/Slide-HYLT.png';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaCircle, FaRegCircle } from 'react-icons/fa';

import './styles.css';

let slideIndex = 1;

function prevSlide(){
    mostrarSlides(slideIndex -= 1);
}

function nextSlide(n){
    mostrarSlides(slideIndex += 1);
}

function mostrarSlides(n) {
    let slides = document.getElementsByClassName('slide-item');
    if(n > slides.length) slideIndex = 1;
    if(n < 1) slideIndex = slides.length;
    for(let i = 0; i < slides.length; i++){
        slides[i].classList.remove('active');
    }
    slides[slideIndex - 1].classList.add('active');
}

class Home extends Component{

    render() {
        return (
            <div>
                <Menu color='var(--color-menu-principal)'/>
                <main>

                    <div className='banner-container'>
                        
                        <div className="slide">
                            <button className='slide-prev' onClick={prevSlide}><FiChevronLeft/></button>
                            <button className='slide-next' onClick={nextSlide}><FiChevronRight/></button>

                            <div className="slide-items">
                                <div className={`slide-item active`}>
                                    <img src={btsBanner} alt='slide'/>
                                </div>
                                <div className={`slide-item `}>
                                    <img src={mxBanner} alt='slide'/>
                                </div>
                                <div className={`slide-item `}>
                                    <img src={bpBanner} alt='slide'/>
                                </div>
                            </div>

                            <div className='slide-options'>
                                <FaCircle/>
                                <FaRegCircle/>
                                <FaRegCircle/>
                            </div>
                        </div>

                        <div className="menu-carousel">
                            <button>Kpop</button>
                            <button>Jogos</button>
                            <button>Animes</button>
                        </div>

                        <div className="colecoes">

                            <h1 className='colecoes-titulo'>Confira as nossas coleções</h1>

                            <ColeçãoContainer 
                                img={btsBanner}
                                alt="Coleção bts"
                                titulo="BTS Map Of The Soul 7"
                                href="/"               
                            />
        
                            <ColeçãoContainer 
                                img={mxBanner}
                                alt="Coleção Monsta X"
                                titulo="Yeah! We Rock The Show"
                                href="/"               
                            />
        
                            <ColeçãoContainer 
                                img={bpBanner}
                                alt="Coleção BlackPink"
                                titulo="How You Like That"
                                href="/"                 
                            />
                        </div>
                    </div>
                </main>
                <Rodape color='var(--color-rodape-principal)'/>
            </div>
        )
    }
}

export default Home;